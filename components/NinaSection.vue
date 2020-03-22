<template>
  <Section title="Our Story" :subtitle="motto">
    <div class="md:flex md:justify-center">
      <div class="md:flex-shrink-0 md:w-1/2 md:max-w-xl">
        <h3>Take a virtual tour of our local yarn shop below!</h3>
        <iframe
          style="border: 0;"
          src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1478618856361!6m8!1m7!1sDRsZ4owwWG0AAAQvO2LJQA!2m2!1d34.70909499215638!2d-86.58754498474497!3f39.9297520661157!4f-2.1280991735537214!5f0.4000000000000002"
          width="600"
          height="450"
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
      <div class="md:1-1/2 md:ml-6 md:max-w-xl">
        <img
          :src="headshotUrl"
          class="img-center"
          alt="Anastasia's Antonison Picture"
        />
        {{ biographyPart1 }}
        {{ biographyPart2 }}
      </div>
    </div>
  </Section>
</template>

<style scoped>
.img-center {
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import Section from '~/components/Section.vue'

export default {
  name: 'NinaSection',
  components: {
    Section
  },
  props: {
    motto: {
      type: String,
      required: true
    },
    biographyPart1: {
      type: String,
      required: true
    },
    biographyPart2: {
      type: String,
      required: true
    },
    headshotUrl: {
      type: String,
      required: true
    }
  }
}
</script>
