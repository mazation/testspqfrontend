<template>
  <div clsss="container">
      <h1 class="text-center">Звонки</h1>
      <div v-if="callsNumber > 0">
          <table class="table">
            <thead>
              <tr>
                <th>Номер телефона</th>
                <th>Дата</th>
                <th>Тип вызова</th>
                <th>Длительность вызова</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="call in calls" :key="call.id">
                    <td>{{call.caller}}</td>
                    <td>{{ getDate(call.time) }}</td>
                    <td>{{getType(call.callType)}}</td>
                    <td>{{getDuration(call.callDuration)}}</td>
                </tr>               
            </tbody>          
      </table>
      <div class="mx-auto col-6">
      </div>
      
          <Paginate
            :page-count="pages"
            :click-handler="getPage"
            :prev-text="'Предыдущая'"
            :next-text="'Следующая'"
            :container-class="'pagination'" 
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :prev-link-class="'page-link'"
            :next-link-class="'page-link'"
          />
      </div>
      <div v-else>
          <p clas="text-center">У вас нет совершенных звонков</p>

      </div>
          
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
export default {
    name: "Calls",

    components: {
        Paginate
    },
    computed: {
        calls() {
            return this.$store.getters.calls
        },
        pages() {
            return Math.ceil(this.$store.getters.callsNumber / 20)
        },
        callsNumber() {
            return this.$store.getters.callsNumber
        }
    },
    methods: {
        getDate(time) {
            var date = new Date(time * 1000)
            return date.toLocaleDateString("ru-RU", {minute: "2-digit", second: "2-digit"})
        },
        getType(type) {
            const typeList = {
                "incoming": "Исходящий",
                "outgoing": "Входящий",
                "cancelled": "Неотвеченный"
            }
            return typeList[type]
        },
        getDuration(duration) {
            if (duration == 0) {
                return "нет"
            } else {
                 return duration + " сек"
            }  
        },
        getPage(page) {
            const paginate = {
                "page": page,
                "per_page": 20
                }
                this.$store.dispatch("getCalls", paginate)
            },
    },
    beforeCreate() {
        const paginate = {
            "page": 1,
            "per_page": 20
        }
        this.$store.dispatch("getCalls", paginate)
    }
}
</script>

<style>

</style>