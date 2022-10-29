var newQuestion


axios.post("/question"), {
    newQuestion: question
}.then(() => {
    document.getElementById("questions").innerHTML = newQuestion
})



    setTimeout(
    axios.get("localhost:3001/current_average").then((res) => {
        res.query["current_average"]
        console.log(res);
    }),
    1000
    )
