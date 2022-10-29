//this is our js file
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({
    entended:true
}))

app.use(express.json());

app.get('/',(req, res) => {
    res.send('accessing api');
});



const port = process.env.PORT || 3001
app.listen(port, () => console.log(`listening on ${port}`))


