function reverse_lists() {
    var olists = document.getElementsByTagName('ol');
    for (var i = 0; i < olists.length; i++) {
        if (!olists[i].className.match(/\breversed\b/))
            continue;
        var items = olists[i].getElementsByTagName('li');
        for(var j = 0; j < items.length; j++) {
            items[j].setAttribute("value", items.length - j);
        }
    }
}
