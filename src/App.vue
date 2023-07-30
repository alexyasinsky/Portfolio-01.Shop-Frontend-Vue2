<template>
  <div>
    <div class="wrapper">
      <myHeader ref="myHeader"/>
      <naviBar>
        <template v-slot:home>
          <router-link to="/" class="menu__link">Home</router-link>
        </template>
        <template v-slot:men>
          <router-link to="/catalog" class="menu__link">Men</router-link>
        </template>
        <template v-slot:women>
          <router-link to="/catalog" class="menu__link">Women</router-link>
        </template>
        <template v-slot:kids>
          <router-link to="/catalog" class="menu__link">Kids</router-link>
        </template>
        <template #accessories>
          <router-link to="/catalog" class="menu__link">Accessories</router-link>
        </template>
        <template #featured>
          <router-link to="/catalog" class="menu__link">Featured</router-link>
        </template>
        <template #hotDeals>
          <router-link to="/catalog" class="menu__link">Hot Deals</router-link>
        </template>
      </naviBar>

      <router-view />

      <subscribeSection />
      <div class="clr"></div>
    </div>
    <myFooter />
  </div>
</template>

<script>
import myHeader from './components/header.vue';
import myFooter from './components/footer.vue';
import naviBar from './components/naviBar.vue'; // расширение дописываем обязательно, иначе webserver не сработает
import subscribeSection from './components/subscribeSection.vue';

export default {
  name: 'app',
  components: {
    myHeader,
    myFooter,
    naviBar,
    subscribeSection,
  },
};
</script>

<style lang="scss">
@import './layout/styles/_variables.scss';
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  line-height: 1;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.03em;
}

p,
ul,
figure,
.breadcrumb {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none !important;
  &:hover {
    color: $colorOfElements;
  }
}

li {
  list-style-type: none;
}

html,
body {
  padding-left: calc(50% - 800px);
  padding-right: calc(50% - 800px);
  width: 1600px;
  min-height: 100%;
}

body {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
  border: 1px solid rgba(236, 236, 236, 1);
}

.padding-site {
  padding-left: 14.375%;
  padding-right: 14.375%;
}

.wrapper {
  min-height: 100vh;
  padding-bottom: 540px;
}

.hover {
  transition: all 0.5s;
  
  &:hover {
    transform: scale(1.05);
  }
}

.logo {
  display: flex;
  align-items: center;

  a {
    padding-right: 13px;
  }

  p {
    font-size: 27px;
    font-weight: 300;
    color: rgba(34, 34, 34, 1);
    line-height: 32px;
    text-transform: uppercase;

    span {
      color: $colorOfElements;
      font-weight: 900;
    }
  }
}

.button {
  background-color: $colorOfElements;
  font-size: 15px;
  color: #ffffff;
  text-align: center;

  summary {
    line-height: 38px;
  }
}



</style>
