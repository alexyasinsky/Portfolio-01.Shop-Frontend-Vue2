<template>
  <main>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:parent>
        <router-link to="/catalog">Men</router-link>
        /
      </template>
      <template v-slot:title>
        New Arrivals
      </template>
    </breadcrumbs>
    <section class="catalog padding-site">
      <div class="catalog__left">
        <details open>
          <summary>Category</summary>
          <ul>
            <li><a href="#"> Accessories</a></li>
            <li><a href="#"> Bags</a></li>
            <li><a href="#"> Denim</a></li>
            <li><a href="#"> Hoodies & Sweatshirts</a></li>
            <li><a href="#"> Jackets & Coats</a></li>
            <li><a href="#"> Pants</a></li>
            <li><a href="#"> Polos</a></li>
            <li><a href="#"> Shirts</a></li>
            <li><a href="#"> Shoes</a></li>
            <li><a href="#"> Shorts</a></li>
            <li><a href="#"> Sweaters & Knits</a></li>
            <li><a href="#"> T-Shirts</a></li>
            <li><a href="#"> Tanks</a></li>
          </ul>
        </details>
        <details>
          <summary>Brand</summary>
          <ul>
            <li><a href="#"> Accessories</a></li>
            <li><a href="#"> Bags</a></li>
            <li><a href="#"> Denim</a></li>
            <li><a href="#"> Hoodies & Sweatshirts</a></li>
            <li><a href="#"> Jackets & Coats</a></li>
            <li><a href="#"> Pants</a></li>
            <li><a href="#"> Polos</a></li>
            <li><a href="#"> Shirts</a></li>
            <li><a href="#"> Shoes</a></li>
            <li><a href="#"> Shorts</a></li>
            <li><a href="#"> Sweaters & Knits</a></li>
            <li><a href="#"> T-Shirts</a></li>
            <li><a href="#"> Tanks</a></li>
          </ul>
        </details>
        <details>
          <summary>Designer</summary>
          <ul>
            <li><a href="#"> Accessories</a></li>
            <li><a href="#"> Bags</a></li>
            <li><a href="#"> Denim</a></li>
            <li><a href="#"> Hoodies & Sweatshirts</a></li>
            <li><a href="#"> Jackets & Coats</a></li>
            <li><a href="#"> Pants</a></li>
            <li><a href="#"> Polos</a></li>
            <li><a href="#"> Shirts</a></li>
            <li><a href="#"> Shoes</a></li>
            <li><a href="#"> Shorts</a></li>
            <li><a href="#"> Sweaters & Knits</a></li>
            <li><a href="#"> T-Shirts</a></li>
            <li><a href="#"> Tanks</a></li>
          </ul>
        </details>
      </div>
      <div class="catalog__right">
        <form class="filter">
          <div class="filter__trending">
            <h3 class="filter__name">Trending now</h3>
            <fieldset class="radio">
              <div class="radio__btn">
                <input
                    id="radio-1"
                    type="radio"
                    name="radio"
                    value="Bohemian"
                    checked
                />
                <label for="radio-1">Bohemian</label>
              </div>
              <div class="radio__btn">
                <input id="radio-2" type="radio" name="radio" value="Floral"/>
                <label for="radio-2">Floral</label>
              </div>
              <div class="radio__btn">
                <input id="radio-3" type="radio" name="radio" value="Lace"/>
                <label for="radio-3">Lace</label>
              </div>
              <div class="radio__btn">
                <input id="radio-4" type="radio" name="radio" value="Lace"/>
                <label for="radio-4">Lace</label>
              </div>
              <div class="radio__btn">
                <input id="radio-5" type="radio" name="radio" value="Floral"/>
                <label for="radio-5">Floral</label>
              </div>
              <div class="radio__btn">
                <input
                    id="radio-6"
                    type="radio"
                    name="radio"
                    value="Bohemian"
                />
                <label for="radio-6">Bohemian</label>
              </div>
            </fieldset>
          </div>
          <div class="filter__size">
            <h3 class="filter__name">Size</h3>
            <fieldset>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xxs"/>
                  <label for="xxs">xxs</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="l"/>
                  <label for="l">l</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xs"/>
                  <label for="xs">xs</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xl"/>
                  <label for="xl">xl</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="s"/>
                  <label for="s">s</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xxl"/>
                  <label for="xxl">xxl</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="m"/>
                  <label for="m">m</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="filter__price">
            <h3 class="filter__name">Price</h3>
            <fieldset oninput="userPrice.value=(price.value)" action="#">
              <input
                  type="range"
                  name="range"
                  id="price"
                  max="400"
                  value="100"
              />
              <p>$
                <output name="userPrice" for="price">100</output>
              </p>
            </fieldset>
          </div>
        </form>
        <form action="#" class="selector">
          <div class="selector__variant">
            <label for="sortBy">Sort By</label
            ><select name="sortBy" id="sortBy">
            <option value="name" selected>Name</option>
            <option value="brand">Price</option>
            <option value="name">Popularity</option>
          </select>
          </div>
          <div class="selector__variant">
            <label for="show">Show</label
            ><select name="show" id="show">
            <option value="04" selected>04</option>
            <option value="09">09</option>
            <option value="16">16</option>
          </select>
          </div>
        </form>
        <catalog :limit="9" gender="male"/>
        <div class="catalog__controls">
          <p class="catalog__pages">
            <i class="fas fa-chevron-left"></i>
            &nbsp;
            <a href="#">1</a>
            &nbsp;
            <a href="#">2</a>
            &nbsp;
            <a href="#">3</a>
            &nbsp;
            <a href="#">4</a>
            &nbsp;
            <a href="#">5</a>
            &nbsp;
            <a href="#">6</a>
            &nbsp;...&nbsp;
            <a href="#">20</a>
            &nbsp;
            <i class="fas fa-chevron-right"></i>
          </p>
          <button type="button" class="catalog__button hover">View All</button>
        </div>
      </div>
    </section>
    <section class="feature__section feature__section_catalog padding-site">
      <figure class="feature__figure_catalog">
        <div class="feature__img feature__img_catalog">
          <img src="../assets/imgs/truck.png" alt="truck">
        </div>
        <figcaption class="feature__desc feature__desc_catalog">
          <h4>Free Delivery</h4>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
      <figure class="feature__figure_catalog">
        <div class="feature__img feature__img_catalog">
          <img src="../assets/imgs/discount.png" alt="discount">
        </div>
        <figcaption class="feature__desc feature__desc_catalog">
          <h4>Sales & discounts</h4>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
      <figure class="feature__figure_catalog">
        <div class="feature__img feature__img_catalog">
          <img src="../assets/imgs/crown.png" alt="crown">
        </div>
        <figcaption class="feature__desc feature__desc_catalog">
          <h4>Quality assurance</h4>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
    </section>
  </main>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';
