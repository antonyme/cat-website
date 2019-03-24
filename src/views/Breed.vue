<template>
  <b-modal ref="breedModal"
    hide-header
    hide-footer
    @hide="onClose"
  >
    {{ $route.params.breedId }}
  </b-modal>
</template>

<script>
export default {
  name: 'Breed',
  methods: {
    onClose () {
      this.$router.push({ name: 'breedList' })
    }
  },
  mounted () {
    this.$refs.breedModal.show()
  }
}
</script>
