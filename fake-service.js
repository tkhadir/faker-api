const fs = require('fs')
const faker = require('faker')
const prepare = () => {
    const schema = JSON.parse(fs.readFileSync('./input.json', 'utf8'))
    //console.log(schema)
    let response = {}
    for (let key of Object.keys(schema)) {
        switch (schema[key]) {
            case 'string':
                response[key] = faker.lorem.word()
                break
            case 'number':
                response[key] = faker.random.number()
                break
            case 'email':
                response[key] = faker.internet.email()
                break
            case 'date':
                response[key] = faker.date.future()
                break
        }
         
    }

    return response
}

module.exports = { prepare }