import catalog from "@/components/catalog";

export default {
  name: 'catalogPage',
  components: {
    catalog,
    breadcrumbs,
  },
};
</script>

<style lang="scss">
@import '../layout/styles/_variables.scss';


.catalog {
  display: flex;
  margin-top: 60px;

  &__left {
    width: 243px;
    margin-right: 50px;

    details {
      margin-bottom: 40px;
    }

    summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 11px;
      height: 37px;
      width: 243px;
      border-left: 5px solid $colorOfElements;
      border-bottom: 1px solid #ebebeb;
      font-size: 14px;
      font-weight: bold;
      color: #6f6e6e;
      line-height: 37px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary::after {
      content: '\25B8';
    }

    details[open] summary {
      color: $colorOfElements;
    }

    details[open] > summary::after {
      content: '\25BE';
    }
    ul {
      margin-left: 17px;
    }

    li a {
      font-size: 14px;
      color: #6f6e6e;
      line-height: 33px;
    }
  }

  &__right {
    flex-grow: 1;

    .filter {
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;

      &__name {
        font-size: 14px;
        font-weight: bold;
        color: #6f6e6e;
        text-transform: uppercase;
        margin-bottom: 25px;
      }

      &__trending {
        .radio {
          display: flex;
          width: 180px;
          flex-wrap: wrap;

          &__btn {
            margin-bottom: 15px;

            input[type='radio'] {
              display: none;
            }

            input[type='radio']:checked + label {
              color: $colorOfElements;
            }

            label {
              cursor: pointer;
              font-size: 14px;
              color: #6f6e6e;
              line-height: 14px;
            }

            &:nth-child(3n-1) {
              margin-left: 10px;
              border-left: 1px solid #f0f0f0;
              padding-left: 10px;
              margin-right: 10px;
              border-right: 1px solid #f0f0f0;
              padding-right: 10px;
            }
          }
        }
      }

      &__size {
        fieldset {
          display: flex;
        }

        .checkbox {
          width: 70px;
          margin-bottom: 10px;
        }
        input[type='checkbox'] {
          opacity: 20%;
          margin-right: 9px;
          &:checked {
            opacity: 1;
          }
        }

        label {
          font-size: 14px;
          color: #6f6e6e;
          line-height: 20px;
          text-transform: uppercase;
        }
      }

      &__price {
        #price {
          margin-top: -2px;
          -webkit-appearance: none;
          background-color: #f0f0f0;
          border-radius: 3px;
          height: 6px;
          width: 262px;
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 14px;
            width: 14px;
            background-color: #f16d7f;
            border-radius: 14px;
            cursor: pointer;
          }
        }
        p {
          margin-top: 15px;
          font-size: 14px;
          color: #6f6e6e;
        }
      }
    }

    .selector {
      height: 50px;
      background-color: #f3f3f3;
      display: flex;
      align-items: center;

      &__variant {
        position: relative;
      }

      &__variant::after {
        content: '\25BE';
        position: absolute;
        top: 6px;
        right: 5px;
        z-index: 1;
        pointer-events: none;
      }

      label,
      select {
        height: 30px;
        padding: 0 25px 0 13px;
        font-size: 14px;
        color: #6f6e6e;
        line-height: 26px;
        background-color: #ffffff;
        border: 1px solid #ebebeb;
      }

      label {
        margin-left: 10px;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }
  }

  &__controls {
    display: flex;
    justify-content: space-between;
  }

  &__pages {
    height: 44px;
    width: 261px;
    background-color: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 300;
    line-height: 44px;
    text-align: center;
    word-spacing: 10px;

    i,
    a {
      color: #c4c4c4;
    }

    i:hover,
    a:hover {
      color: $colorOfElements;
    }
  }

  &__button {
    height: 44px;
    width: 150px;
    background-color: #ffffff;
    border: 1px solid #ef5b70;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 300;
    color: #ef5b70;
    line-height: 26px;
  }
}
</style>
