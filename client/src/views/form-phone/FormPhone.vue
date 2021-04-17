<template>
  <form class="form-phone">
    <InputSection
      v-model="form.manufacturer"
      id-attribute="phone-manufacturer"
      label-text="Manufacturer"
    />

    <InputSection
      v-model="form.model"
      id-attribute="phone-model"
      label-text="Model"
    />

    <InputSection
      v-model.number="form.year"
      id-attribute="phone-year"
      input-type="number"
      label-text="Year"
      min-attribute="0"
    />

    <InputSection
      v-model="form.operationSystem"
      id-attribute="phone-operation-system"
      label-text="Operation System"
    />

    <InputSection
      v-model="form.chipset"
      id-attribute="phone-chipset"
      label-text="Chipset"
    />

    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Random Access Memory (RAM)
      </h2>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model.number="form.randomAccessMemory.quantity"
          id-attribute="phone-random-access-memory"
          input-type="number"
          label-text="Quantity"
          min-attribute="0"
          :input-quantity="2"
        />

        <InputSection
          v-model="form.randomAccessMemory.unit"
          id-attribute="phone-random-access-memory-unit"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="units.dataStorage"
          :input-quantity="2"
        />
      </section>
    </section>
    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Internal Memory
      </h2>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model.number="form.internalMemory.quantity"
          id-attribute="phone-internal-memory"
          input-type="number"
          label-text="Quantity"
          min-attribute="0"
          :input-quantity="2"
        />

        <InputSection
          v-model="form.internalMemory.unit"
          id-attribute="phone-internal-memory"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="units.dataStorage"
          :input-quantity="2"
        />
      </section>
    </section>
    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Screen
      </h2>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model="form.screen.type"
          id-attribute="phone-screen-type"
          label-text="Type"
          :input-quantity="2"
        />

        <InputSection
          v-model="form.screen.protection"
          id-attribute="phone-protection"
          label-text="Protection"
          :input-quantity="2"
        />
      </section>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model.number="form.screen.resolution.width"
          id-attribute="phone-screen-resolution-width"
          input-type="number"
          label-text="Width"
          min-attribute="0"
          :input-quantity="3"
        />

        <InputSection
          v-model.number="form.screen.resolution.height"
          id-attribute="phone-screen-resolution-height"
          input-type="number"
          label-text="Height"
          min-attribute="0"
          :input-quantity="3"
        />

        <InputSection
          v-model="form.screen.resolution.unit"
          id-attribute="phone-screen-resolution-unit"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="units.resolution"
          :input-quantity="3"
        />
      </section>
    </section>
    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Camera
      </h2>

      <InputSection
        v-for="(backCamera, indexBackCamera) in form.camera.positions.back"
        :key="backCamera._id"
        v-model.number="backCamera.pixel"
        :id-attribute="`phone-back-camera-${backCamera.id}`"
        input-type="number"
        :label-text="`${indexBackCamera + 1}° Back Camera Pixel Quantity`"
        input-section-type="btn-aside"
        @remove-camera="removeCamera({cameraPosition: 'back', indexCamera: indexBackCamera})"
      />

      <ButtonSection
        button-section-type="add"
        label-text="Add Back Camera"
        icon-class="fas fa-plus"
        @click-button-section="addCamera({cameraPosition: 'back'})"
      />

      <InputSection
        v-for="(frontCamera, indexFrontCamera) in form.camera.positions.front"
        :key="frontCamera._id"
        v-model.number="frontCamera.pixel"
        :id-attribute="`phone-front-camera-${frontCamera.id}`"
        input-type="number"
        :label-text="`${indexFrontCamera + 1}° Front Camera Pixel Quantity`"
        input-section-type="btn-aside"
        @remove-camera="removeCamera({cameraPosition: 'front', indexCamera: indexFrontCamera})"
      />

      <ButtonSection
        button-section-type="add"
        label-text="Add Front Camera"
        icon-class="fas fa-plus"
        @click-button-section="addCamera({cameraPosition: 'front'})"
      />

      <InputSection
        v-model="form.camera.unit"
        id-attribute="phone-camera-unit"
        input-type="select"
        label-text="Unit"
        select-default-label-option="Choose a unit"
        :select-options="units.resolution"
      />
    </section>
    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Battery
      </h2>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model.number="form.battery.quantity"
          id-attribute="phone-battery-quantity"
          input-type="number"
          label-text="Quantity"
          :input-quantity="2"
        />

        <InputSection
          v-model="form.battery.unit"
          id-attribute="phone-battery-unit"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="units.battery"
          :input-quantity="2"
        />
      </section>
    </section>

    <ButtonSection
      button-section-type="save"
      label-text="Save"
      icon-class="fas fa-save"
      @click-button-section="saveData"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import InputSection from '@views/form-phone/components/InputSection.vue'
import ButtonSection from '@views/form-phone/components/ButtonSection.vue'

export default Vue.extend({
  name: 'FormPhone',

  components: {
    InputSection,
    ButtonSection
  },

  props: {
    moduleName:  {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    ...mapState({
      form (state: any) {
        return state[this.moduleName].form
      },

      units (state: any) {
        return state[this.moduleName].units
      }
    })
  },

  methods: {
    ...mapMutations({
      addCamera (commit, payload) {
        return commit(`${this.moduleName}/addCamera`, payload)
      },

      removeCamera (commit, payload) {
        return commit(`${this.moduleName}/removeCamera`, payload)
      }
    }),

    ...mapActions({
      getAllUnits (dispatch) {
        return dispatch(`${this.moduleName}/getAllUnits`)
      },

      saveData (dispatch) {
        return dispatch(`${this.moduleName}/saveData`)
      }
    })
  },

  mounted() {
    this.getAllUnits()
  },
})
</script>

<style scoped>
.form-phone {
  display: flex;
  flex-flow: column nowrap;
}

.form-phone__input-parent-section {
  display: flex;
  flex-flow: column nowrap;
}

.form-phone__input-parent-title {
  color: #53c0ff;
  font-size: 12pt;
  padding-bottom: .5em;
  border-bottom: 1px solid #53c0ff;
  margin: 1.4em 0 .4em 0;
  font-weight: normal;
}

.form-phone__input-group-section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}
</style>