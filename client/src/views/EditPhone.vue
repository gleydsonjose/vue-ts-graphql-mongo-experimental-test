<template>
  <section class="edit-phone">
    <h1
      class="edit-phone__title"
    >
      Edit a phone
    </h1>
    <FormPhone module-name="editPhone" />
  </section>
</template>

<script lang="ts">
import FormPhone from '@views/form-phone/FormPhone.vue'
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'EditPhone',

  components: {
    FormPhone
  },

  created() {
    const { _id } = this.$route.params
    this.getOnePhone({ _id })
  },

  methods: {
    ...mapActions('editPhone', ['getOnePhone'])
  }
})
</script>

<style scoped>
.edit-phone {
  width: 100%;
  max-width: 700px;
}

.edit-phone__title {
  color: #3a3a3a;
  font-size: 14pt;
  margin-top: 1.5em;
}
</style>