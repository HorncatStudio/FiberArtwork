<template>
  <div
    class="min-h-screen flex justify-center items-center text-center mx-auto"
  >
    <div>
      <h1>
        FiberArtwork
      </h1>
      <YarnSection :yarns="yarns" />
    </div>
  </div>
</template>

<script>
import YarnSection from '~/components/YarnSection.vue'

export default {
  components: {
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
