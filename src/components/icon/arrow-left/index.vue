<template>
  <svg :height="size" :width="size" :fill="color" viewBox="0 0 350 300">
    <polygon points="247.35,270.3 130.05,153 247.35,35.7 211.65,0 58.65,153 211.65,306 		"/>
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