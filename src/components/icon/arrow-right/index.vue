<template>
  <svg :height="size" :width="size" :fill="color" viewBox="0 0 250 300">
  	<polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153 		"/>
  </svg>
</template>

<script>
export default {
  props: {
    size: [Number, String],
    color: String
  }
}
</script>