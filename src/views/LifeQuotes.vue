<template>
  <DisplayQuote :quotes="firstPageLifeQuotes" />
  <div class="more-button">
  <Button name="More Life Quotes"    :shuffledQuotes="shuffledQuotes" />

  </div>
</template>

<script>
import DisplayQuote from "../components/DisplayQuote.vue";
import Button from "../components/Button.vue";


export default {
  props:['quotes','programmingQuotes',"shuffledQuotes","paginateQuotes","firstPageQuotes","firstPageProgrammingQuotes","firstPageLifeQuotes","quoteOfTheHour","allQuotes"],
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
