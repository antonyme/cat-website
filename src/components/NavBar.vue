<template>
  <b-navbar type="dark" variant="info">
    <b-navbar-brand href="#">THE CAT WEBSITE</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="selectedOrigin || 'filter'" right>
        <b-dropdown-item
          v-for="origin in availableOrigins"
          :key="origin"
          @click="setSelectedOrigin(origin)"
        >
          {{ origin }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapState(['selectedOrigin']),
    ...mapGetters(['availableOrigins'])
  },
  methods: {
    ...mapActions(['setSelectedOrigin'])
  }
}
</script>
