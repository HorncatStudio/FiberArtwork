<template>
  <Section title="Yarns">
    <div
      class="max-w-full px-8 lg:px-24 pt-8 pb-8 container md:flex md:justify-center"
    >
      <YarnCard
        v-for="yarn in yarns"
        :key="yarn.id"
        class="md:mx-auto md:w-1/3"
        :image-url="yarn.fields.Attachment[0].url"
        :name="yarn.fields.Name"
        :website-url="yarn.fields.Website"
      />
    </div>
  </Section>
</template>

<script>
import Section from '~/components/Section.vue'
import YarnCard from '~/components/YarnCard.vue'

export default {
  name: 'YarnSection',
  components: {
    Section,
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
