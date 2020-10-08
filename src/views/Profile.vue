<template>
  <div class="container">
      <div class="row" v-if="loggedIn">
          <ul class="col-2 navbar-nav">
              <li class="nav-item nav-link pointer" v-on:click="account()">Аккаунт</li>
              <li class="nav-item nav-link pointer"  v-on:click="balance()">Баланс</li>
              <li class="nav-item nav-link pointer"  v-on:click="calls()">Звонки</li>
          </ul>
          <div class="col-10">
            <Account v-if="accountChosen"/>
            <Balance v-if="balanceChosen"/>
            <Calls v-if="callsChosen"/>
          </div>
      </div>
      <div class="container" v-else>
          <p>Вы не можете просматривать эту страницу(</p>
      </div>
  </div>
</template>

<script>
import Account from "../components/Account.vue"
import Balance from "../components/Balance.vue"
import Calls from "../components/Calls.vue"
export default {    
    name: "Profile",
    components: {
        Account,
        Balance,
        Calls
    },
    data() {
        return {
            accountChosen: true,
            balanceChosen: false,
            callsChosen: false
        }       
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    },
    methods: {
        account() {
            this.accountChosen = true
            this.balanceChosen = false
            this.callsChosen = false
        },
        balance() {
            this.accountChosen = false
            this.balanceChosen = true
            this.callsChosen = false
        },
        calls() {
            this.accountChosen = false
            this.balanceChosen = false
            this.callsChosen = true
        }
    }
    
}
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }

</style>