<template>
  <div>
    <a :href="websiteUrl">
      <img class="inline-block" :src="imageUrl" :alt="name" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SponsorCard',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    websiteUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
