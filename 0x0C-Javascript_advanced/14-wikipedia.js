function createElement(data) {
    var p = document.createElement("p")
    var node = document.createTextNode(data);
    p.appendChild(node);
    document.body.appendChild(p)
}

function queryWikipedia(callback) {
    var req = new XMLHttpRequest()
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    // var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow"
    req.onreadystatechange = function () {
        if (req.readyState == XMLHttpRequest.DONE) {
            var res = JSON.parse(req.responseText);
            var text = res.query.pages[21721040].extract
            callback(text)
        }
    }
    // req.setRequestHeader("origin", "*");
    req.open("GET", url, true)
    req.send(null)
}

queryWikipedia(createElement)
