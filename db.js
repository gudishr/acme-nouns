const Sequelize = require('sequelize')
const { STRING, UUID, UUIDV4 } = Sequelize

const conn = new Sequelize('postgres://localhost/acme_nouns_db')

const People = conn.define('people', {
  name: {
    type: STRING,
    allowNull : false,
    notEmpty : true,
    unique: true
  },
  id : {
    type : UUID,
    primaryKey : true,
    defaultValue : UUIDV4
  }
})

const Places = conn.define('places', {
  name: {
    type: STRING,
    allowNull : false,
    notEmpty : true,
    unique: true
  },
  id : {
    type : UUID,
    primaryKey : true,
    defaultValue : UUIDV4
  }
})

const Things = conn.define('things', {
  name: {
    type: STRING,
    allowNull : false,
    notEmpty : true,
    unique: true
  },
  id : {
    type : UUID,
    primaryKey : true,
    defaultValue : UUIDV4
  }
})

const syncAndSeed = async() => {
  await conn.sync({ force : true })
  const people = [
    { name : 'Shruti' },
    { name : 'Gudi' },
    { name : 'Jay' },
  ]
  const places = [
    { name : 'Fremont' },
    { name : 'Bangalore' },
    { name : 'Mumbai' },
  ]
  const things = [
    { name : 'Book' },
    { name : 'Laptop' },
    { name : 'Pen' },
  ]

  await Promise.all(people.map(person => People.create(person)))
  await Promise.all(places.map(place => Places.create(place)))
  await Promise.all(things.map(thing => Things.create(thing)))

}

module.exports = {
  syncAndSeed,
  models : {
    People,
    Places,
    Things
  }
}
