import { get, post, put, del } from '../../utils/reqs.js';

export default {

  state: () => ({
    items: [],
    url: 'https://portfolio-01-shop-backend-node-js.onrender.com/cart',
  }),

  mutations: {
    SET_CART_DATA (state, data) {
      state.items = [...data];
    },
    POST_NEW_CART_ITEM (state, item) {
      state.items.push(item);
    },
    INCREASE_QTY_OF_ITEM (state, item) {
      state.items[state.items.indexOf(item)].quantity += 1;
    },
    DECREASE_QTY_OF_ITEM (state, item) {
      state.items[state.items.indexOf(item)].quantity -= 1;
    },
    DELETE_CART_ITEM (state, item) {
      state.items.splice(state.items.indexOf(item), 1);
    }
  },

  actions: {
    getCartData({ commit, state }) {
      get(state.url).then((cart) => {
        commit('SET_CART_DATA', cart.content);
      });
    },
    addCartItem({ commit, state }, item) {
      let find = state.items.find((el) => el.id == item.id);
      if (!find) {
        let newItem = Object.assign({}, item, { quantity: 1 });
        post(state.url, newItem).then((res) => {
          if (res.status) {
            commit('POST_NEW_CART_ITEM', newItem);
          } else {
            console.log('Server err');
          }
        });
      } else {
        put(`${state.url}/${item.id}`, 1).then((res) => {
          if (res.status) {
            commit('INCREASE_QTY_OF_ITEM', find);
          } else {
            console.log('Server err');
          }
        });
      }
    },
    removeCartItem({ commit, state }, item) {
      let find = state.items.find((el) => el.id == item.id);
      if (find.quantity > 1) {
        put(`${state.url}/${item.id}`, -1).then((res) => {
          if (res.status) {
            commit('DECREASE_QTY_OF_ITEM', find);
          } else {
            console.log('Server err');
          }
        });
      } else {
      del(`${state.url}/${item.id}`)
        .then((res) => {
          if (res.status) {
            commit('DELETE_CART_ITEM', find);
          } else {
            console.log('Server err');
          }
        });
      }
    },
    deleteCartItem({ commit, state }, item) {
      let find = state.items.find((el) => el.id == item.id);
      del(`${state.url}/${item.id}`)
      .then((res) => {
        if (res.status) {
          commit('DELETE_CART_ITEM', find);
        } else {
          console.log('Server err');
        }
      });
    },
  },

  getters: {
    showCartItems(state) {
      return state.items;
    },
    totalSumOfCart(state) {
      let sum = null;
      state.items.forEach(item => {
        sum += item.price * item.quantity;
      });
      return sum;
    }
  },
}
