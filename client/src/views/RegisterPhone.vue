<template>
  <section class="register-phone">
    <h1
      class="register-phone__title"
    >
      Register a phone
    </h1>
    <FormPhone
      form-type="REGISTER"
    />
  </section>
</template>

<script lang="ts">
import FormPhone from '@views/form-phone/FormPhone.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'RegisterPhone',

  components: {
    FormPhone
  }
})
</script>

<style scoped>
.register-phone {
  width: 100%;
  max-width: 700px;
}

.register-phone__title {
  color: #3a3a3a;
  font-size: 14pt;
  margin-top: 1.5em;
}
</style>