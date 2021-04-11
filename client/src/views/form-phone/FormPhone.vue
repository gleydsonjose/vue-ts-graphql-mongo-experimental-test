<template>
  <!-- Before: FormPhone 674 pages -->

  <form class="form-phone">
    <InputSection
      v-model="$store.state.form.manufacturer"
      id-attribute="phone-manufacturer"
      label-text="Manufacturer"
    />

    <InputSection
      v-model="$store.state.form.model"
      id-attribute="phone-model"
      label-text="Model"
    />

    <InputSection
      v-model.number="$store.state.form.year"
      id-attribute="phone-year"
      input-type="number"
      label-text="Year"
      min-attribute="0"
    />

    <InputSection
      v-model="$store.state.form.operationSystem"
      id-attribute="phone-operation-system"
      label-text="Operation System"
    />

    <InputSection
      v-model="$store.state.form.chipset"
      id-attribute="phone-chipset"
      label-text="Chipset"
    />

    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Random Access Memory (RAM)
      </h2>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model.number="$store.state.form.randomAccessMemory.quantity"
          id-attribute="phone-random-access-memory"
          input-type="number"
          label-text="Quantity"
          min-attribute="0"
          :input-quantity="2"
        />

        <InputSection
          v-model="$store.state.form.randomAccessMemory.unit"
          id-attribute="phone-random-access-memory-unit"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="$store.state.units.dataStorage"
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
          v-model.number="$store.state.form.internalMemory.quantity"
          id-attribute="phone-internal-memory"
          input-type="number"
          label-text="Quantity"
          min-attribute="0"
          :input-quantity="2"
        />

        <InputSection
          v-model="$store.state.form.internalMemory.unit"
          id-attribute="phone-internal-memory"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="$store.state.units.dataStorage"
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
          v-model="$store.state.form.screen.type"
          id-attribute="phone-screen-type"
          label-text="Type"
          :input-quantity="2"
        />

        <InputSection
          v-model="$store.state.form.screen.protection"
          id-attribute="phone-protection"
          label-text="Protection"
          :input-quantity="2"
        />
      </section>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model.number="$store.state.form.screen.resolution.width"
          id-attribute="phone-screen-resolution-width"
          input-type="number"
          label-text="Width"
          min-attribute="0"
          :input-quantity="3"
        />

        <InputSection
          v-model.number="$store.state.form.screen.resolution.height"
          id-attribute="phone-screen-resolution-height"
          input-type="number"
          label-text="Height"
          min-attribute="0"
          :input-quantity="3"
        />

        <InputSection
          v-model="$store.state.form.screen.resolution.unit"
          id-attribute="phone-screen-resolution-unit"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="$store.state.units.resolution"
          :input-quantity="3"
        />
      </section>
    </section>
    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Camera
      </h2>

      <InputSection
        v-for="(backCamera, indexBackCamera) in $store.state.form.camera.positions.back"
        :key="backCamera.id"
        v-model.number="backCamera.pixel"
        :id-attribute="`phone-back-camera-${backCamera.id}`"
        input-type="number"
        :label-text="`${indexBackCamera + 1}° Back Camera Pixel Quantity`"
        input-section-type="btn-aside"
        @remove-camera="$store.commit('removeCamera', {cameraPosition: 'back', indexCamera: indexBackCamera})"
      />

      <ButtonSection
        button-section-type="add"
        label-text="Add Back Camera"
        icon-class="fas fa-plus"
        @click-button-section="$store.commit('addCamera', {cameraPosition: 'back'})"
      />

      <InputSection
        v-for="(frontCamera, indexFrontCamera) in $store.state.form.camera.positions.front"
        :key="frontCamera.id"
        v-model.number="frontCamera.pixel"
        :id-attribute="`phone-front-camera-${frontCamera.id}`"
        input-type="number"
        :label-text="`${indexFrontCamera + 1}° Front Camera Pixel Quantity`"
        input-section-type="btn-aside"
        @remove-camera="$store.commit('removeCamera', {cameraPosition: 'front', indexCamera: indexFrontCamera})"
      />

      <ButtonSection
        button-section-type="add"
        label-text="Add Front Camera"
        icon-class="fas fa-plus"
        @click-button-section="$store.commit('addCamera', {cameraPosition: 'front'})"
      />

      <InputSection
        v-model="$store.state.form.camera.unit"
        id-attribute="phone-camera-unit"
        input-type="select"
        label-text="Unit"
        select-default-label-option="Choose a unit"
        :select-options="$store.state.units.resolution"
      />
    </section>
    <section class="form-phone__input-parent-section">
      <h2 class="form-phone__input-parent-title">
        Battery
      </h2>
      <section class="form-phone__input-group-section">
        <InputSection
          v-model.number="$store.state.form.battery.quantity"
          id-attribute="phone-battery-quantity"
          input-type="number"
          label-text="Quantity"
          :input-quantity="2"
        />

        <InputSection
          v-model="$store.state.form.battery.unit"
          id-attribute="phone-battery-unit"
          input-type="select"
          label-text="Unit"
          select-default-label-option="Choose a unit"
          :select-options="$store.state.units.battery"
          :input-quantity="2"
        />
      </section>
    </section>

    <ButtonSection
      button-section-type="save"
      label-text="Save"
      icon-class="fas fa-save"
      @click-button-section="$store.dispatch('saveData')"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputSection from '@views/form-phone/components/InputSection.vue'
import ButtonSection from '@views/form-phone/components/ButtonSection.vue'


export default defineComponent({
  name: 'FormPhone',

  components: {
    InputSection,
    ButtonSection
  },

  mounted() {
    this.$store.dispatch('getAllUnits')
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