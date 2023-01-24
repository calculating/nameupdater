const fonts = {
    "none": [],
    "mono": [
        ['a','\u{1D68A}'], ['b','\u{1D68B}'], ['c','\u{1D68C}'], ['d','\u{1D68D}'], ['e','\u{1D68E}'], ['f','\u{1D68F}'], ['g','\u{1D690}'], ['h','\u{1D691}'], ['i','\u{1D692}'], ['j','\u{1D693}'], ['k','\u{1D694}'], ['l','\u{1D695}'], ['m','\u{1D696}'], ['n','\u{1D697}'], ['o','\u{1D698}'], ['p','\u{1D699}'], ['q','\u{1D69A}'], ['r','\u{1D69B}'], ['s','\u{1D69C}'], ['t','\u{1D69D}'], ['u','\u{1D69E}'], ['v','\u{1D69F}'], ['w','\u{1D6A0}'], ['x','\u{1D6A1}'], ['y','\u{1D6A2}'], ['z','\u{1D6A3}'], 
        ['A', '\u{1D670}'], ['B', '\u{1D671}'], ['C', '\u{1D672}'], ['D', '\u{1D673}'], ['E', '\u{1D674}'], ['F', '\u{1D675}'], ['G', '\u{1D676}'], ['H', '\u{1D677}'], ['I', '\u{1D678}'], ['J', '\u{1D679}'], ['K', '\u{1D67A}'], ['L', '\u{1D67B}'], ['M', '\u{1D67C}'], ['N', '\u{1D67D}'], ['O', '\u{1D67E}'], ['P', '\u{1D67F}'], ['Q', '\u{1D680}'], ['R', '\u{1D681}'], ['S', '\u{1D682}'], ['T', '\u{1D683}'], ['U', '\u{1D684}'], ['V', '\u{1D685}'], ['W', '\u{1D686}'], ['X', '\u{1D687}'], ['Y', '\u{1D688}'], ['Z', '\u{1D689}']
    ],
    "italic": [
        ['a','\u{1D622}'], ['b','\u{1D623}'], ['c','\u{1D624}'], ['d','\u{1D625}'], ['e','\u{1D626}'], ['f','\u{1D627}'], ['g','\u{1D628}'], ['h','\u{1D629}'], ['i','\u{1D62A}'], ['j','\u{1D62B}'], ['k','\u{1D62C}'], ['l','\u{1D62D}'], ['m','\u{1D62E}'], ['n','\u{1D62F}'], ['o','\u{1D630}'], ['p','\u{1D631}'], ['q','\u{1D632}'], ['r','\u{1D633}'], ['s','\u{1D634}'], ['t','\u{1D635}'], ['u','\u{1D636}'], ['v','\u{1D637}'], ['w','\u{1D638}'], ['x','\u{1D639}'], ['y','\u{1D63A}'], ['z','\u{1D63B}'], 
        ['A', '\u{1D608}'], ['B', '\u{1D609}'], ['C', '\u{1D60A}'], ['D', '\u{1D60B}'], ['E', '\u{1D60C}'], ['F', '\u{1D60D}'], ['G', '\u{1D60E}'], ['H', '\u{1D60F}'], ['I', '\u{1D610}'], ['J', '\u{1D611}'], ['K', '\u{1D612}'], ['L', '\u{1D613}'], ['M', '\u{1D614}'], ['N', '\u{1D615}'], ['O', '\u{1D616}'], ['P', '\u{1D617}'], ['Q', '\u{1D618}'], ['R', '\u{1D619}'], ['S', '\u{1D61A}'], ['T', '\u{1D61B}'], ['U', '\u{1D61C}'], ['V', '\u{1D61D}'], ['W', '\u{1D61E}'], ['X', '\u{1D61F}'], ['Y', '\u{1D620}'], ['Z', '\u{1D621}']
    ],
    "line": [
        ['a','a\u{35F}'], ['b','b\u{35F}'], ['c','c\u{35F}'], ['d','d\u{35F}'], ['e','e\u{35F}'], ['f','f\u{35F}'], ['g','g\u{35F}'], ['h','h\u{35F}'], ['i','i\u{35F}'], ['j','j\u{35F}'], ['k','k\u{35F}'], ['l','l\u{35F}'], ['m','m\u{35F}'], ['n','n\u{35F}'], ['o','o\u{35F}'], ['p','p\u{35F}'], ['q','q\u{35F}'], ['r','r\u{35F}'], ['s','s\u{35F}'], ['t','t\u{35F}'], ['u','u\u{35F}'], ['v','v\u{35F}'], ['w','w\u{35F}'], ['x','x\u{35F}'], ['y','y\u{35F}'], ['z','z\u{35F}'], 
        ['A', 'A\u{35F}'], ['B', 'B\u{35F}'], ['C', 'C\u{35F}'], ['D', 'D\u{35F}'], ['E', 'E\u{35F}'], ['F', 'F\u{35F}'], ['G', 'G\u{35F}'], ['H', 'H\u{35F}'], ['I', 'I\u{35F}'], ['J', 'J\u{35F}'], ['K', 'K\u{35F}'], ['L', 'L\u{35F}'], ['M', 'M\u{35F}'], ['N', 'N\u{35F}'], ['O', 'O\u{35F}'], ['P', 'P\u{35F}'], ['Q', 'Q\u{35F}'], ['R', 'R\u{35F}'], ['S', 'S\u{35F}'], ['T', 'T\u{35F}'], ['U', 'U\u{35F}'], ['V', 'V\u{35F}'], ['W', 'W\u{35F}'], ['X', 'X\u{35F}'], ['Y', 'Y\u{35F}'], ['Z', 'Z\u{35F}']
    ]
}


