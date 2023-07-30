<template>
  <main>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:parent>
        <router-link to="/cart">Cart</router-link> /
      </template>
      <template v-slot:title>
        Checkout
      </template>
    </breadcrumbs>
    <section class="checkout padding-site">
      <details open>
        <summary>
          01. Shipping Adress
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          02. Billing Information
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          03. Shipping Information
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover" >Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          04. Shipping Method
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          05. Payment Method
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          06. Order Reviev
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
    </section>
  </main>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';

export default {
  name: 'checkout',
  components: {
    breadcrumbs,
  },
};
</script>

<style lang="scss">

@import '../layout/styles/_variables.scss';


.checkout {
  margin-bottom: 93px;

  summary {
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    text-transform: uppercase;
    padding: 33px 0;
    &::-webkit-details-marker {
      display: none;
    }
  }

  &__formbox {
    padding-bottom: 80px;
    display: flex;

    form {
      width: 400px;
      margin-right: 180px;
    }

    h4 {
      font-size: 13px;
      color: #222222;
      text-transform: uppercase;
      margin: 15px 0 15px;
      font-weight: bold;
      span {
        font-size: 17px;
        color: #ff0d0d;
      }
    }

    p {
      font-size: 13px;
      color: #b3b2b2;
      line-height: 20px;
      margin-bottom: 33px;
    }

    .p {
      &_red {
        margin-top: 22px;
        margin-bottom: 30px;
        font-size: 13px;
        color: #ff0d0d;
        font-weight: bold;
      }
      &_black {
        font-size: 14px;
        color: #222222;
        font-weight: bold;
        margin: 20px 0 0 32px;
      }
    }

    input[type='radio'] {
      display: none;
    }

    label {
      font-size: 12px;
      color: #222222;
      text-transform: uppercase;
      margin-bottom: 20px;
      cursor: pointer;
      padding-left: 27px;
      position: relative;

      &::before {
        content: '';
        width: 14px;
        height: 14px;
        border-radius: 100%;
        border: 2px solid black;
        position: absolute;
        left: 0;
      }
    }

    input[type='radio']:checked + label::after {
      content: '';
      position: absolute;
      left: 4px;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: black;
      top: 4px;
    }

    input[type='text'],
    input[type='password'] {
      height: 45px;
      width: 390px;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      line-height: 30px;
      padding: 0 15px;
    }

    button {
      margin-top: 20px;
      height: 50px;
      width: 180px;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      font-size: 14px;
      font-weight: bold;
      color: #4a4a4a;
      text-transform: uppercase;
    }
  }

  &__list {
    p {
      margin-bottom: 15px;
    }

    margin-bottom: 20px;
  }

  &__button-block {
    display: flex;
    align-items: center;
  }

  &__hl {
    background-color: #e8e8e8;
    height: 1px;
    width: 100%;
  }
}
</style>
