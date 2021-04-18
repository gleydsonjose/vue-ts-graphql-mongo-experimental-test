import { fetchAllPhonesLocalQuery, removeOnePhoneMutation } from '@graphql/queries'

export default {
  Mutation: {
    removePhone: async (_: any, { _id, indexPhone }: any, { cache, client }: any) => {
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
    }
  }
}