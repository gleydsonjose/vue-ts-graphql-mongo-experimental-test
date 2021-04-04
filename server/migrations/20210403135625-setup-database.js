module.exports = {
  async up (db) {
    const phones = require('../db-data-initializer/phones.json')
    const units = require('../db-data-initializer/units.json')

    db.createCollection('phones')
    db.createCollection('units')

    db.collection('phones').insertMany(phones)
    db.collection('units').insertMany(units)
  },

  async down (db) {
    db.dropCollection('phones')
    db.dropCollection('units')
  }
}