// ------------------------------ Setting constants for core elements ------------------------------

// host list area
const host_template = document.getElementById('host-row-template');
const host_container = document.getElementById('host-rows');
const host_add_button = document.getElementById('add-host-row-button');

// pair list area
const pair_template = document.getElementById('pair-row-template');
const pair_container = document.getElementById('pair-rows');
const pair_add_button = document.getElementById('add-pair-row-button');

// save button
const save_button = document.getElementById('save-button');
const substring_button = document.getElementById('substring-default-button');
const website_button = document.getElementById('website-default-button');
const panic_config_button = document.getElementById('panic-hotkey-button');


const panic_button = document.getElementById('panic-button');
// dictionary to load
var dict = false;

// --------------------------------- Setting up event listeners ---------------------------------

// save when save is clicked, update to unsaved when anything changes
save_button.addEventListener('click', () => {
    save();
});

panic_button.addEventListener('click', () => {
    chrome.storage.local.get('panic', (items) => {
        chrome.storage.local.set({
            panic: !items.panic
        });
    });
});

substring_button.addEventListener('click', () => {
    toggleSubstringButton();
    unsave();
})

website_button.addEventListener('click', () => {
    toggleWebsiteButton();
    unsave();
})

panic_config_button.addEventListener('click', () => {
    togglePanicConfigButton();
    unsave();
})

document.body.addEventListener('change', () => {
    unsave()
});

document.querySelectorAll('select, input').forEach((element) => {
    element.addEventListener('change', () => {
        unsave();
    });
})


function togglePanicConfigButton() {
    if (panic_config_button.classList.contains('happy-button')) {
        panic_config_button.classList.remove('happy-button');
        panic_config_button.classList.add('angry-button');
        panic_config_button.textContent = 'Triple-escape panic: ON'
    } else {
        panic_config_button.classList.remove('angry-button');
        panic_config_button.classList.add('happy-button');
        panic_config_button.textContent = 'Triple-escape panic: OFF'
    }
}

// add rows when add row buttons are clicked
document.getElementById('add-host-row-button').addEventListener('click', () => {
    addRow('host');
});
document.getElementById('add-pair-row-button').addEventListener('click', () => {
    addRow('pair');
});

// add listener to render fonts whenever a sub-input is changed
pair_container.addEventListener('input', (event) => {
    if (event.target.classList.contains('sub-input')) {
        renderFonts(event.target.closest('.row').querySelector('.marking-select'));
    }
});
pair_container.addEventListener('change', (event) => {
    if (event.target.classList.contains('name-input')) {
        if (namepair_list.map((pair) => pair.name_input).includes(event.target.value)) {
            event.target.value = '';
        } else {
            updateSubstrings(event.target);
        }
    }
});


var escapeCount = 0;
document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        document.querySelectorAll(".popup:not(.hidden)").forEach((popup) => {
            popup.classList.add("hidden");
        });
        escapeCount++;
        if (escapeCount == 3) {
            panic = true;
            ruleChange = true;
            chrome.storage.local.set({ panic: true }, () => {
                doPanic();
            });
            escapeCount = 0;
        }
    } else {
        escapeCount = 0;
    }
})

