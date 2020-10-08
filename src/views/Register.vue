<template>
  <div class="container">
      <form @submit.prevent="submitForm" v-if="!isSent" class="col-lg-6 col-sm-8 mx-auto">
          <div class="input-group my-3  mx-auto">
              <input v-model="email" type="text" class="form-control" name="email" required>
              <div class="input-group-append">
                  <span class="input-group-text">Email</span>
              </div>
          </div>

          <div class="input-group my-3  mx-auto">
              <input v-model="password" type="password" class="form-control" name="password" required>
              <div class="input-group-append">
                  <span class="input-group-text">Пароль</span>
              </div>
          </div>

          <div class="input-group my-3 mx-auto">
              <input v-model="passwordConfirm" type="password" class="form-control" name="password" required>
              <div class="input-group-append">
                  <span class="input-group-text">Подтвердите пароль</span>
              </div>
          </div>

          <div class="input-group my-3 col-4 mx-auto">
              <input class="btn btn-primary mx-auto" @click.prevent='submitForm()' :disabled="!isFilled" type="submit" value="Отправить">
          </div>
          <div class="col-4 mx-auto">
              <span class="text-danger">{{ errorMessage }}</span>
          </div>
      </form>
      <div v-else>
          <h1>Запрос отправлен</h1>
            <p>Проверьте почту и перейдите по ссылке из письма для окончания регистрации</p>
      </div>
  </div>
</template>

<script>

export default {
    name: "Register",
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
            return this.email.length > 0 && this.password.length > 0 && this.passwordConfirm.length > 0 ? true : false;
            },
        isSent() {
            return this.$store.getters.registerSent;
        }
    },
    methods: {
        submitForm: function() {
            if (this.password != this.passwordConfirm) {
                this.errorMessage = "Пароли не совпадают"
            } else {
                this.$store.dispatch("newUser", {
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
    
}
</script>

<style>

</style>