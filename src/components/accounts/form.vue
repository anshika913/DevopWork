<template>
  <div clas="column">
    <div>
      <h6 class="q-ma-none "> Account</h6>
    </div>
    <q-form class="q-gutter-md">
      <q-input dense label="Id" lazy-rules  :rules="[val => !!val || 'Field is required']" v-model="formData.id" outlined />
      <q-input dense label="Account_name" lazy-rules :rules="[val => (val && val.length > 0) || 'Please type something']"
         outlined v-model="formData.account_name"/>
      <q-input  :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]" dense label="Account Address" type="textarea" outlined v-model="formData.account_address"/>
      <q-input  :rules="[validationMandatory, validationNoSpace , validationContactNo ]" mask="+91XXXXXXXXXX" dense label="Contact number"  outlined v-model="formData.contact_number"/>
      <q-input  :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]" suffix="@gmail.com" dense label="Email" type="email" outlined v-model="formData.email"/>
      <q-input  :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]" dense label="City" outlined v-model="formData.city"/>
      <q-input  :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]" dense label="State" outlined v-model="formData.state"/>
      <q-input  :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]" dense label="Pin Code" type="number" outlined v-model="formData.pin_code"/>
      <q-input   :rules="[validationMandatory, validationNoSpace , validationNoSymbols ]" dense label="country" outlined v-model="formData.country"/>
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
  data () {
  return {
formData:{}
  }
},
methods: {
  async submitData () {
    let response = await this.$api.post('/items/accounts', this.formData)
    console.log(response)
      }
},

}
</script>