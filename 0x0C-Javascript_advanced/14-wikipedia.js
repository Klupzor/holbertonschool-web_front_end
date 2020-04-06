function createElement(data) {
    var p = document.createElement("p")
    var node = document.createTextNode(data);
    p.appendChild(node);
    document.body.appendChild(p)
}

function queryWikipedia(callback) {
    var req = new XMLHttpRequest()
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    req.onload = function () {
        if (req.status == 200) {
            var res = JSON.parse(req.responseText);
            var text = res.query.pages[21721040].extract
            callback(text)
        }
    }
    req.open("GET", url)
    req.send()
}

queryWikipedia(createElement)
