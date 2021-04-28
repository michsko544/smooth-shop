<template>
  <header>
    <div class="menu-slider" style="display:none;">
        <div class="menu-slider-inner">
            <nav>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    </div>
    <nav>
        <div class="contentContainer nav-inner">
            <div>
                <button class="only-mobile">burger</button>
                <ul class="only-desktop">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="logo">Logo</div>
            <div>
                <button>account</button>
                <button>cart</button>
            </div>
        </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "AppHeader",
})
</script>

<style lang="scss" scoped>
    header{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
    }
   
    nav{
        width:100%;
        background: $white;
        height: $header-height;

        ul{
            display: flex;
        }

        .logo{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .nav-inner{
        display: flex;
        justify-content: space-between;
        align-items: center;    
        position: relative;
        height: 100%;
    }

</style>