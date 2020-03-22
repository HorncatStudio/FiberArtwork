<template>
  <div>
    <YarnCard
      v-for="yarn in yarns"
      :key="yarn.id"
      :image-url="yarn.fields.Attachment[0].url"
      :name="yarn.fields.Name"
      :website-url="yarn.fields.Website"
    />
  </div>
</template>

<script>
import YarnCard from '~/components/YarnCard.vue'

export default {
  name: 'YarnSection',
  components: {
    YarnCard
  },
  props: {
    yarns: {
      type: Array,
      required: true
    }
  }
}
</script>
