<template>
  <div>
      <form @submit.prevent="submitForm">
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="surname" type="text" class="form-control" name="surname" required>
              <div class="input-group-append">
                  <span class="input-group-text">Фамилия</span>
              </div>
          </div>
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="userName" type="text" class="form-control" name="name" required>
              <div class="input-group-append">
                  <span class="input-group-text">Имя</span>
              </div>
          </div>
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="patronym" type="text" class="form-control" name="patronym" required>
              <div class="input-group-append">
                  <span class="input-group-text">Отчество</span>
              </div>
          </div>
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="phone" type="text" class="form-control" name="phone" required>
              <div class="input-group-append">
                  <span class="input-group-text">Телефон</span>
              </div>
          </div>

          <div class="input-group my-3 col-4 mx-auto">
              <input class="btn btn-primary mx-auto" @click.prevent='submitForm()' :disabled="!isFilled" type="submit" value="Отправить">
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: "EditAccount",
    data() {
        return {
            surname: "",
            userName: "",
            patronym: "",
            phone: "",
        }
    },
    computed: {
    user() {
      return this.$store.getters.user
    },
    isFilled() {
        return this.surname.length > 1 && this.userName.length > 1 && this.patronym.length > 1 && this.phone.length == 11
    }
  },
  methods: {
    submitForm() {
      let userdata = {
        "surname": this.surname,
        "name": this.userName,
        "patronym": this.patronym,
        "phone": this.phone
      }
      this.$store.dispatch("editUser", userdata)
    }
  },
}
</script>

<style>

</style>