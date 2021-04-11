<template>
  <section class="phone-page">
    <h1 class="phone-page__title">
      Phone List
    </h1>

    <table class="phone-page__table">
      <thead class="phone-page__thead">
        <tr class="phone-page__tr">
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Manufacturer
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Model
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Year
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Operation System
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Chipset
          </th>
          <th
            class="phone-page__th"
            colspan="3"
          >
            Screen
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            RAM
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Internal Memory
          </th>
          <th
            class="phone-page__th"
            colspan="2"
          >
            Camera
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Battery
          </th>
          <th
            class="phone-page__th"
            rowspan="2"
          >
            Options
          </th>
        </tr>
        <tr class="phone-page__tr">
          <th class="phone-page__th phone-page__th--sub">
            Type
          </th>
          <th class="phone-page__th phone-page__th--sub">
            Resolution
          </th>
          <th class="phone-page__th phone-page__th--sub">
            Protection
          </th>
          <th class="phone-page__th phone-page__th--sub">
            Back
          </th>
          <th class="phone-page__th phone-page__th--sub">
            Front
          </th>
        </tr>
      </thead>
      <tbody class="phone-page__tbody">
        <tr
          v-for="(phone, indexPhone) in phones"
          :key="phone._id"
          class="phone-page__tr"
        >
          <td class="phone-page__td">
            {{ phone.manufacturer }}
          </td>
          <td class="phone-page__td">
            {{ phone.model }}
          </td>
          <td class="phone-page__td">
            {{ phone.year }}
          </td>
          <td class="phone-page__td">
            {{ phone.operationSystem }}
          </td>
          <td class="phone-page__td">
            {{ phone.chipset }}
          </td>
          <td class="phone-page__td">
            {{ phone.screen.type }}
          </td>
          <td class="phone-page__td">
            {{ `${phone.screen.resolution.width}x${phone.screen.resolution.height + phone.screen.resolution.unit}` }}
          </td>
          <td class="phone-page__td">
            {{ phone.screen.protection }}
          </td>
          <td class="phone-page__td">
            {{ phone.randomAcessMemory.quantity + phone.randomAcessMemory.unit }}
          </td>
          <td class="phone-page__td">
            {{ phone.internalMemory.quantity + phone.internalMemory.unit }}
          </td>
          <td class="phone-page__td">
            {{ buildStringWithCameras(phone.camera.back, phone.camera.unit) }}
          </td>
          <td class="phone-page__td">
            {{ buildStringWithCameras(phone.camera.front, phone.camera.unit) }}
          </td>
          <td class="phone-page__td">
            {{ phone.battery.quantity + phone.battery.unit }}
          </td>
          <td class="phone-page__td">
            <section class="phone-page__btn-group">
              <button
                class="phone-page__btn phone-page__btn--edit"
                title="Edit"
                @click="editOnePhone(phone)"
              >
                <i class="fas fa-edit phone-page__btn-icon" />
              </button>
              <button
                class="phone-page__btn phone-page__btn--remove"
                title="Remove"
                @click="removeOnePhone(indexPhone)"
              >
                <i class="fas fa-trash-alt phone-page__btn-icon" />
              </button>
            </section>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PhoneInterface } from '@interfaces/Phone'

export default defineComponent({
  name: 'PhonesPage',

  data() {
    return {
      phones: []
    }
  },

  mounted() {
    this.getAllPhones()
  },

  methods: {
    async getAllPhones() {
      try {
        const response = await fetch('http://localhost:4000', {
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
                  randomAcessMemory {
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
                    back
                    front
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
        const {data} = await response.json()
        
        this.phones = data.phones
      } catch (error) {
        console.error(error)
      }
    },

    editOnePhone(phone: PhoneInterface) {
      console.log({phone})
    },

    removeOnePhone(indexPhone: number) {
      this.phones.splice(indexPhone, 1)
    },

    buildStringWithCameras(cameras: number[], cameraUnit: string) {
      return cameras.map((camera) => `${camera + cameraUnit}`).join(', ')
    }
  }
})
</script>

<style scoped>
.phone-page {
  font-size: 9pt;
  width: 100%;
  max-width: 1100px;
}

.phone-page__title {
  color: #3a3a3a;
  font-size: 14pt;
  margin-top: 1.5em;
}

.phone-page__table, .phone-page__th, .phone-page__td {
  border-collapse: collapse;
}

.phone-page__thead {
  border-top: 1px solid #53c0ff;
  border-left: 1px solid #53c0ff;
  border-right: 1px solid #53c0ff;
}

.phone-page__tbody {
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}

.phone-page__tbody > .phone-page__tr:nth-child(2n) {
  background-color: #e1f1fa;
}

.phone-page__th, .phone-page__td {
  padding: .5em .7em;
}

.phone-page__th {
  background-color: #53c0ff;
  color: #ffffff;
  text-align: center;
}

.phone-page__th--sub {
  background-color: #197fbb;
}

.phone-page__td {
  color: #3a3a3a;
  text-align: center;
}

.phone-page__btn-group {
  display: flex;
}

.phone-page__btn {
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: .4em;
  padding: .3em .5em;
  transition: color 250ms ease-in;
}

.phone-page__btn:focus {
  outline: none;
}

.phone-page__btn:hover {
  color: #4b4b4b;
}

.phone-page__btn:last-child {
  margin-right: 0;
}

.phone-page__btn--edit {
  color: #5cb0e0;
}

.phone-page__btn--remove {
  color: #e66060;
}
</style>