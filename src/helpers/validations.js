export default {
 validationMandatory (val) {
    return !!val || 'Mandatory Field'
 },
 validationNoSymbols(val){
    return !val.match(/\W/i) || 'Symbols not Allowed'
 },
 validationNoSpace(val){
   return !val.match(/\s/i) || 'Space not Allowed'
},
validationContactNo(val){
   return !(val.length < 13 || val.length > 13) || 'Invalid Contact no'
}
}