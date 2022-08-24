function nume(num){
  display.value +=num
}
function del(){
  display.value = display.value.slice(0, -1)
}
function equal(){
  display.value = eval(display.value)
}
function csl(){
  display.value = null
}
