import { createLogger, createStore, ActionTree, MutationTree } from 'vuex'
import { FormPhoneInterface } from '@interfaces/FormPhone'

const state: FormPhoneInterface = {
  form: {
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
  getAllUnits(state, payload) {
    state.units = payload.units
  },

  addCamera(state, payload) {
    const allCameras = state.form.camera.positions[payload.cameraPosition]
    let newCameraId = 1

    if (allCameras.length) {
      const allCamerasLastIndex = allCameras.length-1
      newCameraId = allCameras[allCamerasLastIndex].id + 1
    }
    
    const newCamera = { id: newCameraId, pixel: 0 }

    allCameras.push(newCamera)
  },

  removeCamera(state, payload) {
    state.form.camera.positions[payload.cameraPosition].splice(payload.indexCamera, 1)
  },
}

const actions: ActionTree<FormPhoneInterface, FormPhoneInterface> = {
  async getAllUnits(context) {
    try {
      const response = await fetch('http://localhost:4000', {
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
      context.commit('getAllUnits', { units })
    } catch (error) {
      console.error(error)
    }
  },

  async saveData(context) {
    try {
      const response = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
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
          `,
          variables: {
            phone: context.state.form
          }
        })
      })

      const { data: { addPhone } } = await response.json()
      console.log({addPhone})
    } catch (error) {
      console.error(error)
    }
  }
}

export const store = createStore({
  state,
  mutations,
  actions,
  plugins: [createLogger()]
  // modules: {}
})