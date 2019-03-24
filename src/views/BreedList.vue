<template>
  <section></section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BreedList',
  computed: {
    ...mapState(['breedList'])
  },
  methods: {
    ...mapActions(['fetchBreedList'])
  },
  created () {
    return this.fetchBreedList()
  }
}
</script>
