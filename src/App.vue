<template>
  <div id="app">
    <div class="container">
      <main> 
        <div class="card">
          <h1>Quote App</h1>
          <nav>
            <router-link :to="{ name: 'Home' } "><Button name="Home"  :shuffledQuotes="shuffledQuotes" :class="{ active: isHomeActive }" @click="toggleClasses($event)"
            /></router-link>
            <router-link :to="{ name: 'ProgrammingQuotes' }"
              ><Button name="Programming Quotes"   :shuffledQuotes="shuffledQuotes" :class="{ active: isProgrammingQuotesActive }" @click="toggleClasses($event)"
            /></router-link>
            <router-link :to="{ name: 'LifeQuotes' }"
              ><Button name="Life Quotes"  :shuffledQuotes="shuffledQuotes" :class="{ active: isLifeQuotesActive }" @click="toggleClasses($event)"
            /></router-link>
             <router-link :to="{ name: 'Search' }"
              ><Button name="Search" :shuffledQuotes="shuffledQuotes" :class="{ active: isSearchActive }" @click="toggleClasses($event)"
            /></router-link>
          </nav>
          <router-view :quotes="quotes" :programmingQuotes="programmingQuotes" 
          :shuffledQuotes="shuffledQuotes"  :paginateQuotes="paginateQuotes" 
          :firstPageQuotes ="firstPageQuotes" :firstPageProgrammingQuotes ="firstPageProgrammingQuotes"
          :firstPageLifeQuotes ="firstPageLifeQuotes"  :allQuotes="combinedQuotes" />
        </div>
         <hr />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script>


import "@/scss/style.scss";
import Button from "./components/Button.vue";
import DisplayQuote from "./components/DisplayQuote.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      quotes: [],
      firstPageQuotes:[],
      firstPageProgrammingQuotes:[],
      firstPageLifeQuotes:[],
      programmingQuotes:[],
      lifeQuotes:[],
      combinedQuotes:[],
      isHomeActive:false,
      isProgrammingQuotesActive:false,
      isLifeQuotesActive:false,
      isSearchActive:false,
      countLifeQuoteClicks:0
    };
  },
  methods: {
    shuffledQuotes(collection) {
      console.log(collection)

      if(this.countLifeQuoteClicks>3){
        this.getNextPageLifeQuotes();
      }

      let tempQuotes=[];
       if(collection==="quotes")   tempQuotes =this.quotes ;
       else if(collection==="programming Quotes")  tempQuotes = this.programmingQuotes;
       else   {tempQuotes = this.lifeQuotes;
                this.countLifeQuoteClicks++;
              }

      let currentIndex = tempQuotes.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [tempQuotes[currentIndex], tempQuotes[randomIndex]] = [
          tempQuotes[randomIndex],
          tempQuotes[currentIndex],
        ];
        
      }
      //console.log(tempQuotes)
      if(collection==="quotes" ) this.firstPageQuotes = this.paginateQuotes(1,tempQuotes);
     else if(collection==="programming Quotes") this.firstPageProgrammingQuotes = this.paginateQuotes(1,tempQuotes);
     else this.firstPageLifeQuotes = this.paginateQuotes(1,tempQuotes)


    },
    async getNextPageLifeQuotes(){
      const randomPageNumber = Math.floor((Math.random() *90)+1);
      console.log(randomPageNumber)
      const res = await fetch(`https://quotable.io/quotes?page=${randomPageNumber}`);
      this.lifeQuotes = (await res.json()).results;
      this.shuffledQuotes("lifeQuotes");
      this.firstPageLifeQuotes = this.paginateQuotes(1,this.lifeQuotes);
      this.countLifeQuoteClicks=0;
    },
    toggleClasses(event){

      this.isHomeActive=false;
      this.isSearchActive=false;
      this.isProgrammingQuotesActive=false;
      this.isLifeQuotesActive=false;

      if(event.target.innerHTML=="Home"){
      this.isHomeActive=true;
      } else if(event.target.innerHTML=="Programming Quotes"){
        this.isProgrammingQuotesActive=true;
      } else if(event.target.innerHTML=="Life Quotes"){
        this.isLifeQuotesActive=true;
      } else {
        this.isSearchActive=true;
      }
      //console.log(event.target.innerHTML);
    },
    paginateQuotes(page,tempQuotes){
      const start = (page-1)*5;
      const end = page*5;
       
      return tempQuotes.slice(start,end);
    },
    allQoutes(){
      this.combinedQuotes = [...this.quotes,...this.programmingQuotes,...this.lifeQuotes];
    }
  },
  components: {
    Footer,
    Button,
    DisplayQuote,
  },

  async created() {
    const res = await fetch("https://type.fit/api/quotes");
    this.quotes = await res.json();
    //this.shuffledQuotes("quotes");
    //console.log(this.quotes);
    this.firstPageQuotes = this.paginateQuotes(1,this.quotes);


    const res1 = await fetch("https://programming-quotes-api.herokuapp.com/Quotes");
    this.programmingQuotes = await res1.json();
   // this.shuffledQuotes("programmingQuotes");
    this.firstPageProgrammingQuotes = this.paginateQuotes(1,this.programmingQuotes);

    const res2 = await fetch("https://api.quotable.io/quotes");
    // console.log(res2.json().results);
    this.lifeQuotes = (await res2.json()).results;
    //this.shuffledQuotes("lifeQuotes");
    this.firstPageLifeQuotes = this.paginateQuotes(1,this.lifeQuotes);
  this.allQoutes();
  console.log(this.combinedQuotes);
  },
};
</script>
