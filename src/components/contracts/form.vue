<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Contracts</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input dense label="Id"  :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"   outlined v-model="formData.id"/>
        <q-input dense label="Name" :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  outlined v-model="formData.name"/>
        <q-input dense label="Account" :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  outlined v-model="formData.account"/>
        <q-input dense label="Rent Per Month" :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  outlined v-model="formData.rent_per_month"/>
        <q-select standout="bg-teal text-white" :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  v-model="formData.fuel" :options="['including','excluding']" label="Fuel" />
        <q-input dense label="Date Created" :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  type="date" outlined v-model="formData.date_created"/>
        <q-toggle dense label="Is Tax Included" :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  v-model="formData.is_tax_included"></q-toggle>
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
    data () {
    return {
formData:{}
    }
  },
  methods: {
    async submitData () {
      

      let response = await this.$api.post('/items/contracts', this.formData)
      console.log(response)
        }
  },

  }
  </script>