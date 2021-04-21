<template>
  <section class="edit-phone">
    <h1
      class="edit-phone__title"
    >
      Edit a phone
    </h1>
    <FormPhone
      form-type="EDIT"
      :phone="phone"
    />
  </section>
</template>

<script lang="ts">
import FormPhone from '@views/form-phone/FormPhone.vue'
import Vue from 'vue'
import { fetchOnePhoneQuery } from '@graphql/queries'

export default Vue.extend({
  name: 'EditPhone',

  apollo: {
    phone: {
      query: fetchOnePhoneQuery,
      variables() {
        return {
          _id: this.$route.params._id
        }
      }
    }
  },

  components: {
    FormPhone
  },

  data() {
    return {
      phone: {}
    }
  },
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