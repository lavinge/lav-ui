<template>
  <svg :height="size" :width="size" :fill="color" viewBox="0 0 426.667 426.667">
    <path d="M213.227,0C95.36,0,0,95.467,0,213.333s95.36,213.333,213.227,213.333s213.44-95.467,213.44-213.333S331.093,0,213.227,0
      z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667S384,119.04,384,213.333
      S307.627,384,213.333,384z"/>
    <rect x="192" y="277.333" width="42.667" height="42.667"/>
    <rect x="192" y="106.667" width="42.667" height="128"/>
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