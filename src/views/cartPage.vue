<template>
  <div>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:title>
        Cart
      </template>
    </breadcrumbs>
    <section class="cart padding-site">
      <div class="carttable">
        <div class="carttable__row carttable__row_header">
          <div class="carttable__col">Product Details</div>
          <div class="carttable__col">unit Price</div>
          <div class="carttable__col">Quantity</div>
          <div class="carttable__col">shipping</div>
          <div class="carttable__col">Subtotal</div>
          <div class="carttable__col">ACTIOn</div>
        </div>
        <item
          v-for="item in items"
          type="cartPage"
          :item="item"
          :key="item.id"
          @remove="deleteCartItem(item)"
        />
      </div>
      <div class="cart__buttonbox">
        <button type="button" class="cart__button hover">
          cLEAR SHOPPING CART
        </button>
        <button type="button" class="cart__button hover">
          cONTINUE sHOPPING
        </button>
      </div>
      <div class="cart__forms-and-total">
        <form action="#">
          <h4>Shipping Adress</h4>
          <div class="select">
            <select name="shipping-contry" id="shipping-contry">
              <option value="bangladesh">Bangladesh</option>
              <option value="russia">Russia</option>
            </select>
          </div>
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Postcode / Zip" />
          <button type="submit" class="hover">Get a Quote</button>
        </form>
        <form action="#">
          <h4>Coupon Discount</h4>
          <p>Enter your coupon code if you have one</p>
          <input type="text" placeholder="State" />
          <button type="submit" class="hover">Apply Coupon</button>
        </form>
        <div class="cart__total">
          <h5>Sub Total <span>${{ totalSumOfCart }}</span></h5>
          <h3>Grand Total <span>${{ totalSumOfCart }}</span></h3>
          <button type="button" class="hover">
            <router-link to="/checkout">Proceed to checkout</router-link>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';
import item from '../components/item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'cartPage',
  components: {
    item,
    breadcrumbs,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters([
      'showCartItems',
      'totalSumOfCart'
    ]),
    items() {
      return this.showCartItems;
    },
  },

  mounted() {
    this.getCartData();
  },

  methods: {
    ...mapActions(['getCartData', 'deleteCartItem']),
  },
};
</script>

<style lang="scss">
@import '../layout/styles/_variables.scss';

.cart {
  padding-top: 90px;

  table {
    width: 1140px;
    margin-bottom: 44px;

    thead {
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 20px;

      td {
        font-size: 13px;
        font-weight: bold;
        color: #222222;
        letter-spacing: -0.01em;
        line-height: 20px;
        text-transform: uppercase;
        text-align: center;
      }

      td:first-child {
        text-align: left;
      }

      td:last-child {
        text-align: right;
      }
    }
  }

  &__buttonbox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 63px;
  }

  &__button {
    height: 50px;
    width: 235px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  &__forms-and-total {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;

    form {
      width: 360px;

      h4 {
        font-size: 16px;
        font-weight: bold;
        color: #222222;
        text-transform: uppercase;
        margin-bottom: 22px;
      }

      select,
      input {
        height: 45px;
        width: 355px;
        background-color: #ffffff;
        border: 1px solid #eaeaea;
        font-size: 13px;
        font-weight: 300;
        color: #b1b1b1;
        padding: 0 18px;
        margin-bottom: 20px;
      }

      .select {
        position: relative;

        &::after {
          content: '\23F7';
          color: #b1b1b1;
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 1;
          pointer-events: none;
        }
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      button {
        margin-top: 3px;
        height: 35px;
        background-color: #ffffff;
        border: 1px solid #eaeaea;
        font-size: 11px;
        font-weight: 900;
        color: #4a4a4a;
        text-transform: uppercase;
        display: block;
        padding: 0 10px;
      }

      p {
        margin-top: 6px;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 300;
        color: #000000;
      }
    }
  }

  &__total {
    height: 214px;
    width: 360px;
    background-color: #f5f3f3;
    text-align: right;
    padding: 40px;

    h5 {
      font-size: 11px;
      color: #4a4a4a;
      text-transform: uppercase;
      margin-bottom: 14px;

      span {
        margin-left: 10px;
      }
    }

    h3 {
      font-size: 16px;
      font-weight: bold;
      color: #222222;
      text-transform: uppercase;
      margin-bottom: 40px;

      span {
        color: #f16d7f;
        margin-left: 15px;
      }
    }

    button {
      height: 50px;
      width: 100%;
      background-color: #f16d7f;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      a {
        color: #ffffff;
      }
    }
  }
}

.carttable {
  width: 1140px;
  margin-bottom: 44px;

  &__row {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding: 22px 0;
    align-items: center;

    &_header {
      .carttable__col {
        font-size: 13px;
        font-weight: bold;
        color: #222222;
        letter-spacing: -0.01em;
        line-height: 20px;
        text-transform: uppercase;
        text-align: center;
        padding: 0 30px;

        &:first-child {
          text-align: left;
          padding: 0;
          width: 400px;
        }

        &:last-child {
          text-align: right;
          padding: 0;
        }
      }
    }
  }
}
</style>
