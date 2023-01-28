var namePairs = [];
var ignoreLevel = 'filter';
var ruleChange = false;
var panic;

var nameList;
var censorList;
var df;
var scan = false;

// optionally take a node, title if not specified
function stringFilter(string, reverse = false) {
    if (!string) {
        return string;
    }
    // check if string is blank space
    if (string.trim().length == 0) {
        return string;
    }
    namePairs.forEach(function (pair, pi) {
        if (scan) {
            // check if string contains a match for any of the names, and if it does, add the website to the hostname list as "default"
            if (new RegExp('\\b' + pair.name_input + '\\b', 'gi').test(string)) {
                host = window.location.hostname;
                chrome.storage.sync.get('hostname_list', (items) => {
                    console.log(items.hostname_list[host])
                    if (!items.hostname_list[host]) {
                        items.hostname_list[host] = 'default';
                        chrome.storage.sync.set({ hostname_list: items.hostname_list });
                    }
                })
            }
        }
        if (ignoreLevel !== 'no filter' && ignoreLevel !== 'no text') {
            (reverse ? pair.sub_caps : pair.name_caps).forEach((caps, i) => {
                string = string.replace(new RegExp('(?<![a-zA-Z])' + caps + '(?![a-zA-Z])'),(reverse ? pair.name_caps : pair.sub_caps)[i])
            })
            string = string.replace(new RegExp('\\b' + (reverse ? pair.sub_input : pair.name_input) + '\\b', 'gi'),(reverse ? pair.name_input : pair.sub_input));
    
            string = string.replace(new RegExp('\\w*' + (reverse ? pair.sub_input : pair.name_input) + '\\w*', 'gi'), function (match) {
                lower = match.toLowerCase();
                if (!pair.sus_list.includes(lower) && !nameList.includes(lower)) {
                    namePairs[pi].sus_list.push(lower);
                    throw_sus();
                }
                if (reverse) {
                    return pair.name_input
                } else if (pair.allow_list.includes(lower)) {
                    return match;
                } else if (!df.ss) {
                    return match;
                } else {
                    let censor = '⍰'.repeat(match.length)
                    if (!nameList.includes(match)) {
                        while (censorList.includes(censor)) {
                            censor += '\u{200B}';
                        }
                        censorList.push(censor)
                        nameList.push(match)
                        namePairs.push({
                            "name_input": match,
                            "sub_input": censor,
                            "name_caps": [],
                            "sub_caps": [],
                            "allow_list": [],
                            "sus_list": []
                        })
                    }
                    return censor
                }
            })
        }
    })
    return string
}

async function throw_sus() {
        chrome.storage.sync.get('namepair_list', (items) => {
            items.namepair_list.forEach((pair, i) => {
                namePairs[i].sus_list.forEach(sus => {
                    if (!pair.sus_list.includes(sus)) {
                        items.namepair_list[i].sus_list.push(sus);
                    }
                })
            })
            chrome.storage.sync.set({ namepair_list: items.namepair_list }, () => {
            })
        })
}

function todeFilter(textNode) {
    let filtered = stringFilter(textNode.nodeValue);
    if (filtered != textNode.nodeValue) {
        textNode.nodeValue = filtered;
    }
}

function elemFilter(elem) {
    if (!elem) {
        return;
    }
    var walk = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT);
    while (node = walk.nextNode()) {
        if (!isExcluded(node.parentElement)) {
            todeFilter(node);
            charObs.observe(node, {
                characterData: true
            });
        }
    }
}

function isExcluded(elm) {
    if (elm.tagName == "STYLE" || elm.tagName == "SCRIPT" || elm.tagName == "NOSCRIPT" ||
        elm.tagName == "IFRAME" || elm.tagName == "OBJECT" || elm.tagName == "HEAD" ||
        elm.contentEditable == "true") {
        return true;
    }
    return false
}

var docObs = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(element => {
            if (element.nodeType == Node.ELEMENT_NODE) {
                elemFilter(element);
            } else if (element.nodeType == Node.TEXT_NODE) {
                todeFilter(element);
            }
        });
    });
    docObs.takeRecords();
});

var charObs = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        todeFilter(mutation.target)
    });
    charObs.takeRecords();
});

var titleObs = new MutationObserver(function (mutations) {
    let filtered = stringFilter(document.title);
    if (filtered != document.title) {
        document.title = filtered;
    }
    titleObs.takeRecords();
});

