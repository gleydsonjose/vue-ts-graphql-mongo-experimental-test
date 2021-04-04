import { MongoClient, Db } from 'mongodb'

export default class DBInstance {
  private static instance: Db

  static getInstance () {
    if (!this.instance) {
      const URL = 'mongodb://localhost:27017'
      const dbName = 'experimental-tests'
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
      const client = new MongoClient(URL, options)

      client.connect()
      this.instance = client.db(dbName)
    }

    return this.instance
  }
}
