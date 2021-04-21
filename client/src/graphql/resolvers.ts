/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchAllPhonesLocalQuery, removeOnePhoneMutation, addOnePhoneMutation, editOnePhoneMutation } from '@graphql/queries'

export default {
  Mutation: {
    // PhonesList
    removePhone: async (_: any, { _id, indexPhone }: any, { cache, client }: any): Promise<void> => {
      try {
        const phoneIsRemoved = await client.mutate({ mutation: removeOnePhoneMutation, variables: { _id } })

        if (phoneIsRemoved) {
          const { phones } = cache.readQuery({ query: fetchAllPhonesLocalQuery })
          phones.splice(indexPhone, 1)
          cache.writeQuery({ query: fetchAllPhonesLocalQuery, data: { phones } })
        } else {
          throw new Error('This phone could not be removed')
        }
      } catch (error) {
        console.error(error)
      }
    },

    // RegisterPhone
    savePhone: async (_: any, { formType, formData, phoneId }: any, { cache, client }: any) => {
      if (formType === 'EDIT') {
        try {
          const { data: { editPhone } } = await client.mutate({ mutation: editOnePhoneMutation, variables: { _id: phoneId, phone: formData } })

          if (editPhone) {
            const { phones } = cache.readQuery({ query: fetchAllPhonesLocalQuery })
            phones
            const indexPhone = phones.findIndex((phone: any) => phone._id === editPhone._id)
            phones[indexPhone] = editPhone
            cache.writeQuery({ query: fetchAllPhonesLocalQuery, data: { phones } })
          } else {
            throw new Error('This phone could not be edited')
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        try {
          const { data: { addPhone } } = await client.mutate({ mutation: addOnePhoneMutation, variables: { phone: formData } })

          const { phones } = cache.readQuery({ query: fetchAllPhonesLocalQuery })
          phones.push(addPhone)
          cache.writeQuery({ query: fetchAllPhonesLocalQuery, data: { phones } })
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}