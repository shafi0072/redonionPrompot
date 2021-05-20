const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const postData = require('./router/postRouter')
app.use(express.json());
app.use(cors());
app.use(express.static('./router/Upload'))
mongoose.connect('mongodb://localhost/redOnion',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('db connected'))
.catch(err => {
    console.log('db is not connected')
})

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.use('/admin', postData)

app.listen(PORT, () => {
    console.log(`App is Running on ${PORT}`)
})