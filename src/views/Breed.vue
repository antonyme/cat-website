<template>
  <b-modal ref="breedModal"
    hide-header
    hide-footer
    @hide="onClose"
  >
    <div class="d-flex justify-content-center mb-3"
      v-if="!breed"
    >
      <b-spinner label="Loading..." />
    </div>
    <b-row v-else>
    <b-col>
      <b-img thumbnail :src="breed.mediaUrl || ''" />
    </b-col>
    <b-col>
      <p>{{description}}</p>
    </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
import { handler } from '@/lib/error'
import wikiService from '@/lib/wikiService'

export default {
  name: 'Breed',
  data () {
    return {
      description: null,
      descriptionLoading: false
    }
  },
  methods: {
    onClose () {
      this.$router.go(-1)
    },
    fetchDescription () {
      this.descriptionLoading = true
      wikiService.getDescription(this.breed.wikiPage).then(description => {
        this.description = description
      }).catch(handler)
        .finally(() => { this.descriptionLoading = false })
    }
  },
  computed: {
    ...mapState(['breedList']),
    breed () {
      if (!this.breedList) return null
      return this.breedList.find(breed => breed.id === this.$route.params.breedId)
    }
  },
  watch: {
    breed (newBreed) {
      if (newBreed && !this.description && !this.descriptionLoading) {
        this.fetchDescription()
      }
    }
  },
  mounted () {
    this.$refs.breedModal.show()
    if (this.breed) {
      this.fetchDescription()
    }
  }
}
</script>
