function download(data, name) {
    let a = document.getElementById("a");
    let blob = new Blob([data], {type: "text/plain"});
    a.href = URL.createObjectURL(blob);
    a.download = name;
}