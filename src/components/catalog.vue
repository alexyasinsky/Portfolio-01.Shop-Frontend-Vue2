<template>
  <div class="product__box">
    <item 
      v-for='item in items' 
      type='catalog'
      :item='item' 
      :key='item.id'
      @add='addCartItem(item)'
    />
  </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/reqs.js';
import { mapActions } from 'vuex';


export default {
  name: 'catalog',

  props: {
    limit: Number,
    gender: {
      type: String,
      default: ''
    }
  },
  
  components: {
    item, 
  },

  data() {
    return {
      url: 'https://portfolio-01-shop-backend-node-js.onrender.com/catalog',
      items: [],
    }
  },

  methods: {
    ...mapActions([
      'addCartItem',
    ]),
    formItems(array) {
      if (!this.gender) {
        for (let i = 0; i < this.limit; i++) {
          this.items.push(array[i])
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (array[i].gender === this.gender) {
            this.items.push(array[i]);
          }
          if (this.items.length === this.limit) break;
        }
      }
    }
  },

  mounted() {
    get(this.url).then(dataArray => {
      this.formItems(dataArray);
    });

  }
};
</script>

<style></style>
