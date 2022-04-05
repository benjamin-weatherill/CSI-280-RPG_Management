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

function editFalse() {
    document.getElementById("hp_stat").contentEditable = "false";
    document.getElementById("attack_stat").contentEditable = "false";
    document.getElementById("defense_stat").contentEditable = "false";
    document.getElementById("strength_stat").contentEditable = "false";
    document.getElementById("magic_stat").contentEditable = "false";

}

function gatherDataTest() {
    editFalse(); //Revert all fields to non-editable
    let list = [];
    let a = "HP:" + document.getElementById("hp_stat").innerText;
    list.push(a);
    let b = "ATTACK:" + document.getElementById("attack_stat").innerText;
    list.push(b);
    let c = "DEFENSE:" + document.getElementById("defense_stat").innerText;
    list.push(c);
    let d = "STRENGTH:" + document.getElementById("strength_stat").innerText;
    list.push(d);
    let e = "MAGIC:" + document.getElementById("magic_stat").innerText;
    list.push(e);
    let f = "CLASS:" + document.getElementById("character_class").innerText;
    list.push(f);

    //Name
    let name = "NAME:" + document.getElementById("character_name").innerText;
    list.push(name);

    /*

    //Weapons
    let weapon_a = "WEAPON_A:" + document.getElementById("weapon").innerText;
    list.push(weapon_a);

    //Skills
    let skill_a = "SKILL_A:" + document.getElementById("skill").innerText;
    list.push(skill_a);

    //Items
    let item_a = "ITEM_A:" + document.getElementById("item").innerText;
    list.push(item_a);

    */

    /*
    * Split test for file input reading/parsing
    let word = a.split(":");
    if (word[0] === "HP") {
        console.log(word[1]);
    }
    */

    // Format Output
    let output = "";
    let max = list.length;
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