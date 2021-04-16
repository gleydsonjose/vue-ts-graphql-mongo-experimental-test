<template>
  <section class="phones-list">
    <h1 class="phones-list__title">
      Phone List
    </h1>

    <table class="phones-list__table">
      <thead class="phones-list__thead">
        <tr class="phones-list__tr">
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Manufacturer
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Model
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Year
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Operation System
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Chipset
          </th>
          <th
            class="phones-list__th"
            colspan="3"
          >
            Screen
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            RAM
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Internal Memory
          </th>
          <th
            class="phones-list__th"
            colspan="2"
          >
            Camera
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Battery
          </th>
          <th
            class="phones-list__th"
            rowspan="2"
          >
            Options
          </th>
        </tr>
        <tr class="phones-list__tr">
          <th class="phones-list__th phones-list__th--sub">
            Type
          </th>
          <th class="phones-list__th phones-list__th--sub">
            Resolution
          </th>
          <th class="phones-list__th phones-list__th--sub">
            Protection
          </th>
          <th class="phones-list__th phones-list__th--sub">
            Back
          </th>
          <th class="phones-list__th phones-list__th--sub">
            Front
          </th>
        </tr>
      </thead>
      <tbody class="phones-list__tbody">
        <tr
          v-for="(phone, indexPhone) in $store.state.phonesList.phones"
          :key="phone._id"
          class="phones-list__tr"
        >
          <td class="phones-list__td">
            {{ phone.manufacturer }}
          </td>
          <td class="phones-list__td">
            {{ phone.model }}
          </td>
          <td class="phones-list__td">
            {{ phone.year }}
          </td>
          <td class="phones-list__td">
            {{ phone.operationSystem }}
          </td>
          <td class="phones-list__td">
            {{ phone.chipset }}
          </td>
          <td class="phones-list__td">
            {{ phone.screen.type }}
          </td>
          <td class="phones-list__td">
            {{ `${phone.screen.resolution.width}x${phone.screen.resolution.height + phone.screen.resolution.unit}` }}
          </td>
          <td class="phones-list__td">
            {{ phone.screen.protection }}
          </td>
          <td class="phones-list__td">
            {{ phone.randomAccessMemory.quantity + phone.randomAccessMemory.unit }}
          </td>
          <td class="phones-list__td">
            {{ phone.internalMemory.quantity + phone.internalMemory.unit }}
          </td>
          <td class="phones-list__td">
            {{ buildStringWithCameras(phone.camera.positions.back, phone.camera.unit) }}
          </td>
          <td class="phones-list__td">
            {{ buildStringWithCameras(phone.camera.positions.front, phone.camera.unit) }}
          </td>
          <td class="phones-list__td">
            {{ phone.battery.quantity + phone.battery.unit }}
          </td>
          <td class="phones-list__td">
            <section class="phones-list__btn-group">
              <button
                class="phones-list__btn phones-list__btn--edit"
                title="Edit"
                @click="editOnePhone(phone._id)"
              >
                <i class="fas fa-edit phones-list__btn-icon" />
              </button>
              <button
                class="phones-list__btn phones-list__btn--remove"
                title="Remove"
                @click="$store.dispatch('phonesList/removeOnePhone', { _id: phone._id, indexPhone })"
              >
                <i class="fas fa-trash-alt phones-list__btn-icon" />
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
import { PositionCameraInterface } from '@interfaces/Phone'

export default defineComponent({
  name: 'PhonesList',

  mounted() {
    this.$store.dispatch('phonesList/getAllPhones')
  },

  methods: {
    editOnePhone(_id: string) {
      this.$router.push({ path: `/edit-phone/${_id}` })
    },

    buildStringWithCameras(cameras: PositionCameraInterface[], cameraUnit: string) {
      return cameras.map(({pixel}) => `${pixel + cameraUnit}`).join(', ')
    }
  }
})
</script>

<style scoped>
.phones-list {
  font-size: 9pt;
  width: 100%;
  max-width: 1100px;
}

.phones-list__title {
  color: #3a3a3a;
  font-size: 14pt;
  margin-top: 1.5em;
}

.phones-list__table, .phones-list__th, .phones-list__td {
  border-collapse: collapse;
}

.phones-list__thead {
  border-top: 1px solid #53c0ff;
  border-left: 1px solid #53c0ff;
  border-right: 1px solid #53c0ff;
}

.phones-list__tbody {
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}

.phones-list__tbody > .phones-list__tr:nth-child(2n) {
  background-color: #e1f1fa;
}

.phones-list__th, .phones-list__td {
  padding: .5em .7em;
}

.phones-list__th {
  background-color: #53c0ff;
  color: #ffffff;
  text-align: center;
}

.phones-list__th--sub {
  background-color: #197fbb;
}

.phones-list__td {
  color: #3a3a3a;
  text-align: center;
}

.phones-list__btn-group {
  display: flex;
}

.phones-list__btn {
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: .4em;
  padding: .3em .5em;
  transition: color 250ms ease-in;
}

.phones-list__btn:focus {
  outline: none;
}

.phones-list__btn:hover {
  color: #4b4b4b;
}

.phones-list__btn:last-child {
  margin-right: 0;
}

.phones-list__btn--edit {
  color: #5cb0e0;
}

.phones-list__btn--remove {
  color: #e66060;
}
</style>