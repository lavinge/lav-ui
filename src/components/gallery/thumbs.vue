<template>
  <div class="lav-thumbs">
    <div class="lav-thumbs-wrap">
      <scroll :active="active">
        <square v-for="(src, i) in images" :key="i">
          <div class="lav-thumbs-item" :class="[getActive(i)]" @click="select(i)" :style="styles(src)"></div>
        </square>
      </scroll>
    </div>
  </div>
</template>

<script>
import scroll from './scroll';
import square from '../../helpers/square.vue';
export default {
  components: { square, scroll },
  props: {
    images: {
      type: Array,
      default: () => ([])
    },
    active: Number
  },
  methods: {
    select(index) {
      this.$emit('select', index);
    },
    getActive(index) {
      return (this.active === index) ? 'lav-thumbs-item_active' : '';
    },
    styles(src) {
      return {
        backgroundImage: 'url(' + src + ')'
      }
    }
  }
}
</script>

<style>

</style>
