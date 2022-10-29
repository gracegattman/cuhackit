axios.get("localhost:3001/current_average").then((res) => {
    res.query["current_average"]
    console.log(res);
});

var newQuestion

axios.post("/question"), {
    newQuestion: question
}.then((res) => {
    document.getElementById("questions").innerHTML = newQuestion
})