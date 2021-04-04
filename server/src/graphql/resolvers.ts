import Services from '@database/Services'
import { QueryPhone, MutationPhone } from '@ts_types/Phone'
import { ObjectId } from 'mongodb'

const phonesServices = new Services('phones')
const unitsServices = new Services('units')

export default {
  Query: {
    phones: async () => {
      const phonesData = await phonesServices.fetchData()
      return phonesData
    },

    phone: async (_: any, args: QueryPhone) => {
      const _id = new ObjectId(args._id)
      const [phoneData] = await phonesServices.fetchData({ _id })
      return phoneData
    },

    units: async () => {
      const [units] = await unitsServices.fetchData(
        {},
        { projection: { _id: 0, dataStorage: 1, battery: 1, resolution: 1 } }
      )
      return units
    }
  },

  Mutation: {
    addPhone: async (_: any, args: MutationPhone) => {
      const { ops: [phoneAdded] } = await phonesServices.insertData(args.phone)
      return phoneAdded
    },

    editPhone: async (_: any, args: MutationPhone) => {
      const _id = new ObjectId(args._id)
      const phone = args.phone
      const { matchedCount } = await phonesServices.editData({ _id }, { $set: phone })

      if (matchedCount) {
        const [phoneData] = await phonesServices.fetchData(({ _id }))
        return phoneData
      } else {
        return null
      }
    },

    deletePhone: async (_: any, args: MutationPhone) => {
      const _id = new ObjectId(args._id)
      const { deletedCount } = await phonesServices.deleteData({ _id })

      if (deletedCount) return true
      else return false
    }
  }
}
