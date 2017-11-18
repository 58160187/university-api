const test = require('tape')
const request = require('supertest')
const app = require('../server')

test('First test case', (t) => {
  t.equal(1, 1)
  t.end()
})

test('GET /students', (t) => { //action=GET /resources=students
  request(app).get('/students') // เปิด browser ที่ app, สั่ง get ไปที่ resources ชื่อ students แบบ automate test
    .expect(200)
    .then((res) => {
      let students = res.body
      t.equal(2, students.length)
      let student = students[0]
      t.notEqual(undefined, student.id) //test ดูว่า มี property id รึเปล่า
      t.end()
    })
}) // test ว่า http ของการ test ครั้งนี้ เป็นไปตามที่เราคาดหวังไว้มั้ย

test('POST /students', (t) => { //action=POST /resources=students
  request(app).post('/students') // เปิด browser ที่ app, สั่ง post ไปที่ resources ชื่อ students แบบ automate test
    .send({ name: 'Su', email: 'su@gmail.com'})
    .expect(200)
    .then((res) => {
      let student = res.body
      t.equal('Su', student.name)
      t.end()
    })
})
