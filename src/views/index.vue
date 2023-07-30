<template>
      <main>
        <section class="banner padding-site">
          <div class="banner__text">
            <h1>THE BRAND</h1>
            <p>OF LUXERIOUS <span>FASHION</span></p>
          </div>
        </section>
        <section class="category__section padding-site">
          <div class="category__column">
            <router-link to="/catalog">
              <div class="category category_men">
                <div class="category__text">
                  <h3>Hot deal</h3>
                  <h2>For men</h2>
                </div>
              </div>
            </router-link>
            <router-link to="/catalog">
              <div class="category category_accessories">
                <div class="category__text">
                  <h3>Luxurious & Trendy</h3>
                  <h2>Accessories</h2>
                </div>
              </div>
            </router-link>
          </div>
          <div class="category__column">
            <router-link to="/catalog">
              <div class="category category_women">
                <div class="category__text">
                  <h3>30% Offer</h3>
                  <h2>Women</h2>
                </div>
              </div>
            </router-link>
            <router-link to="/catalog">
              <div class="category category_kids">
                <div class="category__text">
                  <h3>New arrivals</h3>
                  <h2>For Kids</h2>
                </div>
              </div>
            </router-link>
          </div>
        </section>
        <section class="product__section padding-site">
          <h2>Fetured Items</h2>
          <h3>Shop for items based on what we featured in this week</h3>
          <!-- product__box -->
          <catalog @add="addCartItem" :limit="8"/>
          <button
            @click="browseAllButtonHandler"
            class="product__button hover"
          >
           Browse all product <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </section>
        <section class="feature__section feature__section_index padding-site">
          <div class="feature__left">
            <h2>30% <span>Offer</span></h2>
            <h3>FOR WOMEN</h3>
          </div>
          <div class="feature__right">
            <figure class="feature__figure_index">
              <div class="feature__img feature__img_index">
                <img src="../assets/imgs/truck.png" alt="truck" />
              </div>
              <figcaption class="feature__desc feature__desc_index">
                <h4>Free Delivery</h4>
                <p>
                  Worldwide delivery on all. Authoritatively morph
                  next-generation innovation with extensive models.
                </p>
              </figcaption>
            </figure>
            <figure class="feature__figure_index">
              <div class="feature__img feature__img_index">
                <img src="../assets/imgs/discount.png" alt="discount" />
              </div>
              <figcaption class="feature__desc feature__desc_index">
                <h4>Sales & discounts</h4>
                <p>
                  Worldwide delivery on all. Authoritatively morph
                  next-generation innovation with extensive models.
                </p>
              </figcaption>
            </figure>
            <figure class="feature__figure_index">
              <div class="feature__img feature__img_index">
                <img src="../assets/imgs/crown.png" alt="crown" />
              </div>
              <figcaption class="feature__desc feature__desc_index">
                <h4>Quality assurance</h4>
                <p>
                  Worldwide delivery on all. Authoritatively morph
                  next-generation innovation with extensive models.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
</template>

<script>
import catalog from '../components/catalog.vue';
import {mapActions} from "vuex";

export default {
  name: 'index',
  components: {
    catalog: catalog, // полная запись объявления компонента
  },
methods: {
    ...mapActions([
        'addCartItem'
    ]),
    browseAllButtonHandler(){
      this.$router.push('/catalog');
    }
    // addItem(item) {
    //   this.$root.$children[0].$refs.myHeader.$refs.myCart.add(item);
    // }
}
};
</script>

<style lang="scss">

@import '../layout/styles/_variables.scss';
.banner {
  height: 613px;
  width: 100%;
  background-image: url(../assets/imgs/banner.png);
  background-position-y: -52px;
  padding-top: 224px;

  &__text {
    border-left: 12px solid $colorOfElements;
    padding-left: 12px;

    h1 {
      font-size: 60px;
      font-weight: 900;
      color: #222222;
      margin-bottom: 10px;
      line-height: 45px;
    }

    p {
      font-size: 40px;
      font-weight: 900;
      color: #222222;
      line-height: 30px;

      span {
        color: $colorOfElements;
      }
    }
  }
}

.category {
  &__section {
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
  }

  &__column {
    width: 560px;
  }

  &_men {
    height: 542px;
    background-image: url(../assets/imgs/category-men.png);
  }

  &_accessories {
    margin-top: 20px;
    height: 261px;
    background-image: url(../assets/imgs/category-accessories.png);
  }

  &_women {
    height: 261px;
    background-image: url(../assets/imgs/category-women.png);
  }

  &_kids {
    margin-top: 20px;
    height: 542px;
    background-image: url(../assets/imgs/category-kids.png);
  }

  &__text {
    background-color: white;
    padding: 19px;
    width: fit-content;

    h3 {
      font-size: 18px;
      font-weight: 900;
      color: #222222;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 30px;
      font-weight: 900;
      color: $colorOfElements;
      text-transform: uppercase;
    }
  }

  padding-top: 25px;
}

.feature {
  &__section {
    display: flex;
    height: fit-content;
    margin-top: 110px;
    &_index {
      margin-bottom: 97px;
    }
    &_catalog {
      background-color: #222224;
      justify-content: space-around;
    }
  }

  &__left {
    background-image: url(../assets/imgs/feature-wrapper.png), url(../assets/imgs/feature.png);
    background-repeat: no-repeat;
    height: 529px;
    width: 767px;
    background-color: #222224;
    padding: 146px 39px;

    h2 {
      font-size: 54px;
      font-weight: bold;
      color: #ffffff;
      text-transform: uppercase;

      span {
        color: $colorOfElements;
      }
    }

    h3 {
      font-size: 32px;
      font-weight: bold;
      color: #ffffff;
    }
  }

  &__right {
    padding: 40px 30px 10px 30px;
    background-color: #222224;
  }

  &__figure {
    &_index {
      display: flex;
      margin: 0 0 5px 0;
    }
    &_catalog {
      width: 320px;
      text-align: center;
      padding-top: 90px;
      padding-bottom: 60px;
    }
  }

  &__img {
    width: 45px;
    &_index {
      height: min-content;
    }
    &_catalog {
      height: 65px;
      margin: 0 auto;
    }
  }

  &__desc {
    &_index {
      margin-left: 30px;
      width: 230px;
      padding-bottom: 15px;
    }

    &_catalog {
      p {
        min-height: 93px;
      }
    }

    h4 {
      font-size: 20px;
      font-weight: bold;
      color: #fbfbfb;
      margin-bottom: 20px;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      color: #fbfbfb;
      line-height: 24px;
      overflow: hidden;
    }
  }
}

</style>
