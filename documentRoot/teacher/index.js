var newQuestion

/*
axios.post("/question"), {
    newQuestion: question
}.then(() => {
    document.getElementById("questions").innerHTML = newQuestion
})
*/
    const steve = document.getElementById("steve")
    steve.innerHTML = 0


    axios.get("../dynamic/current_average").then((res) => {
        //res.query["current_average"
        steve.innerHTML = res.data["current_average"]
    })

