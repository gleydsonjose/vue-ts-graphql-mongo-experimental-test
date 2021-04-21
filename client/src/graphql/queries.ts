import gql from 'graphql-tag'

// PhonesList
export const fetchAllPhonesLocalQuery = gql`
  query fetchAllPhonesLocal {
    phones @client {
      _id
      manufacturer
      model
      year
      operationSystem
      chipset
      randomAccessMemory {
        quantity
        unit
      }
      internalMemory {
        quantity
        unit
      }
      screen {
        type
        resolution {
          width
          height
          unit
        }
        protection
      }
      camera {
        unit
        positions {
          back {
            id
            pixel
          }
          front {
            id
            pixel
          }
        }
      }
      battery {
        quantity
        unit
      }
    }
  }
`

export const fetchAllPhonesQuery = gql`
  query fetchAllPhones {
    phones {
      _id
      manufacturer
      model
      year
      operationSystem
      chipset
      randomAccessMemory {
        quantity
        unit
      }
      internalMemory {
        quantity
        unit
      }
      screen {
        type
        resolution {
          width
          height
          unit
        }
        protection
      }
      camera {
        unit
        positions {
          back {
            id
            pixel
          }
          front {
            id
            pixel
          }
        }
      }
      battery {
        quantity
        unit
      }
    }
  }
`

export const removeOnePhoneLocalMutation = gql`
  mutation removeOnePhoneLocal ($_id: ID!, $indexPhone: String!) {
    removePhone (_id: $_id, indexPhone: $indexPhone) @client
  }
`

export const removeOnePhoneMutation = gql`
  mutation removeOnePhone ($_id: ID!) {
    removePhone (_id: $_id)
  }
`

// FormPhone
export const fetchOnePhoneQuery = gql`
  query fetchOnePhone ($_id: ID!) {
    phone (_id: $_id) {
      _id
      manufacturer
      model
      year
      operationSystem
      chipset
      randomAccessMemory {
        quantity
        unit
      }
      internalMemory {
        quantity
        unit
      }
      screen {
        type
        resolution {
          width
          height
          unit
        }
        protection
      }
      camera {
        unit
        positions {
          back {
            id
            pixel
          }
          front {
            id
            pixel
          }
        }
      }
      battery {
        quantity
        unit
      }
    }
  }
`

export const fetchAllUnitsQuery = gql`
  query fetchAllUnits {
    units {
      dataStorage
      battery
      resolution
    }
  }
`

export const savePhoneDataLocalMutation = gql`
  mutation savePhoneData($formType: String!, $formData: Phone, $phoneId: String) {
    savePhone (formType: $formType, formData: $formData, phoneId: $phoneId) @client
  }
`

export const addOnePhoneMutation = gql`
  mutation addOnePhone($phone: PhoneInput!) {
    addPhone (phone: $phone) {
      _id
      manufacturer
      model
      year
      operationSystem
      chipset
      randomAccessMemory {
        quantity
        unit
      }
      internalMemory {
        quantity
        unit
      }
      screen {
        type
        resolution {
          width
          height
          unit
        }
        protection
      }
      camera {
        unit
        positions {
          back {
            id
            pixel
          }
          front {
            id
            pixel
          }
        }
      }
      battery {
        quantity
        unit
      }
    }
  }
`

export const editOnePhoneMutation = gql`
  mutation editOnePhone($_id: ID!, $phone: PhoneInput!) {
    editPhone (_id: $_id, phone: $phone) {
      _id
      manufacturer
      model
      year
      operationSystem
      chipset
      randomAccessMemory {
        quantity
        unit
      }
      internalMemory {
        quantity
        unit
      }
      screen {
        type
        resolution {
          width
          height
          unit
        }
        protection
      }
      camera {
        unit
        positions {
          back {
            id
            pixel
          }
          front {
            id
            pixel
          }
        }
      }
      battery {
        quantity
        unit
      }
    }
  }
`