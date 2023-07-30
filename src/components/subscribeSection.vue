<template>
  <section class="subscribe__section padding-site">
    <div class="subscribe-carousel">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators subscribe-carousel__pagiblock">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active hover"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="hover"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="hover"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <figure class="subscribe-carousel__slide">
              <img src="../assets/imgs/avatar.png" alt="avatar" />
              <figcaption class="subscribe-carousel__content">
                <p class="subscribe-carousel__quote">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p class="subscribe-carousel__author">
                  Bin Burhan
                </p>
                <p class="subscribe-carousel__location">
                  Dhaka, Bd
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure class="subscribe-carousel__slide">
              <img src="../assets/imgs/avatar.png" alt="avatar" />
              <figcaption class="subscribe-carousel__content">
                <p class="subscribe-carousel__quote">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p class="subscribe-carousel__author">
                  Bin Burhan
                </p>
                <p class="subscribe-carousel__location">
                  Dhaka, Bd
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure class="subscribe-carousel__slide">
              <img src="../assets/imgs/avatar.png" alt="avatar" />
              <figcaption class="subscribe-carousel__content">
                <p class="subscribe-carousel__quote">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p class="subscribe-carousel__author">
                  Bin Burhan
                </p>
                <p class="subscribe-carousel__location">
                  Dhaka, Bd
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="subscribe__form">
      <h2>subscribe</h2>
      <h3>FOR OUR NEWLETTER AND PROMOTION</h3>
      <form action="#">
        <input
          type="email"
          id="subscribe__email"
          placeholder="Enter Your Email"
        />
        <button type="submit" class="hover">Subscribe</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'subscribeSection',
};
</script>

<style lang="scss">

@import '../layout/styles/_variables.scss';

.subscribe {
  &__section {
    height: 438px;
    width: 100%;
    background-image: url(../assets/imgs/subscribe-wrapper.png), url(../assets/imgs/subscribe.png);
    padding-top: 110px;
    display: flex;
  }

  &-carousel {
    width: 50%;

    &__slide {
      display: flex;
      img {
        height: fit-content;
      }
    }

    &__content {
      margin-top: 12px;
      margin-left: 28px;
      width: 420px;
    }

    &__quote {
      font-size: 16px;
      font-style: italic;
      color: #222224;
      line-height: 26px;
      margin-bottom: 16px;
    }

    &__author {
      font-size: 16px;
      font-weight: bold;
      color: $colorOfElements;
      margin-bottom: 3px;
    }

    &__location {
      font-size: 12px;
      font-weight: 300;
      color: #222224;
    }

    &__pagiblock {
      top: 170px;
      margin: 0 105px;
      justify-content: flex-start;
      button {
        height: 4px;
        width: 38px;
        margin: 0 6px;
        background-color: white;
      }
      .active {
        background-color: $colorOfElements;
      }
    }
  }

  &__form {
    margin-top: 37px;
    width: 50%;

    h2 {
      font-size: 24px;
      color: #222224;
      text-align: center;
      text-transform: uppercase;
    }

    h3 {
      font-size: 14px;
      color: #222224;
      text-align: center;
    }

    form {
      margin-top: 30px;
      display: flex;
      justify-content: center;

      input[type='email'] {
        height: 46px;
        width: 282px;
        background-color: #e1e1e1;
        border-radius: 23px 0 0 23px;
        font-size: 14px;
        color: #222224;
        line-height: 46px;
        padding-left: 28px;
      }

      button {
        height: 46px;
        width: 104px;
        background-color: $colorOfElements;
        border-radius: 0px 23px 23px 0px;
        font-size: 14px;
        color: #ffffff;
        text-align: center;
        line-height: 46px;
      }
    }
  }
}

</style>
