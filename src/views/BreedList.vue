<template>
  <section></section>
</template>

<script>
import catService from '@/lib/catService'

export default {
  name: 'BreedList',
  created () {
    return catService.getBreedList().then(console.log)
  }
}
</script>
