<template>
  <div class="search">
    <input  type="text" v-model.lazy="searchQuery" placeholder="author/quotes/tags">
<i class="fa-solid fa-magnifying-glass"></i>
</div>
    <DisplayQuote :quotes="search" v-show="searchQuery!==''"/>
   

</template>

<script>
import DisplayQuote from "../components/DisplayQuote.vue";
import Button from "../components/Button.vue";


export default {

  props:['quotes','programmingQuotes',"shuffledQuotes","paginateQuotes","firstPageQuotes","firstPageProgrammingQuotes","firstPageLifeQuotes","quoteOfTheHour","allQuotes"],
  data() {
    return {
     searchQuery :'',
      searchResults:[],
      authorResults: [],
      tagResults: [],
      quoteResults: [],
    };
  },
  mounted(){

  },
  computed:{
    search(){
      // console.log(this.allQuotes)
      // console.log(this.allQuotes.filter(quote => quote.author?.toLowerCase().includes(this.searchQuery.toLowerCase())))
      if(this.searchQuery!==''){
      //   this.authorResults = this.allQuotes.filter(quote => quote.author== this.capitalizeFirstLetter(this.searchQuery))
       this.authorResults = this.allQuotes.filter(quote => quote.author?.toLowerCase().includes(this.searchQuery.toLowerCase()));
      //this.searchResults = this.allQuotes.filter(quote => quote.author?.toLowerCase().includes(this.searchQuery.toLowerCase()))
       
      console.log(`AUTHOR:${this.authorResults}`)

      this.quoteResults = this.allQuotes.filter(quote => quote.text?.toLowerCase()?.includes(this.searchQuery.toLowerCase()) ?? quote.en?.toLowerCase().includes(this.searchQuery.toLowerCase()) ?? quote.content?.toLowerCase().includes(this.searchQuery.toLowerCase()));
     //this.searchResults =  this.allQuotes.filter(quote => quote.text?.toLowerCase()?.includes(this.searchQuery.toLowerCase()) ?? quote.en?.toLowerCase().includes(this.searchQuery.toLowerCase()) ?? quote.content?.toLowerCase().includes(this.searchQuery.toLowerCase()))
      
      console.log(`QUOTES:${this.quoteResults}`)

      this.tagResults = this.allQuotes.filter(quote => quote.tags?.some(el => el.includes(this.searchQuery.toLowerCase())))
            console.log(`TAGS:${this.tagResults}`)

      this.searchResults = [...this.authorResults,...this.quoteResults,...this.tagResults];
      this.searchResults.forEach(el=> console.log(el));
      return this.searchResults;
      }
    },
  },
components:{
  DisplayQuote,
  Button
},
}
</script>

<style></style>
