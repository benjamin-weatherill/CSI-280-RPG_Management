function download(data, name) {
    let input = gatherDataTest();

    //Reasign data
    if (input != null) {
        data = input;
    }

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

function gatherDataTest() {
    let a = document.getElementById("hp_stat").innerText;
    console.log("HP is: " + a);
    let b = document.getElementById("attack_stat").innerText;
    console.log("Attack is: " + b);
    let c = document.getElementById("defense_stat").innerText;
    console.log("Defense is: " + c);
    let d = document.getElementById("strength_stat").innerText;
    console.log("Strength is: " + d);
    let e = document.getElementById("magic_stat").innerText;
    console.log("Magic is: " + e);
    // Format Output
    let output = "HP:" + a + ",ATTACK:" + b + ",DEFENSE:" + c + ",STRENGTH:" + d + ",MAGIC:" + e;

    return output;
}