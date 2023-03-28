<template>
    <div clas="column">
      <div>
        <h6 class="q-ma-none "> Driver</h6>
      </div>
      <q-form class="q-gutter-md">
        <q-input :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  dense label="Id" outlined v-model="formData.id"/>
        <q-input :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  dense label="Driver_Name"  outlined v-model="formData.driver_name"/>
        <q-input :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  dense label="Address" outlined v-model="formData.address"/>
        <q-select :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]"  dense label="Draft" :options="['Draft','Published','Archived']" outlined v-model="formData.status"/>
  
      </q-form>
      <q-separator class="q-my-md"></q-separator>
      <div class="row q-my-md q-gutter-sm">
        <div>
          <q-btn label="Submit" color="green" unelevated  @click="submitData"></q-btn>
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
      

      let response = await this.$api.post('/items/driver', this.formData)
      console.log(response)
        }
  },

  }
  </script>