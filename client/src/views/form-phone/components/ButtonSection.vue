<template>
  <section
    class="btn-section"
    :class="buttonSectionAdditionalClass"
  >
    <button
      class="btn-section__btn btn-section__btn--add"
      :class="btnAdditionalClass"
      type="button"
      @click="$emit('click-button-section')"
    >
      <i
        class="btn-section__btn-icon"
        :class="iconClass"
      />
      {{ labelText }}
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonSection',

  props: {
    buttonSectionType: {
      type: String,
      required: false,
      default: ''
    },

    labelText: {
      type: String,
      required: true,
    },

    iconClass: {
      type: String,
      required: true
    }
  },

  emits: ['click-button-section'],

  computed: {
    buttonSectionAdditionalClass() {
      switch(this.buttonSectionType) {
        case 'add':
          return 'btn-section--add'
        case 'save':
          return 'btn-section--save'
        default:
          return ''
      }
    },

    btnAdditionalClass() {
      switch(this.buttonSectionType) {
        case 'add':
          return 'btn-section__btn--add'
        case 'save':
          return 'btn-section__btn--save'
        default:
          return ''
      }
    },
  }
})
</script>

<style>
.btn-section {
  display: flex;
}

.btn-section--add {
  padding: .5em 0;
}

.btn-section--save {
  justify-content: flex-end;
  padding: 2em 0;
}

.btn-section__btn {
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

.btn-section__btn:focus {
  outline: none;
}

.btn-section__btn:hover {
  background-color: #45a3da;
  color: #f3f3f3;
  border-top: 1.5px solid #3a3a3a;
  border-left: 1.5px solid #3a3a3a;
  border-right: 1.5px solid #3a3a3a;
  border-bottom: 3px solid #3a3a3a;
}

.btn-section__btn--add {
  font-size: 11pt;
}

.btn-section__btn-icon {
  margin-right: .2em;
}
</style>