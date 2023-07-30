<template>
  <main>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:parent>
        <router-link to="/catalog">Women</router-link>
        /
      </template>
      <template v-slot:title>
        {{ item.name }}
      </template>
    </breadcrumbs>
    <section id="carouselExampleControls" class="carousel slide single-carousel" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active single-carousel__slide">
          <div class="single-carousel__img">
            <img :src="item.img" alt="product-big">
          </div>
          <div class="single-carousel__desc padding-site">
            <h5>WOMEN COLLECTION</h5>
            <div class="single-carousel__linebox">
              <div class="single-carousel__line"></div>
              <div class="single-carousel__line_red"></div>
              <div class="single-carousel__line"></div>
            </div>
            <h4>{{ item.name }}</h4>
            <p class="single-carousel__text">Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely
              visualize parallel core competencies rather than exceptional portals.</p>
            <div class="single-carousel__md">
              <p>Material:<span>Cotton</span></p>
              <p>Designer:<span>Binburhan</span></p>
            </div>
            <p class="single-carousel__price">${{ item.price }}</p>
            <div class="single-carousel__hl"></div>
            <div class="single-carousel__selectorbox">
              <div class="single-carousel__selector">
                <p>Choose color</p>
                <select name="color" id="color">
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Choose size</p>
                <select name="size" id="size">
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  l
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Quantity</p>
                <input type="number" name="quantity" placeholder='1' id="quantity">
              </div>
            </div>
            <button class='single-carousel__button hover' type="button" @click='addCartItem(item)'>
              <img src="../assets/imgs/cart-red.png" alt="cart-red">
              <p>Add to cart</p>
            </button>
          </div>
        </div>
        <div class="carousel-item single-carousel__slide">
          <div class="single-carousel__img">
            <img src="../assets/imgs/product-big.png" alt="product-big">
          </div>
          <div class="single-carousel__desc padding-site">
            <h5>WOMEN COLLECTION</h5>
            <div class="single-carousel__linebox">
              <div class="single-carousel__line"></div>
              <div class="single-carousel__line_red"></div>
              <div class="single-carousel__line"></div>
            </div>
            <h4>Moschino Cheap And Chic</h4>
            <p class="single-carousel__text">Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely
              visualize parallel core competencies rather than exceptional portals.</p>
            <div class="single-carousel__md">
              <p>Material:<span>Cotton</span></p>
              <p>Designer:<span>Binburhan</span></p>
            </div>
            <p class="single-carousel__price">$561</p>
            <div class="single-carousel__hl"></div>
            <div class="single-carousel__selectorbox">
              <div class="single-carousel__selector">
                <p>Choose color</p>
                <select name="color" id="color">
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Choose size</p>
                <select name="size" id="size">
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  l
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Quantity</p>
                <input type="number" name="quantity" placeholder='1' id="quantity">
              </div>
            </div>
            <button class='single-carousel__button hover' type="button">
              <img src="../assets/imgs/cart-red.png" alt="cart-red">
              <p>Add to cart</p>
            </button>
          </div>
        </div>
        <div class="carousel-item single-carousel__slide">
          <div class="single-carousel__img">
            <img src="../assets/imgs/product-big.png" alt="product-big">
          </div>
          <div class="single-carousel__desc padding-site">
            <h5>WOMEN COLLECTION</h5>
            <div class="single-carousel__linebox">
              <div class="single-carousel__line"></div>
              <div class="single-carousel__line_red"></div>
              <div class="single-carousel__line"></div>
            </div>
            <h4>Moschino Cheap And Chic</h4>
            <p class="single-carousel__text">Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely
              visualize parallel core competencies rather than exceptional portals.</p>
            <div class="single-carousel__md">
              <p>Material:<span>Cotton</span></p>
              <p>Designer:<span>Binburhan</span></p>
            </div>
            <p class="single-carousel__price">$561</p>
            <div class="single-carousel__hl"></div>
            <div class="single-carousel__selectorbox">
              <div class="single-carousel__selector">
                <p>Choose color</p>
                <select name="color" id="color">
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Choose size</p>
                <select name="size" id="size">
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  l
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Quantity</p>
                <input type="number" name="quantity" placeholder='1' id="quantity">
              </div>
            </div>
            <button class='single-carousel__button hover' type="button">
              <img src="../assets/imgs/cart-red.png" alt="cart-red">
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev single-carousel__control" type="button"
              data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-control-next single-carousel__control" type="button"
              data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </section>
    <section class="also">
      <h3>You may like also</h3>
      <catalog :limit="4" gender="female" class="product__box padding-site"/>
    </section>
  </main>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';
