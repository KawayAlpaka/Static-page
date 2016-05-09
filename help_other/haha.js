window.onload = prepareLinks;
function prepareLinks() {
    var links = document.getElementsByTagName("a");
    for(var i =0 ;i<links.length; i++){
        if(links[i].getAttribute("class") == "popup"){
            links[i].onclick = function () {
                var goUrl = this.getAttribute("href");
                popUp(goUrl);
            }
        }

    }
}
function popUp(winUrl) {
    window.open(winUrl,"popup","width=320;height=480");
}