function initText() {
    chrome.storage.sync.get('namepair_list', (items) => {
        namePairs = items.namepair_list;
        nameList = namePairs.map(pair => pair.name_input.toLowerCase());
        if (!panic) {
            elemFilter(document.body);
            elemFilter(document.head);

            let titlefiltered = stringFilter(document.title);
            if (titlefiltered != document.title) {
                document.title = titlefiltered;
            }

            if (document.querySelector('head > title')) {
                titleObs.observe(document.querySelector('head > title'), {
                    characterData: true,
                    childList: true
                });
            }

            //start observing for new nodes
            if (document.body) {
                // for each element in the body, elem filter it
                document.querySelectorAll('*').forEach(elem => {
                    elemFilter(elem);
                })
                
                docObs.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        }
    });
}

var stylesheet;
function addLoginStyles() {
    let link = document.createElement("link");
    link.href = chrome.runtime.getURL('content.css');
    link.type = "text/css";
    link.rel = "stylesheet";
    stylesheet = link;
    document.getElementsByTagName("head")[0].appendChild(link);
}

function load() {
    nameList = [];
    censorList = [];

    chrome.storage.local.get('panic', (items) => {
        panic = items.panic || false;
        if (panic) {
            return
        }
        chrome.storage.sync.get('defaults', (items) => {
            df = items.defaults;

            chrome.storage.sync.get('hostname_list', (items) => {
                if (items.hostname_list[window.location.hostname]) {
                    ignoreLevel = items.hostname_list[window.location.hostname]
                } else {
                    ignoreLevel = df.nw ? 'filter' : 'no filter';
                    scan = df.sn;
                }
                if (ignoreLevel == 'default') {
                    ignoreLevel = df.nw ? 'filter' : 'no filter';
                }
                if (window.location.hostname == 'chat.google.com') {
                    ignoreLevel = 'no filter';
                }
                if (ignoreLevel !== 'no login' && ignoreLevel !== 'no filter') {
                    addLoginStyles();
                }

                if (((ignoreLevel !== 'no filter' && ignoreLevel !== 'no text') || scan) && !panic) {
                    initText();
                }
            });
        })
    })
}

load();

var hidden = false;

var parseChanges = function (changes, namespace) {
    if (namespace == 'local') {
        if (changes.panic) {
            if (changes.panic.newValue) {
                panic = true;
            } else {
                panic = false;
            }
            ruleChange = true;
            update();
        }
        if (changes.panic_hotkey) {
            if (changes.panic_hotkey.newValue) {
                document.addEventListener('keydown', track_escapes)
            } else {
                document.removeEventListener('keydown', track_escapes)
            }
        }
    } else if (!panic) {
        ruleChange = true;
        update();
    }
}

chrome.storage.onChanged.addListener(parseChanges);

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        hidden = true;
    } else {
        hidden = false;
        update();
    }
});

var escapeCount = 0;

chrome.storage.local.get('panic_hotkey', (items) => {
    panic_hotkey = items.panic_hotkey || false;

    if (panic_hotkey) {
        document.addEventListener('keydown', track_escapes)
    }
})

function track_escapes(keypress) {
    if (keypress.key == 'Escape') {
        escapeCount++;
        if (escapeCount == 3) {
            panic = true;
            ruleChange = true;
            chrome.storage.local.set({ panic: true }, () => {
                update();
            });
            escapeCount = 0;
        }
    } else {
        escapeCount = 0;
    }
}

function update() {
    if (ruleChange) {
        if (!hidden) {
            ruleChange = false;
            revert();
            load();
            document.documentElement.style.visibility = 'visible';
        } else {
            if (panic) {
                titleObs.disconnect();
                let filtered = stringFilter(document.title, true);
                if (filtered != document.title) {
                    document.title = filtered;
                }
            }
            document.documentElement.style.visibility = 'hidden';
        }
    }
}

function revert() {
    if (ignoreLevel == 'no filter' || ignoreLevel == 'no text') {
        return;
    }
    if (ignoreLevel !== 'no login') {
        stylesheet.remove();
    }
    docObs.disconnect();
    charObs.disconnect();
    titleObs.disconnect();
    namePairs = namePairs.sort(function (a, b) {
        return a['sub_input'].toLowerCase().includes(b['sub_input'].toLowerCase()) ? -1 : 0;
    })
    let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (node = walk.nextNode()) {
        if (!isExcluded(node.parentElement)) {
            let filtered = stringFilter(node.nodeValue, true);
            if (filtered != node.nodeValue) {
                node.nodeValue = filtered;
            }
        }
    }
    let titlefiltered = stringFilter(document.title, true);
    if (titlefiltered != document.title) {
        document.title = stringFilter(document.title, true);
    }
}