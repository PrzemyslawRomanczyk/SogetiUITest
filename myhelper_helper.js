const Helper = codeceptjs.helper;

class MyHelper extends Helper {

    // before/after hooks
    _before() {
        // remove if not used
    }

    _after() {
        // remove if not used
    }

    // add custom methods here
    // If you need to access other helpers
    // use: this.helpers['helperName']
    waitTabsLoading(ammountOfTabs, timeout) {
        let client = this.helpers['Puppeteer'].browser;
        return client
            .waitUntil(function() {
                return this.getTabIds().then(function(handles) {
                    return handles.length === ammountOfTabs
                });
            }, timeout * 1000);
    }

    waitInUrl(urlPart, timeout) {
        let client = this.helpers['Puppeteer'].browser;
        let currUrl;
        return client
            .waitUntil(function() {
                return this.url().then(function(res) {
                    currUrl = res.value;
                    return (decodeURIComponent(decodeURIComponent(decodeURIComponent(res.value.replace(/\+/g, " "))).replace(/\+/g, " "))).indexOf(urlPart.replace(/\+/g, " ")) > -1;
                });
            }, timeout * 1000);
    }

    changeTab(num) {
        let client = this.helpers['Puppeteer'].browser;
        return client
            .pages().then(function(handles) {
                return this.switchTab(handles[num - 1]);
            });
    }

}

module.exports = MyHelper;