document.addEventListener('click', (event) => {
    if (!(event.target.closest('.popup') || event.target.classList.contains('substring-allow-button') || event.target.classList.contains('substring-warning-button'))) {
        document.querySelectorAll(".popup:not(.hidden)").forEach((popup) => {
            popup.classList.add("hidden");
        });
    }
})

// --------------------------------- Basic function setup ---------------------------------

// global variables
var hostname_list, namepair_list;

function contentSwap(button) {
    popup = button.closest('.popup');
    
    popup_content = popup.querySelector('.popup-content');
    other_content = popup.closest('.row').querySelector('.popup.hidden>.popup-content');

    popup_content.querySelectorAll('span').forEach((span) => {
        moveMe(span)
    });

    popup.classList.add('hidden');

    updateSubstrings(button.closest('.row').querySelector('.name-input'));
}

// save and unsave functions
function save() {
    // update hostname_list and namepair_list from the document content, if the name inputs don't have a value then remove the row, if the substitution row is empty, then set it to '???', if the host input is empty, then remove the row, if the sus popup or allow popups have no spans, just save empty arrays.
    let new_hostname_list = {};
    let new_namepair_list = [];
    host_container.querySelectorAll('.row').forEach((row) => {
        let host_input = row.querySelector('.host-input');
        let filter_input = row.querySelector('.filter-select');
        if (host_input.value != '') {
            new_hostname_list[host_input.value] = filter_input.value;
        }
    })

    let sublist = [];
    pair_container.querySelectorAll('.row').forEach((row) => {
        let name_input = row.querySelector('.name-input');
        let sub_input = row.querySelector('.sub-input');
        let mark_input = row.querySelector('.marking-select');
        let sus_popup = row.querySelector('.sus>.popup-content');
        let allow_popup = row.querySelector('.allow>.popup-content');

        sub_input.value += '\u{200B}'
        while (sublist.includes(sub_input.value)) {
            sub_input.value += '\u{200B}';
        }
        sublist.push(sub_input.value);

        if (name_input.value != '') {
            if (sub_input.value == '') {
                sub_input.value = '???';
            }
            new_namepair_list.push({
                "name_input": name_input.value,
                "sub_input": convertFont(sub_input.value, mark_input.value),
                "sub_unmarked": sub_input.value,
                "name_caps": [
                    convertFont(name_input.value.toLowerCase(), mark_input.value),
                    convertFont(name_input.value[0].toUpperCase() + name_input.value.slice(1).toLowerCase(), mark_input.value),
                    convertFont(name_input.value.toUpperCase(), mark_input.value)
                ],
                "mark": mark_input.value,
                "sub_caps": [
                    sub_input.value.toLowerCase(),
                    sub_input.value[0].toUpperCase() + sub_input.value.slice(1).toLowerCase(),
                    sub_input.value.toUpperCase()
                ],
                "allow_list": Array.from(allow_popup.querySelectorAll('span')).map((span) => span.textContent),
                "sus_list": Array.from(sus_popup.querySelectorAll('span')).map((span) => span.textContent)
            })
        }
    })
    // update the global variables
    hostname_list = new_hostname_list;
    namepair_list = new_namepair_list;

    namepair_list = namepair_list.sort(function (a, b) {
        return a['name_input'].toLowerCase().includes(b['name_input'].toLowerCase()) ? -1 : 0;
    })
    // save to chrome.storage.sync
    chrome.storage.sync.set({
        "hostname_list": hostname_list,
        "namepair_list": namepair_list,
        "defaults": {
            'ss': substring_button.classList.contains('angry-button'),
            'nw': website_button.classList.contains('angry-button')
        }
    }, () => {
        save_button.textContent = 'Config saved.';
        save_button.style.backgroundColor = '#7c8cc3';

        // re-render pairs and hosts. Also update substrings.

        renderHosts();
        renderPairs();
        document.querySelectorAll('.name-input').forEach((input) => {
            updateSubstrings(input);
        })
    });
    chrome.storage.local.set({
        "panic_hotkey": panic_config_button.classList.contains('angry-button')
    })
}
function unsave() {
    save_button.textContent = 'Unsaved changes!';
    save_button.style.backgroundColor = '#df99ba';
}

function moveMe(span) {
    unsave();
    let row = span.closest('.row');
    let other_popup = row.querySelector('.popup.hidden>.popup-content');
    other_popup.appendChild(span);
}

