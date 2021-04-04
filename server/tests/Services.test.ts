import Services from '@database/Services'

describe('Services', () => {
  test('Fetch all phones', async () => {
    const phonesServices = new Services('phones')
    console.log(phonesServices.fetchData())
    // The test will be done soon
  })
})
