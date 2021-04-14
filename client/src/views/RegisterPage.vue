<template>
  <section class="register-page">
    <h1
      class="register-page__title"
    >
      Register a phone
    </h1>
    <FormPhone />
  </section>
</template>

<script lang="ts">
import FormPhone from '@views/form-phone/FormPhone.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterPage',

  components: {
    FormPhone
  }
})
</script>

<style scoped>
.register-page {
  width: 100%;
  max-width: 700px;
}

.register-page__title {
  color: #3a3a3a;
  font-size: 14pt;
  margin-top: 1.5em;
}
</style>