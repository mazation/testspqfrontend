<template>
  <div id="app" class="container">
    <nav class="navbar navbar-light navbar-expand-lg">
      <router-link to="/" class="navbar-brand">Logo</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div>
          <div v-if="!loggedIn" class="navbar-nav">
            <router-link to="/register" class="nav-item nav-link mr-auto">Регистрация</router-link>
            <router-link to="/login" class="nav-item nav-link">Войти</router-link>
            </div> 
            <div class="navbar-nav" v-else>
              <router-link to="/profile" class="nav-item nav-link">Профиль</router-link>
              <router-link to="/logout" class="nav-item nav-link">Выйти</router-link>
            </div>          
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style scoped>

</style>
