console.log("Hello i'm from background Script");

chrome.runtime.onConnect.addListener((port) => {
    if (port.name === 'popup') {
        port.onMessage.addListener((request) => {
            if (request.type === 'popup_intro') {
                var text = request.msg;
                console.log(text);
                var newURL = `https://www.google.com/search?q=${text}`;
                chrome.tabs.create({ url: newURL }, (tab) => {
                    setTimeout(function () {
                        chrome.tabs.remove(tab.id, () => {
                            console.log("Tab Closed");
                        });
                    }, 300000);
                });
            }
        })
        port.onMessage.addListener((request) => {
            if (request.type === 'print') {
                chrome.tabs.query({ active: true, currentWindow: true },
                    function (tabs) {
                        let tab_Id = tabs[0].id;
                        chrome.scripting.executeScript(
                            {
                                target: { tabId: tab_Id },
                                function: function () { return window.print() }
                            },
                            () => {
                                console.log("Printed");
                            });
                    });
            }
        });
    }
    if(port.name === 'content')
    {
        port.onMessage.addListener((request) => {
            if (request.action === "notification") {
               // console.log(request.data.title);
               // console.log(request.data.msg);
                chrome.notifications.create("noitifyTest",
                    {
                        iconUrl:
                            "icons8-notification-60.png",
                        type: "basic",
                        title: request.data.title,
                        message: request.data.msg,
                    },
                    () => { 
                        console.log("Notifocation");
                    }
                );
            }
        });
    }
});