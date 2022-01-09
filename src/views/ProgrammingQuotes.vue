<template>
  <DisplayQuote :quotes="firstPageProgrammingQuotes" />
    <div class="more-button">
        <Button name="More Programming Quotes"  :shuffledQuotes="shuffledQuotes"/>
    </div>

</template>

<script>
import DisplayQuote from "../components/DisplayQuote.vue";
import Button from "../components/Button.vue";


export default {
  props:['quotes','programmingQuotes',"shuffledQuotes","paginateQuotes","firstPageQuotes","firstPageProgrammingQuotes","firstPageLifeQuotes","quoteOfTheHour"],
  data() {
    return {
    //page:1
    }
  },
components:{
  DisplayQuote,
  Button
},


}
// function init(){
//         console.log("hai")

// //this.paginateQuotes(this.page,this.programmingQuotes);
// };
// init();
//console.log(this.paginateQuotes(this.page,this.programmingQuotes));
//console.log(this.firstPage);

</script>

<style></style>