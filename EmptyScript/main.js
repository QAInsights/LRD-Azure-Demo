load.initialize(async function () {
});

load.action("Action", async function () {
    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    };

    let T01 = new load.Transaction("T00_HomePage");

    T01.start();

    new load.WebRequest({
        id: 1,
        url: "http://www.example.com/",
        method: "GET",
        handleHTTPError: (webResponse) => {
            if (webResponse.status === 404) {
                return false;
            }
        }
    }).sendSync();
    T01.stop();
});

load.finalize(async function () {
});
