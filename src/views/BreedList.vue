<template>
  <section class="container mt-4">
    <div class="d-flex justify-content-center mb-3"
      v-if="!filteredBreedList"
    >
      <b-spinner label="Loading..." />
    </div>
    <ol class="list-unstyled row"
      v-else
    >
      <li class="col-md-4"
        v-for="breed in filteredBreedList"
        :key="breed.id"
      >
        <b-card class="mb-4"
          :title="breed.name"
          :sub-title="breed.origin"
        >
          <b-link :to="{ name: 'details', params: { breedId: breed.id } }">Details</b-link>
        </b-card>
      </li>
    </ol>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BreedList',
  computed: {
    ...mapGetters(['filteredBreedList'])
  },
  methods: {
    ...mapActions(['fetchBreedList'])
  },
  created () {
    return this.fetchBreedList()
  }
}
</script>
