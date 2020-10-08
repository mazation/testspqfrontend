<template>
  <div class="container">
    <div>
      <h1>Баланс</h1>
      <p>Ваш баланс {{ balance }}</p>
    </div>
    <div>
      <h1>История баланса</h1>
      <table class="table">
        <thead>
          <tr>
            <td>Дата</td>
            <td>Баланс</td>
            <td>Изменение</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="balanceItem in balanceHistory" v-bind:key="balanceItem.id">
            <td>{{getDate(balanceItem.time)}}</td>
            <td>{{balanceItem.balance}}</td>
            <td>{{balanceItem.adding}}</td>
          </tr>
        </tbody>
      </table>
    </div>
          <!-- <Paginate
            :page-count="pages"
            :click-handler="getPage"
            :prev-text="'Предыдущая'"
            :next-text="'Следующая'"
            :container-class="'pagination'" 
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :prev-link-class="'page-link'"
            :next-link-class="'page-link'"
          /> -->
  </div>
</template>

<script>
//import Paginate from 'vuejs-paginate'
export default {
  name: "Balance",
  // data() {
  // },
  computed: {
    balance() {
      return this.$store.getters.balance
    },
    balanceHistory() {
      return this.$store.getters.balanceHistory
    },
  },
  beforeCreate() {
    this.$store.dispatch("getBalance")
  },
  methods: {
    getDate(timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString("ru-RU")
      //return date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
    }
  }

}
</script>

<style>

</style>