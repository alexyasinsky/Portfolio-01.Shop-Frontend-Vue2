<template>
  <header class=" header padding-site">
    <div class="header__leftbox">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/imgs/logo.png" alt="logo"/>
        </router-link>
        <p>bran<span>d</span></p>
      </div>
      <details class="header__search-config">
        <summary>Browse</summary>
        <div class="menu__mega">
          <div class="menu__megacolumn">
            <ul class="menu__megabox">
              <li>
                <h3>Women</h3>
              </li>
              <li><a href="#">Dresses</a></li>
              <li><a href="#">Tops</a></li>
              <li><a href="#">Sweaters/Knits</a></li>
              <li><a href="#">Jackets/Coats</a></li>
              <li><a href="#">Blazers</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Legging/Pants</a></li>
              <li><a href="#">Skirts/Shorts</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
            <ul class="menu__megabox">
              <li>
                <h3>Men</h3>
              </li>
              <li><a href="#">Tees/Tank tops</a></li>
              <li><a href="#">Shirts/Polos</a></li>
              <li><a href="#">Sweaters</a></li>
              <li><a href="#">Sweatshirts/Hoodies</a></li>
              <li><a href="#">Blazers</a></li>
              <li><a href="#">Jackets/vest</a></li>
            </ul>
          </div>
        </div>
      </details>
      <form class="header__searchfield" action="#">
        <input type="search" id="search" placeholder="Search for Item..." />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
    <div class="header__rightbox">
      <div class="cartdrop">
        <button @click='showCart = !showCart' class="cartdrop__showButton"></button>
        <!-- cartdrop__box -->
        <cart  v-show="showCart" ref="myCart">
          <template v-slot:checkout>
            <router-link to="/checkout">Checkout</router-link>
          </template>
          <template v-slot:cart>
            <router-link to="/cart">Go to Cart</router-link>
          </template>
          </cart>
      </div>
      <button class="header__button button hover">
        My Account<i class="fas fa-caret-right"></i>
      </button>
    </div>
  </header>
</template>

<script>
import cart from '../components/cart.vue';

export default {
  name: 'myHeader',
  components: {
    cart, // краткая запись объявления компонента
  },

  data() {
    return {
      showCart: false,
      cartQuantity: null,
    }
  }
}


</script>

<style lang="scss">

@import '../layout/styles/_variables.scss';

.header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #ececec;

  &__leftbox {
    display: flex;
    align-items: center;
  }

  &__search-config {
    margin-left: 37px;
    height: 38px;
    width: 87px;
    background-color: rgba(245, 245, 245, 1);
    border: 1px solid rgba(230, 230, 230, 1);

    summary {
      font-size: 14px;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      line-height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary::after {
      content: '\25B8';
      margin-left: 4px;
    }

    &[open] > summary::after {
      content: ' \25BE';
      margin-left: 4px;
    }

    .menu__mega {
      z-index: 10;
    }
  }

  &__searchfield {
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 0 3px 3px 0;
    height: 38px;
    width: 317px;
    display: flex;

    input[type='search'] {
      margin-left: -1px;
      width: 100%;
      height: 100%;
      padding: 0 15px;
      font-size: 14px;
      font-weight: 300;
      line-height: 32px;

      &::placeholder {
        color: #a4a4a4;
      }
    }

    button {
      width: 42px;
      color: rgba(164, 164, 164, 1);
      border-left: 1px solid #e6e6e6;
      background-color: white;
    }
  }

  &__rightbox {
    display: flex;
    align-items: center;
  }



  &__button {
    height: 38px;
    width: 130px;
    i {
      margin-left: 7px;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary::after {
      content: '\25BC';
      color: white;
      margin-left: 8px;
    }

    &[open] > summary::after {
      content: '\25B2';
      color: white;
      margin-left: 8px;
    }
  }
}

</style>