import { ActionTree, MutationTree } from 'vuex'
import { FormPhoneInterface } from '@interfaces/FormPhone'

const SERVER_HOST = process.env.SERVER_HOST || ''

const state: FormPhoneInterface = {
  form: {
    _id: '',
    manufacturer: '',
    model: '',
    year: 0,
    operationSystem: '',
    chipset: '',
    randomAccessMemory: {
      quantity: 0,
      unit: ''
    },
    internalMemory: {
      quantity: 0,
      unit: ''
    },
    screen: {
      type: '',
      resolution: {
        width: 0,
        height: 0,
        unit: ''
      },
      protection: ''
    },
    camera: {
      unit: '',
      positions: {
        back: [],
        front: []
      }
    },
    battery: {
      quantity: 0,
      unit: ''
    },
  },

  units: {
    dataStorage: [],
    battery: [],
    resolution: []
  }
}

const mutations: MutationTree<FormPhoneInterface> = {
  getOnePhone(state, { phone }) {
    state.form = phone
  },

  getAllUnits(state, { units }) {
    state.units = units
  },

  addCamera(state, { cameraPosition }) {
    const allCameras = state.form.camera.positions[cameraPosition]
    let newCameraId = 1

    if (allCameras.length) {
      const allCamerasLastIndex = allCameras.length-1
      newCameraId = allCameras[allCamerasLastIndex].id + 1
    }
    
    const newCamera = { id: newCameraId, pixel: 0 }

    allCameras.push(newCamera)
  },

  removeCamera(state, { cameraPosition, indexCamera }) {
    state.form.camera.positions[cameraPosition].splice(indexCamera, 1)
  },
}

const actions: ActionTree<FormPhoneInterface, FormPhoneInterface> = {
  async getOnePhone({ commit }, { _id }) {
    try {
      const response = await fetch(SERVER_HOST, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
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
          `,
          variables: {
            _id
          }
        })
      })

      const { data: { phone } } = await response.json()
      commit('getOnePhone', { phone })
    } catch (error) {
      console.error(error)
    }
  },

  async getAllUnits({ commit }) {
    try {
      const response = await fetch(SERVER_HOST, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            query fetchUnits {
              units {
                dataStorage
                battery
                resolution
              }
            }
          `
        })
      })
      const { data: { units } } = await response.json()
      commit('getAllUnits', { units })
    } catch (error) {
      console.error(error)
    }
  },

  async saveData({ state }) {
    const phone = new Map(Object.entries(state.form))
    phone.delete('_id')

    try {
      const response = await fetch(SERVER_HOST, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
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
          `,
          variables: {
            _id: state.form._id,
            phone: Object.fromEntries(phone)
          }
        })
      })

      const { data: { editPhone } } = await response.json()
      console.log({editPhone})
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