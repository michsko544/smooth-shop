<template>
  <div class="socials">
    <a :href="socials.FB_URL">
      <FbIcon class="icon" />
    </a>
    <a :href="socials.TW_URL">
      <TwIcon class="icon" />
    </a>
    <a :href="socials.PIN_URL">
      <PinIcon class="icon" />
    </a>
    <a :href="socials.IG_URL">
      <IgIcon class="icon" />
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import socials from '../constants/socialmedia'
import FbIcon from '../assets/facebook.svg'
import TwIcon from '../assets/twitter.svg'
import PinIcon from '../assets/pinterest.svg'
import IgIcon from '../assets/instagram.svg'
export default Vue.extend({
  name: 'SocialMedia',
  components: {
    FbIcon,
    TwIcon,
    PinIcon,
    IgIcon
  },
  data () {
    return {
      socials
    }
  }
})
</script>
<style lang="scss" scoped>
  .socials{
    display: flex;

    a{
      height: 18px;
      margin-left: 8px;
      opacity: 0.6;

      &:first-child{
        margin-left: 0;
      }
    }

    .icon{
      height: 18px;
      width: 18px;
    }
  }
</style>
