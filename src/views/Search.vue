<template>
  <div class="search">
    <input  type="text" v-model.lazy="searchQuery" placeholder="author/quotes/tags">
<i class="fa-solid fa-magnifying-glass"></i>
</div>
    <DisplayQuote :quotes="search" v-show="searchQuery!==''"/>
    <div class="pagination">
      <Button v-if="showPreviousButton" @click="getPreviousPage" name="Previous"    :shuffledQuotes="shuffledQuotes" />
      <Button v-if="showNextButton"  @click="getNextPage"  name="Next"    :shuffledQuotes="shuffledQuotes" />
    </div>
      


   

</template>

<script>
import DisplayQuote from "../components/DisplayQuote.vue";
import Button from "../components/Button.vue";

const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');
console.log(previousButton)
// nextButton.addEventListener('click', this.getNextPage);
// previousButton.addEventListener('click', this.getPreviousPage);

export default {


  props:['quotes','programmingQuotes',"shuffledQuotes","paginateQuotes","firstPageQuotes","firstPageProgrammingQuotes","firstPageLifeQuotes","quoteOfTheHour","allQuotes"],
  data() {
    return {
     searchQuery :'',
      searchResults:[],
      authorResults: [],
      tagResults: [],
      quoteResults: [],
      selectedPage:1,
      quotesPerPage:4,
      quotesChunk:[],
      showPreviousButton:false,
      showNextButton:false,
      totalPages:0,
    };
  },
  mounted(){

  },
  methods:{
  getSearchResultsPage(page) {
    console.log(page)
  this.selectedPage = page;
  console.log(`SELECTED PAGE${this.selectedPage} TOTAL PAGES:${this.totalPages}`)

  const start = (page - 1) * this.quotesPerPage; // 0
  const end = page * this.quotesPerPage; // 4

  const quotesInCurrentPage = this.searchResults.slice(start, end);
  this.displayButtons();
  return quotesInCurrentPage;
},
getNextPage(){
console.log("next")
//return this.getSearchResultsPage(2);
console.log(this.getSearchResultsPage(this.selectedPage+1));
console.log(`END`);
},
getPreviousPage(){
console.log("previous")
console.log(this.getSearchResultsPage(this.selectedPage-1));


},
displayButtons(){
 if(Math.ceil(this.totalPages)>this.selectedPage) this.showNextButton = true;
  else this.showNextButton = false;
  if(this.selectedPage>1 && this.selectedPage <= Math.ceil(this.totalPages)) this.showPreviousButton = true;
  else this.showPreviousButton = false;
}
  },
  computed:{
    search(){
      console.log("search")
     
      if(this.searchQuery!==''){
       this.authorResults = this.allQuotes.filter(quote => quote.author?.toLowerCase().includes(this.searchQuery.toLowerCase()));
     
      this.quoteResults = this.allQuotes.filter(quote => quote.text?.toLowerCase()?.includes(this.searchQuery.toLowerCase()) ?? quote.en?.toLowerCase().includes(this.searchQuery.toLowerCase()) ?? quote.content?.toLowerCase().includes(this.searchQuery.toLowerCase()));
      
      this.tagResults = this.allQuotes.filter(quote => quote.tags?.some(el => el.includes(this.searchQuery.toLowerCase())))

      this.searchResults = [...this.authorResults,...this.quoteResults,...this.tagResults];
      this.totalPages = this.searchResults.length/this.quotesPerPage;
      return this.getSearchResultsPage(this.selectedPage);
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
