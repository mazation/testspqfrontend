<template>
  <div>
    <h1>Аккаунт</h1>
    <div v-if="!user">
      <p>Информация еще не загружена</p>
    </div>
    <div v-else-if="gotUser">
      <ul class="list-group">
        <li class="list-group-item">Фамилия: {{user.surname}}</li>
        <li class="list-group-item">Имя: {{user.name}}</li>
        <li class="list-group-item">Отчество: {{user.patronym}}</li>
        <li class="list-group-item">Телефон: {{user.phone}}</li>
      </ul>
    </div>
    <div v-else>
      <EditAccount />
    </div>
    <div class="row">
      <button class="btn btn-primary mx-4 my-4" v-on:click="changeVisibilityAccount" v-if="gotUser">Редактировать данные</button>
    <button class="btn btn-primary mx-4 my-4" v-on:click="changeVisibilityCredrtnials">Изменить пароль</button>
    </div>
    

    <div v-if="editAccountAccess">
      <h3>Изменение аккаунта</h3>
      <EditAccount />
      <div class="row">
        <button class="btn btn-danger mr-0" v-on:click="changeVisibilityAccount">Скрыть</button>
      </div>
    </div>
    <div v-if="editCredentialsAccess">
      <h3>Изменение пароля</h3>
      <EditCredentials />
      <div class="row">
        <button class="btn btn-danger mr-0" v-on:click="changeVisibilityCredrtnials">Скрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import EditAccount from "../components/EditAccount.vue"
import EditCredentials from "../components/EditCredentials.vue"
export default {
  name: "Account",
  components: {
    EditAccount,
    EditCredentials
  },
  data() {
    return {
      editAccountAccess: false,
      editCredentialsAccess: false
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    gotUser() {
      return this.user.name && this.user.surname && this.user.patronym && this.user.phone
    }
  },

  methods: {
    changeVisibilityAccount() {
      this.editAccountAccess = !this.editAccountAccess 
    },
    changeVisibilityCredrtnials() {
      this.editCredentialsAccess = !this.editCredentialsAccess 
    }
  },

  beforeCreate() {
    this.$store.dispatch("getUser", 1)
  }
}
</script>

<style>

</style>