<template>
  <div class="post-card">
    <NuxtLink :to="link" class="img-wrapper">
      <img :src="image" :alt="imageAlt">
      <div class="tags">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </NuxtLink>
    <NuxtLink :to="link" class="text-wrapper">
      <div class="metadata-post">
        Post by
        <span class="author">{{ author }}</span>
        <span class="date">{{ createdAt }}</span>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'BlogPostCard',
  props: {
    title: {
      type: String,
      default: 'Default title',
      required: true
    },
    text: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in voluptatem similique, dolore laboriosam fuga rerum! At eius officiis dolorem.',
      required: false
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => ([]),
      required: true
    },
    link: {
      type: String,
      default: '#',
      required: true
    },
    imageAlt: {
      type: String,
      default: 'blog-post',
      required: false
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      required: false
    },
    author: {
      type: String,
      default: 'John Doe',
      required: false
    },
    createdAt: {
      type: String,
      default: new Date().toDateString(),
      required: false
    }
  }
})
</script>
<style lang="scss" scoped>
  .post-card{
    width: 100%;

    .img-wrapper{
      display:block;
      position: relative;
      width: 100%;
      padding-bottom: 100%;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }

      .tags{
        position: absolute;
        bottom: 0;
        left: 0;
        display:flex;
        flex-wrap: wrap;
        padding: 0 8px;

        &>span{
          margin-right: 8px;
          margin-bottom: 8px;
          background: $white;
          padding: 4px 8px;
          font-size: 14px;
          text-transform: uppercase;
        }
      }
    }

    .text-wrapper{
      padding: 8px;
      display:block;

      .metadata-post{
        font-size: 14px;
        color: $gray;
        margin: 8px auto 12px;

        &>*{
          color: $black;
        }

        .author {
          &::after{
            content: "•";
            padding: 0 2px 0 6px;
          }
        }
      }

      h3 {
        font-size: 24px;
        margin-bottom: 12px;
      }

      p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        margin-bottom: 12px;
      }
    }
  }
</style>
