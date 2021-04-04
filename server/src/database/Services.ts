import DBInstance from './DBInstance'
import { Collection } from 'mongodb'

export default class {
  public dbCollection: Collection

  public constructor (collectionName: string) {
    this.dbCollection = DBInstance.getInstance().collection(collectionName)
  }

  fetchData (query: object = {}, options: object = {}) {
    return this.dbCollection.find(query, options).toArray()
  }

  insertData (docs: object = {}, options: object = {}) {
    return this.dbCollection.insertOne(docs, options)
  }

  editData (
    filter: object = {},
    update: object = {},
    options: object = {}
  ) {
    return this.dbCollection.updateOne(filter, update, options)
  }

  deleteData (filter: object = {}, options: object = {}) {
    return this.dbCollection.deleteOne(filter, options)
  }
}
