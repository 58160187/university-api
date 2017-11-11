const express = require('express') //ได้ function express() มาใว้ในตัวแปร express
const bodyParser = require('body-parser')
const app = express() //เรียกใช้ function express() มาเก็บใวในตัวแปรชื่อ app

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let students  = [ //สร้าง array ของ resources ที่ชื่อ students
  { id: 1, name: 'Pensupa', email: 'pensupa@gmail.com' },
  { id: 2, name: 'Su', email: 'su@gamil.com' }
]

app.post('/students', (req, res) => {
  let student = req.body
  students.push(student)
  res.json(student)
})

app.get('/greeting', (req, res) => { //กำหนด resources ชื่อ greeting
  res.json({ message: 'Hello!' }) //แปลงจาก javascript เป็น json ให้
})

app.get('/students', (req, res) => { //กำหนด resources ชื่อ student
  res.json(students)
})



module.exports = app
