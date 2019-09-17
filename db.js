const Sequelize = require('sequelize')
const { STRING, UUID, UUIDV4 } = Sequelize

const conn = new Sequelize('postgres://localhost/acme_nouns_db')

const People = conn.define('people', {
  name: {
    type: STRING,
    allowNull : false,
    unique: true
  },
  id : {
    type : UUID,
    primaryKey : true,
    defaultValue : UUIDV4
  }
})

conn.sync({ force : true })