<template>
  <div class="container">
      <img :src="image" alt="smoothie">
      <div class="text">
            <p>{{slogan}}</p>
            <h1>{{title}}</h1>
            <p class="description">{{description}}</p>
            <div>
                <button @click="button1Handler">{{button1Text}}</button>
                <button @click="button2Handler">{{button2Text}}</button>
            </div>
      </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "HeroProduct",
        props: {
            title: String,
            slogan: String,
            description: String,
            button1Text: String,
            button2Text: String,
            button1Handler: ()=>{},
            button2Handler: ()=>{},
            image: Image
        },
        

    })
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
    }

    img{
        width:100%;
        height: calc(100vh - #{$header-height});
        object-fit: cover;
        object-position: center;
    }
</style>