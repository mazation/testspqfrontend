<template>
  <div>
      <form @submit.prevent="submitForm">
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="email" type="text" class="form-control" name="email" required>
              <div class="input-group-append">
                  <span class="input-group-text">Email</span>
              </div>
          </div>
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="oldPassword" type="password" class="form-control" name="oldPassword" required>
              <div class="input-group-append">
                  <span class="input-group-text">Старый пароль</span>
              </div>
          </div>
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="newPassword" type="text" class="form-control" name="newPassword" required>
              <div class="input-group-append">
                  <span class="input-group-text">Новый пароль</span>
              </div>
          </div>
          <div class="input-group my-3 col-6 mx-auto">
              <input v-model="newPasswordConrirm" type="text" class="form-control" name="newPasswordConrirm" required>
              <div class="input-group-append">
                  <span class="input-group-text">Повторите пароль</span>
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
    name: "EditCredentials",
    data() {
        return {
            "email": "",
            "oldPassword": "",
            "newPassword": "",
            "newPasswordConrirm": ""
        }
    },
    computed: {
        isFilled(){
            return true;
        }
    }
}
</script>

<style>

</style>