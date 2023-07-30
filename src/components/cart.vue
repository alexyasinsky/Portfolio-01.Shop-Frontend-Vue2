<template>
  <div class="cartdrop__box">
    <item 
      v-for="item in items" 
      type="cart" 
      :item="item" 
      :key="item.id" 
      @remove="removeCartItem(item)"
    />
    <p class="cartdrop__message" v-if="items.length == 0">Корзина пуста</p>
    <div class="cartdrop__total">
      <p>Total</p>
      <p>${{ totalSumOfCart }}</p>
    </div>
    <button
      class="cartdrop__button cartdrop__button_red hover"
      @click="$parent.showCart = !$parent.showCart"
    >
      <slot name="checkout"></slot>
    </button>
    <button
      class="cartdrop__button hover"
      @click="$parent.showCart = !$parent.showCart"
    >
      <slot name="cart"></slot>
    </button>
  </div>
</template>

<script>
import item from './item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'cart',
  components: {
    item,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters([
      'showCartItems',
      'totalSumOfCart',

    ]),
    items() {
      return this.showCartItems;
    },
  },

  mounted() {
    this.getCartData();
  },

  methods: {
    ...mapActions([
      'getCartData',
      'removeCartItem'
      ]),
  },
};
</script>

<style lang="scss">
@import '../layout/styles/_variables.scss';

.cartdrop {
  position: relative;

  &__message {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  &__showButton {
    height: 30px;
    width: 30px;
    background-color: white;
    background-image: url(../assets/imgs/cart.png);
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 10px;
    margin-right: 25px;
  }

  img {
    height: 30px;
    margin-top: 8px;
    margin-right: 26px;
  }

  &__box {
    position: absolute;
    top: 39px;
    width: 262px;
    height: fit-content;
    z-index: 3;
    background-color: #fff;
    padding: 35px 15px 20px;
  }

  &__product {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    a {
      padding: 0;
    }

    img {
      height: 85px;
      width: 72px;
      margin: 0;
    }

    &-desc {
      margin-left: 15px;
      max-width: 100px;
      overflow: hidden;

      h4 {
        font-size: 12px;
        font-weight: bold;
        color: #222222;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
    }

    &-rate {
      font-size: 12px;
      color: #e4af48;
      margin-bottom: 12px;
    }

    &-pq {
      font-size: 12px;
      color: $colorOfElements;
      word-spacing: 5px;
    }

    &-cancel {
      flex-grow: 1;

      button {
        font-size: 16px;
        color: #c0c0c0;
        float: right;
      }
    }
  }

  &__total {
    margin-top: 5px;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__button {
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    height: 50px;
    width: 100%;
    border: 1px solid black;
    background-color: white;
    a {
      color: black;
      display: block;
      line-height: 50px;
      &:hover {
        color: black;
      }
    }

    &_red {
      border: 1px solid $colorOfElements;
      a {
        color: $colorOfElements;
        &:hover {
          color: $colorOfElements;
        }
      }
    }
  }
}
</style>
