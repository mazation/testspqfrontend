<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-lg">
      <span class="navbar-brand">Logo</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ">
          <router-link to="/register" class="nav-item nav-link mr-auto" >Регистрация</router-link>
        <router-link to="/login" class="nav-item nav-link ">Войти</router-link>
        </div>
      </div>
      
    </nav>
    <router-view />
  </div>
</template>


<style>

</style>
