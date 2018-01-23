const request = require('supertest')
const app = require('../app')

jest.mock('../models/cat')

describe("App", ()=>{
  it("Tests the root path", ()=>{
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  it("Lists cats", ()=>{
  return request(app).get("/cats").then(response =>{
    expect(response.statusCode).toBe(200)
    expect(response.body.cats[0].name).toBe('Paws')
  })
 })

 it("Creates cats", ()=>{
  return request(app)
    .post("/cats")
    .send({
      name: 'Morris',
      city: 'Portland',
      age: 2,
      enjoys: "Quiet evenings by the fire."
    })
    .then(response => {
      expect(response.statusCode).toBe(201)
      expect(response.body.cat.name).toBe('Morris')
      expect(response.body.cat.city).toBe('Portland')
      expect(response.body.cat.age).toBe(2)
      expect(response.body.cat.enjoys).toBe("Quiet evenings by the fire.")
    })
  })

  it("Validates name when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      city: "San Diego",
      age: 2,
      enjoys: "Food!"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('name')
      expect(error.msg).toBe('Is required')
    })
  })

  it("Validates city when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      name: "Chalie boy",
      age: 2,
      enjoys: "treats!"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('city')
      expect(error.msg).toBe('Is required')
    })
  })

  it("Validates age when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: "Rowdy",
            city: "San Francisco",
            enjoys: "walks!"
        })
        .then(response =>{
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('age')
            expect(error.msg).toBe('Is required')
        })
    })
    
  it("Validates enjoys when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: "Molly",
            city: "Washington DC",
            age: 5
        })
        .then(response =>{
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('enjoys')
            expect(error.msg).toBe('Is required')
        })
  })
})
