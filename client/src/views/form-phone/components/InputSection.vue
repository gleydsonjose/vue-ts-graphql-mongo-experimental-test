<template>
  <section
    class="input-section"
    :class="inputSectionAdditionalClass"
  >
    <label
      :for="idAttribute"
      class="input-section__label"
    >
      {{ labelText }}
    </label>
    
    <template v-if="inputSectionType === 'btn-aside'">
      <section class="input-section__btn-aside">
        <input
          :id="idAttribute"
          :value="modelValue"
          :type="inputType"
          :min="minAttribute"
          class="input-section__input"
          @input="$emit('update:modelValue', $event.target.value)"
        >
        <button
          class="input-section__btn input-section__btn--remove"
          type="button"
          @click="$emit('remove-camera')"
        >
          <i class="fas fa-times" />
        </button>
      </section>
    </template>

    <template v-else>
      <select
        v-if="inputType === 'select'"
        :id="idAttribute"
        class="input-section__select"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="">
          {{ selectDefaultLabelOption }}
        </option>
        <option
          v-for="optionValue in selectOptions"
          :key="optionValue"
          :value="optionValue"
        >
          {{ optionValue }}
        </option>
      </select>

      <input
        v-else-if="inputType === 'number'"
        :id="idAttribute"
        :type="inputType"
        class="input-section__input"
        :value="modelValue"
        :min="minAttribute"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      
      <input
        v-else
        :id="idAttribute"
        :type="inputType"
        class="input-section__input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputSection',

  props: {
    idAttribute: {
      type: String,
      required: true
    },

    labelText: {
      type: String,
      required: true
    },

    inputSectionType: {
      type: String,
      required: false,
      default: ''
    },

    inputType: {
      type: String,
      required: false,
      default: 'text'
    },

    minAttribute: {
      type: String,
      required: false,
      default: '0'
    },

    modelValue: {
      type: [String, Number],
      required: true
    },
    
    inputQuantity: {
      type: Number,
      required: false,
      default: 1
    },

    selectDefaultLabelOption: {
      type: String,
      required: false,
      default: ''
    },

    selectOptions: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  emits: ['update:modelValue', 'remove-camera'],

  computed: {
    inputSectionAdditionalClass() {
      const additionalClass = []

      switch(this.inputQuantity) {
        case 2:
          additionalClass.push('input-section--two-inputs')
          break
        case 3:
          additionalClass.push('input-section--three-inputs')          
          break
        default:
          break
      }

      return additionalClass
    }
  }
})
</script>

<style scoped>
.input-section {
  display: flex;
  flex-flow: column nowrap;
  padding: .5em 0;
}

.input-section--two-inputs {
  width: 49%; 
}

.input-section--three-inputs {
  width: 32%; 
}

.input-section__label {
  padding-bottom: .3em;
  color: #3a3a3a;
  font-size: 11pt;
}

.input-section__input {
  border: 1px solid #e1e1e1;
  color: #3a3a3a;
  border-radius: 3px;
  padding: .7em .6em;
  transition: border 200ms ease-in;
}

.input-section__input:focus {
  border: 1px solid #53c0ff;
  outline: none;
}

.input-section__select {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  color: #3a3a3a;
  border-radius: 3px;
  padding: .625em .3em;
  transition: border 200ms ease-in;
}

.input-section__select:focus {
  border: 1px solid #53c0ff;
  outline: none;
}

.input-section__btn-aside {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
}

.input-section__btn {
  background-color: #53c0ff;
  color: #fff;
  padding: .5em 1em;
  border-top: 1.5px solid #4196c7;
  border-left: 1.5px solid #4196c7;
  border-right: 1.5px solid #4196c7;
  border-bottom: 3px solid #4196c7;
  border-radius: 3px;
  font-size: 12pt;
  cursor: pointer;
  transition: background-color 250ms ease-in, border 250ms ease-in;
}

.input-section__btn-aside > .input-section__input {
  width: 100%;
}

.input-section__btn-aside > .input-section__btn {
  margin-left: .5em;
}

.input-section__btn--remove {
  background-color: #ff5353;
  padding: .4em .8em;
  border-top: 1.5px solid #c74141;
  border-left: 1.5px solid #c74141;
  border-right: 1.5px solid #c74141;
  border-bottom: 3px solid #c74141;
}

.input-section__btn--remove:hover {
  background-color: #da4545;
}
</style>