//this is our js file
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({ entended:true }));

app.use(express.json());


const list_of_students = []
var current_average

app.get('/',(req, res) => {
    res.send('accessing api');
});

app.post('/add_student',(req, res) => {

    let new_student = {
        id : 0,
        active: true,
        value : 0
    }
    if (list_of_students.length !== 0){
        console.log(`test: ${list_of_students}`)
        new_student.id = list_of_students[list_of_students.length-1].id + 1;
    }
    list_of_students.push(new_student)
    console.log(new_student.id)

    res.send({"id":new_student.id})
    return;
});

const update_average = (req) => {
 let sum = 0;
 let count = 0;
 let student;

    for (let i = 0; i < list_of_students.length; i++) {
        student = list_of_students[i]
        if (student.active) {
            sum += student.value
            count++
    
        }
    }
    current_average = sum/count;
    console.log(current_average)
}

app.post('/change_val',(req, res) => {
    console.log(req.body["value"]);
    console.log(req.body["id"]);
    console.log(list_of_students[req.body["id"]-1].value);

    list_of_students[req.body["id"]-1].value = req.body["value"]
    update_average(req);
    res.sendStatus(200)
});


app.post('/delete_student',(req, res) => {
    console.log(list_of_students[req.body["id"]]);
    list_of_students[req.body["id"]].active = false
    console.log(list_of_students[req.body["id"]]);

    update_average(req)
    res.sendStatus(200);
});

app.get('/current_average', (req, res) => {
    res.send({"current_average":current_average})
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`listening on ${port}`))


