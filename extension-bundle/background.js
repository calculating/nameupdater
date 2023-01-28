var cfg;
chrome.storage.sync.get('defaults', (items) => {
    cfg = items.defaults || {};
})
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'install') {
        chrome.storage.sync.set({ 
            hostname_list: {
                'www.facebook.com': 'no filter',
                'www.google.com': 'no filter',
                'ogs.google.com': 'filter',
                'mail.google.com': 'filter'
            },
            namepair_list: [
                {
                    "name_input": "Sample Deadname",
                    "sub_input": "Sample Alivename",
                    "sub_unmarked": "Sample Alivename",
                    "name_caps": [
                        "sample deadname",
                        "Sample deadname",
                        "SAMPLE DEADNAME"
                    ],
                    "mark": "none",
                    "sub_caps": [
                        "sample alivename",
                        "Sample alivename",
                        "SAMPLE ALIVENAME"
                    ],
                    "allow_list": [],
                    "sus_list": []
                },
                {
                    "name_input": "John",
                    "sub_input": "Jane",
                    "sub_unmarked": "Jane",
                    "name_caps": [
                        "john",
                        "John",
                        "JOHN"
                    ],
                    "mark": "none",
                    "sub_caps": [
                        "jane",
                        "Jane",
                        "JANE"
                    ],
                    "allow_list": [
                        "johnston"
                    ],
                    "sus_list": [
                        "johns",
                        "johnson",
                        "johnny"
                    ]
                },
                {
                    "name_input": "mynameisjohn@gmail",
                    "sub_input": "mynameisjane@gmail",
                    "sub_unmarked": "mynameisjane@gmail",
                    "name_caps": [
                        "mynameisjohn@gmail",
                        "mynameisjohn@gmail",
                        "mynameisjohn@gmail"
                    ],
                    "mark": "none",
                    "sub_caps": [
                        "mynameisjane@gmail",
                        "mynameisjane@gmail",
                        "mynameisjane@gmail"
                    ],
                    "allow_list": [

                    ],
                    "sus_list": [

                    ]
                }
            ],
            defaults: {
                'ss': true,
                'nw': true,
                'sn': true
            }
        }, () => {
            chrome.storage.sync.get('defaults', (items) => {
                cfg = items.defaults;
            })
        });
        chrome.storage.local.set({
            panic: false,
            panic_hotkey: false
        });

        fetch('20k.txt', {
            method: 'GET',
        })
        .then(response => response.text())
        .then((data) => {
            chrome.storage.local.set({
                dictionary: data.split('\n')
            })
        })
    }
    chrome.tabs.create({ 'url': 'options.html' });
});

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('chrome-extension://')) {
        return
    }
    let host = '';
    try {
        host = new URL(tab.url).hostname;
    } catch (e) {
        return
    }
    chrome.storage.sync.get('hostname_list', (items) => {
        if (items.hostname_list[host]) {
            if (items.hostname_list[host] == 'filter') {
                items.hostname_list[host] = 'no filter';
            } else {
                items.hostname_list[host] = 'filter';
            }
        } else {
            items.hostname_list[host] = cfg.nw ? 'no filter' : 'filter';
        }
        chrome.storage.sync.set({ hostname_list: items.hostname_list });
    });
});

chrome.storage.onChanged.addListener(
    (changes) => {
        if (changes['hostname_list'] || changes['defaults']) {
            if (changes['defaults']) {
                cfg = changes['defaults'].newValue;
            }
            chrome.tabs.query({}, (tabs) => {
                tabs.forEach((tab) => {
                    try {
                        updateIcon(tab.id, new URL(tab.url).hostname);
                    } catch (e) {
                        return
                    }
                })
            })
        }
    }
)

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabInfo) {
    if (changeInfo.status == 'complete' || changeInfo.status == 'loading' || changeInfo.url) {
        try {
            updateIcon(tabId, new URL(tabInfo.url).hostname);
        } catch (e) {
            return
        }
    }
})

function updateIcon(targetID, hostname) {
    chrome.storage.sync.get('hostname_list', (items) => {
        
        config = items.hostname_list || {};
        ignoreLevel = config[hostname];
        let iconName = cfg.nw ? 'document' : 'look';
        if (ignoreLevel == 'no filter') {
            iconName = 'look'
        } else if (ignoreLevel == 'no text') {
            iconName = 'blurred'
        } else if (ignoreLevel == 'no login') {
            iconName = 'text'
        } else if (ignoreLevel == 'filter') {
            iconName = 'document'
        }

        chrome.action.setIcon(
            {
                path: {
                    16: iconName + '16.png',
                    32: iconName + '32.png'
                },
                tabId: targetID
            }
        )
    });
}