// takes a value "host" or "pair" and creates the corresponding row
function addRow(type) {
    let newRow = (type == 'pair') ? pair_template.cloneNode(true) : host_template.cloneNode(true);
    (type == 'pair') ? pair_container.appendChild(newRow) : host_container.appendChild(newRow);

    if (type == 'pair') {
        newRow.querySelectorAll('.popup-close').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.target.closest('.popup').classList.add('hidden');
            })
        })
        newRow.querySelector('.substring-warning-button').addEventListener("click", function() {
            newRow.querySelector('.sus').classList.remove("hidden");
        });
        //substring-allow-button
        newRow.querySelector('.substring-allow-button').addEventListener("click", function() {
            newRow.querySelector('.allow').classList.remove("hidden");
        });

        newRow.querySelectorAll('.all-button').forEach((button) => {
            button.addEventListener('click', (event) => {
                contentSwap(event.target);
            })
        })
    } else {
        if (website_button.classList.contains('happy-button')) {
            newRow.querySelector('.filter-select').value = 'filter';
        }
    }
    // (add functionality to remove button)
    newRow.querySelector('.remove-button').addEventListener('click', (event) => {
        delRow(event.target);
        unsave();
    })

    // show row
    newRow.style.display = '';

    // (if called from the render function, it passes the row object so the values can be set)
    return newRow;
}

// remove row function
function delRow(elem) {
    elem.closest('.row').remove();
}



// --------------------------------- Rendering functions ---------------------------------

// show what the replacement will look like in the marking selector
function renderFonts(elem) {
    let sub = elem.closest('.row').querySelector('.sub-input').value;
    let options = elem.querySelectorAll('option');
    options.forEach((option) => {
        if (option.value == 'none') {
            option.textContent = '(No marking)'
            return
        }
        option.textContent = convertFont(sub, option.value);
    });
}

function convertFont(string, font) {
    fonts[font].forEach((letterSub) => {
        string = string.replaceAll(letterSub[0], letterSub[1]);
    })
    return string;
}


async function updateSubstrings(elem) {
    if (elem.value == '') {
        return
    }
    row = elem.closest('.row');
    sus = row.querySelector('.sus>.popup-content');
    allow = row.querySelector('.allow>.popup-content');
    spansSus= sus.querySelectorAll('span')
    spansAllow = allow.querySelectorAll('span')
    searchName = elem.value.toLowerCase();
    let allNames = Array.from(document.querySelectorAll('.name-input')).map((input) => input.value.toLowerCase());
    spansSus.forEach((span) => {
        if (!span.textContent.includes(searchName) || allow.textContent.includes(span.textContent)) {
            span.remove();
        }
        if (allNames.includes(span.textContent)) {
            span.remove();
        }
    })
    spansAllow.forEach((span) => {
        if (!span.textContent.includes(searchName)) {
            span.remove();
        }
        if (allNames.includes(span.textContent)) {
            span.remove();
        }
    })

    if (dict) {
        dict.forEach((word) => {
            if (word.includes(searchName)) {
                if (searchName !== word && !allow.textContent.includes(word) && !sus.textContent.includes(word)) {;
                    if (allNames.includes(word)) {
                        return;
                    }
                    let newSpan = document.createElement('span');
                    newSpan.addEventListener('click', (event) => {
                        moveMe(event.target);
                        updateSubstrings(event.target.closest('.row').querySelector('.name-input'))
                    })
                    newSpan.textContent = word;
                    sus.appendChild(newSpan);
                }
            }
        })
    }

    susButton = row.querySelector('.substring-warning-button');
    allowButton = row.querySelector('.substring-allow-button');

    if (sus.textContent.length > 0) {
        susButton.style.display = '';
        susButton.textContent = `ambiguities (${sus.querySelectorAll('span').length})`;
    } else {
        susButton.style.display = 'none';
    }
    if (allow.textContent.length > 0) {
        allowButton.style.display = '';
        allowButton.textContent = `allowed: ${allow.querySelectorAll('span').length}`;
    } else {
        allowButton.style.display = 'none';
    }

}

function renderHosts() {
    host_container.innerHTML = '';
    for (config in hostname_list) {
        let newRow = addRow('host');

        let hostInput = newRow.querySelector('.host-input');
        hostInput.value = config;
        let filterSelect = newRow.querySelector('.filter-select');
        filterSelect.value = hostname_list[config];
    }
}

