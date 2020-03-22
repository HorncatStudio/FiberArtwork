<template>
  <div
    class="min-h-screen flex justify-center items-center text-center mx-auto"
  >
    <div>
      <MainHeader />
      <MissionSection />
      <InstagramSection />
      <NinaSection
        :motto="nina[0].fields.Motto"
        :biography-part1="nina[0].fields.BioP1"
        :biography-part2="nina[0].fields.BioP1"
        :headshot-url="nina[0].fields.Headshot[0].url"
      />
      <YarnSection :yarns="yarns" />
    </div>
  </div>
</template>

<script>
import InstagramSection from '~/components/InstagramSection.vue'
import MainHeader from '~/components/MainHeader.vue'
import MissionSection from '~/components/MissionSection.vue'
import NinaSection from '~/components/NinaSection.vue'
import YarnSection from '~/components/YarnSection.vue'

export default {
  components: {
    InstagramSection,
    MainHeader,
    MissionSection,
    NinaSection,
    YarnSection
  },
  async asyncData({ params }) {
    const basePath = process.env.airtable_base_url

    function buildUrl(path) {
      return basePath + path
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.airtable_api_key
    }

    const yarnUrl = buildUrl(
      'Yarns?fields%5B%5D=Name&fields%5B%5D=Attachment&fields%5B%5D=Website'
    )
    const ninaUrl = buildUrl(
      'Nina?fields%5B%5D=Name&fields%5B%5D=Headshot&fields%5B%5D=BioP1&fields%5B%5D=BioP2&fields%5B%5D=Motto'
    )

    const yarnResponse = await fetch(yarnUrl, { headers })
    const ninaResponse = await fetch(ninaUrl, { headers })

    const yarnJson = await yarnResponse.json()
    const ninaJson = await ninaResponse.json()

    return {
      yarns: yarnJson.records,
      nina: ninaJson.records
    }
  }
}
</script>
