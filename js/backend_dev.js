function download(data, name) {
    let input = gatherDataTest();

    //Reassign data
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
    let a = "HP:" + document.getElementById("hp_stat").innerText;
    console.log("HP is: " + a);
    let b = "ATTACK:" + document.getElementById("attack_stat").innerText;
    console.log("Attack is: " + b);
    let c = "DEFENSE:" + document.getElementById("defense_stat").innerText;
    console.log("Defense is: " + c);
    let d = "STRENGTH:" + document.getElementById("strength_stat").innerText;
    console.log("Strength is: " + d);
    let e = "MAGIC:" + document.getElementById("magic_stat").innerText;
    console.log("Magic is: " + e);

    //Name
    let name = "NAME:" + document.getElementById("character_name").innerText;
    console.log("Name: " + name);

    let list = [a, b, c, d, e, name];

    // Format Output
    let output = "";
    let max = 6;
    for (let i = 0; i < max; i++) {
        output += list[i];
        if (i === max - 1) {
            break
        }
        output += ","
    }
    console.log("Output: " + output);

    return output;
}