const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Bem vindo ao index ' + "<br> <a href='https://web.lucasdavi7.repl.co/donations'>Donations</a> <br> <a href='https://web.lucasdavi7.repl.co/news'>News</a> <br> <a href='https://web.lucasdavi7.repl.co/dowloads'>Dowloads</a> <br> <a href='https://web.lucasdavi7.repl.co/login'>Login</a> <br> <a href='https://web.lucasdavi7.repl.co/about'>About</a> <br> <a href='https://web.lucasdavi7.repl.co/news/breaking'>Breaking</a>")
})

app.get('/donations', (req, res) => {
  res.send('Bem vindo as donations' +  "<br> <a href='https://web.lucasdavi7.repl.co/'>Home</a>")
})

app.get('/login', (req, res) => {
  res.send('Bem vindo à login'  +  "<br> <a href='https://web.lucasdavi7.repl.co/'>Home</a> <br> <a href='https://web.lucasdavi7.repl.co/login/signup'>SigUp</a> <br> <a href='https://web.lucasdavi7.repl.co/login/signin'>SigIn</a> ")
})

app.get('/login/signup', (req, res) => {
  res.send('Parâmetros insuficientes')
})

app.get('/login/sigup/:name', (req, res) => {
    let user = req.params['name']
    let msg = "Seu nome: , " + user;
  res.send(msg)
})

app.get('/login/sigup/:email', (req, res) => {
    let user = req.params['email']
    let msg = "Seu email, " + user;
  res.send(msg)
})

app.get('/login/sigup/:password', (req, res) => {
    let user = req.params['password']
    let msg = "Sua senha, " + user;
  res.send(msg)
})

app.get('/login/sigup/:confpass', (req, res) => {
    let user = req.params['confpass']
    let msg = "sua senha novamente, " + user;
  res.send(msg)
})

app.get('/login/signin', (req, res) => {
  res.send('Parâmetros insuficientes')
})

app.get('/login/sigin/: userid', (req, res) => {
  let user = req.params['userid']
    let msg = "Seu usuário: , " + user;
  res.send(msg)
})

app.get('/login/sigin/: passwd', (req, res) => {
  let user = req.params['passwd']
    let msg = "Sua senha: , " + user;
  res.send(msg)
})

app.get('/about', (req, res) => {
  res.send('Bem vindo à página de about' +  "<br> <a href='https://web.lucasdavi7.repl.co/'>Home</a>")
})

app.get('/dowloads', (req, res) => {
  res.send('Bem vindo à página de dowloads' +  "<br> <a href='https://web.lucasdavi7.repl.co/'>Home</a>")
})
app.get('/news', (req, res) => {
  res.send('Bem vindo à página de news' +  "<br> <a href='https://web.lucasdavi7.repl.co/'>Home</a> <br <br> <a href='https://web.lucasdavi7.repl.co/news/breaking'>Breaking</a>")
})
app.get('/news/breaking', (req, res) => {
  res.send('Bem vindo à página breaking'+  "<br> <a href='https://web.lucasdavi7.repl.co/'>Home</a>")
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})