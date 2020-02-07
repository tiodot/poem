<template>
  <div class="home">
    <div class="item" 
      v-for="item in classicCollections" 
      :key="getProp(item, 'objectId')"
      @click="goCollection(item)"
    >
      <img :src="getProp(item, 'cover')">
      <p>{{getProp(item, 'name')}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['classicCollections'])
  },
  created() {
    // 获取数据
    this.loadLibraryData()
  },
  methods: {
    ...mapActions(['loadLibraryData']),
    getProp(item, propKey) {
      return item && item.get(propKey)
    },
    goCollection(item) {
      this.$router.push({name: 'collection', params: {id: item.get('objectId')}})
    }
  }
}
</script>

<style lang="less">
  .home {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;   
    grid-template-rows: auto;    
    text-align: center;
    grid-row-gap: 15px;

    .item {
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow: 0 2px 4px grey;
      }

      p {
        margin: 5px;
      }
    }
  }
</style>