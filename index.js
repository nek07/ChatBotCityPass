require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');




const app =  express();


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
})



const PORT = process.env.PORT || 3000;
async function start(){
    // await mongoose.connect(process.env.DB_CONN)

    app.listen(PORT, () => {
        console.log(`Server started: http://localhost:${PORT}`)
    });
}
start();

module.exports = app;
module.exports.start = start;



