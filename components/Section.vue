<template>
  <div
    v-if="title != ''"
    :class="bgcolor"
    class="mx-auto px-8 lg:px-24 pt-8 pb-8"
  >
    <div :class="titleColor" class="text-6xl text-center py-2 leading-none">
      {{ title }}
    </div>
    <div v-if="subtitle != ''">
      {{ subtitle }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgcolor: {
      type: String,
      default: 'bg-white'
    },
    titleColor: {
      type: String,
      default: 'text-teal'
    },
    title: {
      type: String,
      default: 'true'
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
