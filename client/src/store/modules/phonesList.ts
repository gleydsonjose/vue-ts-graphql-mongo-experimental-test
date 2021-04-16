import { ActionTree, MutationTree } from 'vuex'
import { PhonesListInterface } from '@interfaces/PhonesList'

const SERVER_HOST = process.env.SERVER_HOST || ''

const state: PhonesListInterface = {
  phones: []
}

const mutations: MutationTree<PhonesListInterface> = {
  getAllPhones(state, { phones }) {
    state.phones = phones
  },

  removeOnePhone(state, { indexPhone }) {
    state.phones.splice(indexPhone, 1)
  }
}

const actions: ActionTree<PhonesListInterface, PhonesListInterface> = {
  async getAllPhones({ commit }) {
    try {
      const response = await fetch(SERVER_HOST, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
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
        })
      })
      const { data: { phones } } = await response.json()
      commit('getAllPhones', { phones })
    } catch (error) {
      console.error(error)
    }
  },

  async removeOnePhone({ commit }, { _id, indexPhone }) {
    try {
      const response = await fetch(SERVER_HOST, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            mutation removeOnePhone ($_id: ID!) {
              removePhone (_id: $_id)
            }
          `,
          variables: {
            _id
          }
        })
      })
      const { data: { removePhone } } = await response.json()

      if (removePhone) commit('removeOnePhone', { indexPhone })
      else throw new Error('This phone could not be removed')
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}