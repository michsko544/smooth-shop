<template>
  <section>
    <PageTitle title="About" />
    <div class="contentContainer">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas excepturi nostrum sapiente fuga cupiditate sed magnam repudiandae. Et quam nulla nihil soluta similique aspernatur ullam adipisci consequuntur eos officia, fuga neque maiores, facilis alias esse ipsa. Perspiciatis ipsum culpa quo voluptatem asperiores sequi soluta consectetur ut saepe fuga! Totam molestiae, pariatur amet est accusantium reprehenderit consequuntur necessitatibus minima! Cumque officia nisi nam harum labore doloremque alias ullam. Animi maiores, reprehenderit repellendus, placeat cumque, nam possimus nisi nihil officia quis quam earum delectus temporibus soluta vel ab natus voluptatum! Eum nisi quam dolore repellat vero ex quaerat nulla, dolorum magnam.</p>
    </div>
    <Cta image="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import PageTitle from '../components/PageTitle.vue'
import Cta from '../components/Cta.vue'

export default Vue.extend({
  components: {
    PageTitle,
    Cta
  }
})
</script>
<style lang="scss" scoped>

</style>
