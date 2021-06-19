function startTime() {
    var tempo = new Date();
    var h = tempo.getHours();
    var m = tempo.getMinutes();
    var s = tempo.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("tempo").innerHTML = h + ":" + m + ":" + s;
    tempo = setTimeout("startTime()",500);
}

function checkTime(i) {
    if (i < 10) {
    i = "0" + i;
    }
    return i;
}
