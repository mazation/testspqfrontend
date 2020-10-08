<template>
  <div class="container">
      <div v-if="isConfirmed">
          <h1>Поздравляем, вы зарегистрированы!</h1>
          <p>Можете использовать приложение, можете перейти на <router-link to="/login">страницу авторизации</router-link></p>
      </div>
      <div v-else>
          <h1>Что-то пошло не так</h1>
          <p>Попробуйте еще раз</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        isConfirmed() {
            return this.$store.getters.isConfirmed;
        }
    },
    methods: {

    },
    beforeCreate() {
        console.log(this.$route.params.confirmToken)
        this.$store.dispatch('confirmEmail', {
            confirmToken: this.$route.params.confirmToken
        })
    }
}
</script>

<style>

</style>