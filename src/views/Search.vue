<template>
  <DisplayQuote :quotes="quoteOfTheHour" />
  
</template>

<script>
import DisplayQuote from "../components/DisplayQuote.vue";
import Button from "../components/Button.vue";


export default {
  props:['quotes','programmingQuotes',"shuffledQuotes","paginateQuotes","firstPageQuotes","firstPageProgrammingQuotes","firstPageLifeQuotes","quoteOfTheHour"],
  data() {
    return {
     
    }
  },
components:{
  DisplayQuote,
  Button
},
}
console.log("home");
</script>

<style></style>
