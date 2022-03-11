<template>
  <div class="displayQuote">
    <ul>
      <li v-for="quote in quotes" :key="(quote.text || quote.en || quote.content)">
        " {{ quote.text ? quote.text:quote.en}}{{ quote.content ? quote.content:''}} " 
        <div class ="author">{{ quote.author==null ? "Unknown" :quote.author}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DisplayQuote",
  props: ["quotes"],
};
</script>

<style></style>
