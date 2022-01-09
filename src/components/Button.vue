<template>
  <button v-on="this.name.includes('More') ?{ click:this.moreQuotes} : {}">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["name","shuffledQuotes"],
  data(){
    return {
      
    }
  },
  methods:{
    moreQuotes(){
    if(this.name === 'More Quotes') this.shuffledQuotes('quotes');
    else if (this.name === 'More Programming Quotes') this.shuffledQuotes('programming Quotes');
    else this.shuffledQuotes('life Quotes');
  },
}
}
</script>
