function download(data, name) {
    let a = document.getElementById("a");
    let blob = new Blob([data], {type: "text/plain"});
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.style.visibility = "visible";
    document.getElementById("saveButton").style.visibility = "hidden";
}

function revertDownload() {
    document.getElementById("a").style.visibility = "hidden";
    document.getElementById("saveButton").style.visibility = "visible";
}