import { getItem } from '@/utils/reqs.js';
import { mapActions } from 'vuex';
import Catalog from "@/components/catalog";

export default {
  name: 'single',

  components: {
    Catalog,
    breadcrumbs,
  },

  data() {
    return {
      item: {},
      url: 'https://portfolio-01-shop-backend-node-js.onrender.com',
    }
  },

  methods: {
    ...mapActions([
      'addCartItem',
    ]),
  },

  mounted() {
    getItem(`https://portfolio-01-shop-backend-node-js.onrender.com${this.$route.path}`)
    .then(data => {
      this.item = data;
    });
  }

};
</script>

<style lang="scss">

@import '../layout/styles/_variables.scss';

.single-carousel {
  &__slide {
    text-align: center;
    position: relative;
    padding-bottom: 720px;
  }

  &__img {
    background-color: #f7f7f7;

    img {
      height: 724px;
      width: 597px;
    }
  }

  &__control {
    height: 47px;
    width: 47px;
    background-color: #2a2a2a;
    opacity: 0.15;
    top: 350px;
    i {
      font-size: 24px;
      color: #ffffff;
    }
  }

  &__desc {
    padding: 75px 250px 125px 250px;
    margin-left: 230px;
    margin-right: 230px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    position: absolute;
    z-index: 1;
    top: 680px;

    h5 {
      font-size: 14px;
      font-weight: bold;
      color: #f16d7f;
      margin-bottom: 15px;
    }

    h4 {
      font-size: 18px;
      font-weight: 900;
      color: #4d4d4d;
      text-transform: uppercase;
      margin-bottom: 65px;
    }
  }

  &__linebox {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  &__line {
    background-color: #eaeaea;
    width: 40px;
    height: 1px;

    &_red {
      height: 3px;
      width: 63px;
      background-color: #ef5b70;
    }
  }

  &__text {
    font-size: 14px;
    font-weight: 300;
    color: #5e5e5e;
    line-height: 24px;
    margin-bottom: 30px;
  }

  &__md {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
    p {
      font-size: 14px;
      font-weight: bold;
      color: #b9b9b9;
      margin-left: 22px;
      margin-right: 22px;
      text-transform: uppercase;
      span {
        color: #2f2f2f;
      }
    }
  }

  &__price {
    font-size: 24px;
    font-weight: bold;
    color: #ef5b70;
    margin-bottom: 43px;
  }

  &__hl {
    background-color: #eaeaea;
    width: 100%;
    height: 1px;
  }

  &__selectorbox {
    display: flex;
    justify-content: space-between;
    width: 537px;
    margin: 63px auto 26px;
  }

  &__selector {
    p {
      font-size: 14px;
      font-weight: bold;
      color: #2f2f2f;
      text-align: left;
      margin-bottom: 15px;
      text-transform: uppercase;
    }

    select,
    input[type='number'] {
      height: 35px;
      width: 144px;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      font-size: 13px;
      color: #bcbcbc;
      text-align: left;
      line-height: 24px;
      padding-left: 14px;
      padding-right: 14px;
    }

    input[type='number']::-webkit-input-placeholder {
      font-size: 13px;
      color: #bcbcbc;
      text-align: left;
      line-height: 24px;
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  &__button {
    height: 55px;
    width: 537px;
    background-color: #ffffff;
    border: 1px solid #ef5b70;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      margin-right: 15px;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: #ef5b70;
    }
  }
}

.also {
  padding-top: 115px;

  h3 {
    font-size: 24px;
    font-weight: 900;
    color: #4d4d4d;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 70px;
  }

  .product__img {
    height: 280px;
    width: 261px;
  }
}
</style>
