<template>
  <div class="container">
       <form @submit.prevent="submitForm" class="col-lg-6 col-sm-8 mx-auto">
          <div class="input-group my-3 mx-auto">
              <input v-model="email" type="text" class="form-control" name="email" required>
              <div class="input-group-append">
                  <span class="input-group-text">Email</span>
              </div>
          </div>

          <div class="input-group my-3 mx-auto">
              <input v-model="password" type="password" class="form-control" name="password" required>
              <div class="input-group-append">
                  <span class="input-group-text">Пароль</span>
              </div>
          </div>

          <div class="input-group my-3 mx-auto">
              <input class="btn btn-primary mx-auto" @click.prevent='submitForm()' :disabled="!isFilled" type="submit" value="Отправить">
          </div>
          <div class="col-4 mx-auto">
              <span class="text-danger">{{ errorMessage }}</span>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password:"",
            passwordConfirm: "",
            errorMessage: "",
        }
    },
    computed: {
        isFilled() {
            return this.email.length > 0 && this.password.length > 0;
        }
    },
    methods: {
        submitForm: function() {
            this.$store.dispatch("login", {
                email: this.email,
                password: this.password
            })
            .then(
                () => this.$router.push({path: 'profile'}),
                error => console.error(error)
            )           
        }
    },
    beforeCreate() {
        if (this.$store.getters.loggedIn){
            this.$router.push({path: 'profile'})
        }
    }
}
</script>

<style>

</style>