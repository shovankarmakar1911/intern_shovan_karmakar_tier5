var list = [];
var inp = document.getElementById("myInput");
var students_name = document.getElementById("students_name");

function getInputValue() {
    if (inp.value === "") {
        alert("Please Enter the student name before you submit");
    }
    else {
        if (checkDuplicate(inp.value) === "present") {
            alert("The name is already present")
        }
        else {
            var val=capitalizeFirstLetter(inp.value);
            list.push(val);
            inp.value = "";
            showList();
        }
    }
}

function capitalizeFirstLetter(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

function checkDuplicate(inpVal) {
    for (var i = 0; i < list.length; i++) {
        if (inpVal.toLowerCase() === list[i].toLowerCase()) {
            return "present";
        }
    }
}

function showList() {
    students_name.innerHTML = "";
    list.forEach(function (n, i) {
        students_name.innerHTML += `<li> ${n} <span ><button class="btn1" onclick='deleteItem("${i}")'; type="submit">Remove</button></span></li>`;
    })
}

function deleteItem(i) {
    list.splice(i, 1);
    showList();
}