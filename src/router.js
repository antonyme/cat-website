import Vue from 'vue'
import Router from 'vue-router'
import BreedList from '@/views/BreedList.vue'
import Breed from '@/views/Breed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'breedList',
      component: BreedList,
      children: [
        {
          path: 'breed/:breedId',
          name: 'breed',
          component: Breed
        }
      ]
    }
  ]
})
