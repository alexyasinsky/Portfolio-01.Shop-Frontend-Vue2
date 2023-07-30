<template>
  <footer>
    <nav class="f-link__section padding-site">
      <div class="f-link__left">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/imgs/logo.png" alt="logo"/>
          </router-link>
          <p>bran<span>d</span></p>
        </div>
        <p class="f-link__desc">
          Objectively transition extensive data rather than cross functional
          solutions. Monotonectally syndicate multidisciplinary materials before
          go forward benefits. Intrinsicly syndicate an expanded array of
          processes and cross-unit partnerships.
        </p>
        <p class="f-link__desc">
          Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies.
          Dynamically optimize.
        </p>
      </div>
      <div class="f-link__right">
        <div class="f-link__column">
          <h3>Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="f-link__column">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Tearms & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">How to Buy</a></li>
            <li><a href="#">How to Sell</a></li>
            <li><a href="#">Promotion</a></li>
          </ul>
        </div>
        <div class="f-link__column">
          <h3>Shop Category</h3>
          <ul>
            <li><a href="/catalog">Men</a></li>
            <li><a href="/catalog">Women</a></li>
            <li><a href="/catalog">Child</a></li>
            <li><a href="/catalog">Apparel</a></li>
            <li><a href="/catalog">Brows All</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="copyright padding-site">
      <div class="copyright__leftbox">
        <p>&copy; 2021 Brand All Rights Reserved.</p>
      </div>
      <div class="copyright__rightbox">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-pinterest-p"></i></a>
        <a href="#"><i class="fab fa-google-plus-g"></i></a>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'myFooter',
};
</script>

<style lang="scss">

@import '../layout/styles/_variables.scss';
footer {
  height: 540px;
  margin-top: -540px;

  .f-link {
    &__section {
      height: 460px;
      padding-top: 110px;
      display: flex;
    }

    &__left {
      width: 430px;
    }

    &__desc {
      margin-top: 29px;
      font-size: 14px;
      font-weight: 300;
      color: #898989;
      line-height: 24px;
    }

    &__right {
      display: flex;
    }

    &__column {
      margin-left: 60px;
      width: 160px;

      h3 {
        font-size: 18px;
        font-weight: bold;
        color: #f16d7f;
        text-transform: uppercase;
        margin-bottom: 55px;
      }

      a {
        font-family: 'Lato';
        font-size: 16px;
        color: #898989;
        line-height: 40px;
        &:hover {
          color: $colorOfElements;
        }
      }
    }
  }

  .copyright {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e6e6e6;
    font-size: 16px;
    &__leftbox {
      color: #7a7a7a;
    }
    &__rightbox {
      display: flex;
      a {
        display: block;
        height: 32px;
        width: 32px;
        line-height: 32px;
        text-align: center;
        background-color: #ffffff;
        color: #b2b2b2;
        margin-left: 8px;
        &:hover {
          background-color: $colorOfElements;
        }
      }
    }
  }
}
</style>
