var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function(event) {
//     console.log(event.isTrusted);
//     console.log("Why");
//     output.innerHTML = this.value;
// }


output.innerHTML = slider.value;

var id;

axios.post(`../dynamic/add_student`).then(
    result => {
        console.log(result)
        id = result.id;
    }
).catch(e => {
    console.log(e);
});


slider.addEventListener("input", (event) => {
    console.log(id)
    console.log(slider.value);
    output.innerHTML = slider.value;
    axios.post(`../dynamic/change_val`, {
        "id":id,
        "value":slider.value
    }).catch(e => {
        console.log(e);
    });
})