// render list of name pairs
function renderPairs() {
    pair_container.innerHTML = '';
    namepair_list.forEach((pair) => {
        let newRow = addRow('pair');
        pair.sub_input = pair.sub_input.replace('\u200B','');
        let nameInput = newRow.querySelector('.name-input');
        nameInput.value = pair.name_input;
        let subInput = newRow.querySelector('.sub-input');
        subInput.value = pair.sub_unmarked.replace('\u200B','');
        let markSelect = newRow.querySelector('.marking-select');
        markSelect.value = pair.mark;

        let susField = newRow.querySelector('.sus>.popup-content');
        let allowField = newRow.querySelector('.allow>.popup-content');
        // for each element of pair.sus_list, create a span element with the value as its textContent, and append it to the field
        pair.sus_list.forEach((substring) => {
            newSpan = document.createElement('span');
            newSpan.addEventListener('click', (event) => {
                moveMe(event.target);
                updateSubstrings(event.target.closest('.row').querySelector('.name-input'))
            })
            newSpan.textContent = substring;
            susField.appendChild(newSpan);
        });
        pair.allow_list.forEach((substring) => {
            newSpan = document.createElement('span');
            newSpan.addEventListener('click', (event) => {
                moveMe(event.target);
                updateSubstrings(event.target.closest('.row').querySelector('.name-input'))
            })
            newSpan.textContent = substring;
            allowField.appendChild(newSpan);
        });

        renderFonts(markSelect);
    });
}

// --------------------------------- Loading function ---------------------------------
function load() {
    chrome.storage.sync.get('hostname_list', (items) => {
        hostname_list = items.hostname_list || {};
        renderHosts();
    });
    chrome.storage.sync.get('namepair_list', (items) => {
        namepair_list = items.namepair_list || [];
        renderPairs();
    });
    chrome.storage.sync.get('defaults', (items) => {
        defaults = items.defaults;
        if (items.defaults) {
            if (defaults.ss) {
                toggleSubstringButton();
            }
            if (defaults.nw) {
                toggleWebsiteButton();
            }
        }
    })
    chrome.storage.local.get('dictionary', (items) => {
        dict = items.dictionary;
        document.querySelectorAll('.name-input').forEach((elem) => {
            updateSubstrings(elem);
        })
    });
    chrome.storage.local.get('panic', (items) => {
        if (items.panic) {
            doPanic()
        }
    })
    chrome.storage.local.get('panic_hotkey', (items) => {
        if (items.panic_hotkey) {
            togglePanicConfigButton();
        }
    })
}

function toggleSubstringButton() {
    if (substring_button.textContent == 'Unspecified words: Censor') {
        substring_button.textContent = 'Unspecified words: Allow';
        substring_button.classList.remove('angry-button');
        substring_button.classList.add('happy-button');
    } else {
        substring_button.textContent = 'Unspecified words: Censor';
        substring_button.classList.remove('happy-button');
        substring_button.classList.add('angry-button');
    }
}

function toggleWebsiteButton() {
    if (website_button.textContent == 'Unknown websites: Censor') {
        website_button.textContent = 'Unknown websites: Allow';
        website_button.classList.remove('angry-button');
        website_button.classList.add('happy-button');
    } else {
        website_button.textContent = 'Unknown websites: Censor';
        website_button.classList.remove('happy-button');
        website_button.classList.add('angry-button');
    }
}

function doPanic() {
    panic_button.textContent = 'Panic Mode: ON, click to disable';
    panic_button.style.backgroundColor = 'red';
    // hide all elements except for the panic button
    document.body.querySelectorAll('.config, .pair-section, .host-section').forEach((elem) => {
        elem.style.display = 'none';
    })
    panic_button.style.display = '';
    panic_button.addEventListener('click', () => {
        chrome.storage.local.set({ panic: false });
        document.body.querySelectorAll('.config, .pair-section, .host-section').forEach((elem) => {
            elem.style.display = '';
        })
        panic_button.style.display = 'none';
    })
}

chrome.storage.onChanged.addListener(
    function (changes) {
        if (changes.hostname_list) {
            hostname_list = changes.hostname_list.newValue;
            renderHosts();
        }
        if (changes.namepair_list) {
            namepair_list = changes.namepair_list.newValue;
            renderPairs();
        }
        if (changes.panic) {
            if (changes.panic.newValue) {doPanic()}
        }
        document.querySelectorAll('.name-input').forEach((elem) => {
            updateSubstrings(elem);
        })
    }
)

document.onload = load();