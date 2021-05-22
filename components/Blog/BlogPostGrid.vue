<template>
  <div class="blog-post-grid">
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/1'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/2'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/3'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/4'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/5'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/6'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/7'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/8'"
    />
    <BlogPostCard
      title="Cake for the Trip"
      text="The flavor is so smooth, and you can really taste the freshness. It has a delightfully attractive and bright color. It makes any breakfast pop! And, of course, very tasty. I used to only drink Starbucks smoothies, but I found these and now they're my go-to, an absolute favorite. This is a great basic blended smoothie or juice. You need to build your diet on the basics. We like to add this to a breakfast with a spinach omelet and English muffin."
      :tags="['Sweet', 'Idea', 'Tutorial']"
      :link="routes.BLOG_URL + '/9'"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import BlogPostCard from '../BlogPostCard.vue'
import routes from '../../constants/routes'
export default Vue.extend({
  name: 'ProductGrid',
  components: {
    BlogPostCard
  },
  data () {
    return {
      routes
    }
  }
})
</script>
<style lang="scss">
  .blog-post-grid{
    display:grid;
    padding: 24px;
    grid-template-columns: 1fr;
    gap: 32px;
    width: 100%;
  }

  @media(min-width: $mobile){
    .blog-post-grid{
      margin: 64px auto;
      grid-template-columns: repeat(4,1fr);
      padding: 8px;
      gap: 8px;

      &>*:first-child{
        grid-column: 1/-1;
        display: flex;
        flex-direction: row-reverse;

        .img-wrapper, .text-wrapper{
          width: 50%;
        }

        .img-wrapper{
          padding-bottom: 50%;
          padding-left:4px;

          .tags{
            padding: 0 24px !important;
            top: 24px;
            bottom: unset !important;
          }
        }

        .text-wrapper{
          padding: 64px 24px 64px 64px;
          position: relative;

          .metadata-post{
            position: absolute;
            bottom: 0;
            right: 0;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
          }

          h3{
            font-size: 48px;
          }

          p{
            margin-top: 24px;
            overflow: unset;
            text-overflow: initial;
            -webkit-line-clamp: unset;
            -webkit-box-orient: unset;
            font-size: 18px;
            line-height: 36px;;
          }
        }
      }
    }
  }
</style>
