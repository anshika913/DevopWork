<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none "> Contacts</h6>
    </div>
    <q-form class="q-gutter-md">
      <q-input dense label="Id"  lazy-rules :rules="[val => !!val || 'Field is required']" outlined v-model="formData.id" />
      <q-select dense label="Account ID" @filter="(val, done) => { accountSearchText = val; done() }" outlined
        v-model="formData.account_id" :options="accountList" map-options option-label="account_name" option-value="id"
        emit-value="" use-input />

      <q-input :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"   dense label="Name"  outlined v-model="formData.name" />
      <q-input :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  dense label="Designation"  outlined v-model="formData.designation" />
      <q-select dense label="Draft" :options="['Draft','Published','Archived']" outlined v-model="formData.status"/>
    </q-form>
    <q-separator class="q-my-md"></q-separator>
    <div class="row q-my-md q-gutter-sm">
      <div>
        <q-btn label="Submit" color="green" unelevated @click="submitData"></q-btn>
      </div>
      <div>
        <q-btn label="Cancel" color="red" unelevated></q-btn>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      formData: {},
      accountSearchText: null ,
       accountList: []
      }
  },
  methods: {
    async submitData() {
      let response = await this.$api.post('/items/contacts', this.formData)
      console.log(response)
    },
    async fetchAccount() {
      let params = {}
      if (this.accountSearchText) {
        params.filter = {
          account_name: {
           "_starts_with": this.accountSearchText
          }
        }
      }
      let response = await this.$api.get('/items/accounts', { params })
      this.accountList = response.data.data
    }

  },
  created() {
    this.fetchAccount()
  }


}
</script>