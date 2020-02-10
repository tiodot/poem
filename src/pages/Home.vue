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
    <div class="review-entry" @click="goReview">
      <svg t="1581302373410" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13119" width="32" height="32"><path d="M372.589714 387.218286A109.604571 109.604571 0 0 1 438.857143 348.891429V274.285714a18.285714 18.285714 0 1 1 36.571428 0v74.642286a109.604571 109.604571 0 0 1 66.267429 38.290286l64.658286-37.339429a18.285714 18.285714 0 0 1 18.285714 31.670857l-64.658286 37.302857a109.494857 109.494857 0 0 1 0 76.544l64.658286 37.339429a18.285714 18.285714 0 0 1-18.285714 31.670857l-64.658286-37.302857A109.604571 109.604571 0 0 1 475.428571 565.321143V640a18.285714 18.285714 0 1 1-36.571428 0v-74.642286a109.604571 109.604571 0 0 1-66.267429-38.290285L307.931429 564.406857a18.285714 18.285714 0 1 1-18.285715-31.670857l64.658286-37.302857a109.494857 109.494857 0 0 1 0-76.544L289.645714 381.549714a18.285714 18.285714 0 0 1 18.285715-31.670857l64.658285 37.302857zM658.285714 877.714286a18.285714 18.285714 0 0 1-18.285714 18.285714H329.142857a18.285714 18.285714 0 0 1-18.285714-18.285714v-101.302857c-121.380571-104.484571-182.857143-212.918857-182.857143-325.12 0-178.944 147.382857-323.291429 342.893714-323.291429 176.420571 0 326.838857 139.044571 362.276572 286.537143a2977.133714 2977.133714 0 0 0 61.952 219.830857 18.285714 18.285714 0 0 1-13.714286 23.552l-74.24 15.286857V786.285714a18.285714 18.285714 0 0 1-18.285714 18.285715H658.285714v73.142857z m-310.857143-18.285715H621.714286v-73.142857a18.285714 18.285714 0 0 1 18.285714-18.285714h130.596571v-109.714286a18.285714 18.285714 0 0 1 14.628572-17.92l68.864-14.189714a3003.136 3003.136 0 0 1-56.466286-203.081143C765.878857 290.998857 629.101714 164.571429 470.893714 164.571429 295.424 164.571429 164.571429 292.717714 164.571429 451.291429c0 102.034286 58.221714 202.898286 176.384 302.738285A18.285714 18.285714 0 0 1 347.428571 768v91.428571z m109.714286-329.142857a73.142857 73.142857 0 1 0 0-146.285714 73.142857 73.142857 0 0 0 0 146.285714z" p-id="13120"></path></svg>
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
    },
    goReview() {
      this.$router.push({name: 'review'})
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

    .review-entry {
      position: fixed;
      right: 15px;
      bottom: 30px;
      border: 1px solid #ddd;
      background-color: #dfdfdf;
      border-radius: 50%;
      padding: 5px;
    }

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