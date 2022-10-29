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

app.get('/',(req, res) => {
    res.send('accessing api');
});

app.post('/add_student',(req, res) => {

    const new_student = {
        id : 0,
        active: true,
        value : 0
    }
    if (list_of_students.length !== 0){
        new_student.id = list_of_students[list_of_students.length-1].id + 1;
    }
    list_of_students.push(new_student)
    console.log(new_student.id)

    res.sendStatus(200)
    return;
});

const update_average = (req) => {
 let sum;
 let count;   
    for (let i = 0; i < list_of_students.length; i++) {
        if (list_of_students[req.body["id"]].active) {
            sum += student.value
            count++
    
        }
    }
    average = sum/count;
}

app.post('/change_val',(req, res) => {
    list_of_students[req.body["id"]].value = req.body["value"]
    update_average();
    res.sendStatus(200)
});



app.post('/delete_student',(req, res) => {
    console.log(list_of_students[req.body["id"]]);
    list_of_students[req.body["id"]].active = false
    console.log(list_of_students[req.body["id"]]);

    update_average()
    res.sendStatus(200);
});

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`listening on ${port}`))


