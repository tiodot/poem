<template>
  <div class="collection-info">
    <img :src="getProp('cover')" alt="">
    <div class="info">
      <h3>{{getProp('name')}}</h3>
      <p>{{getProp('desc')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionInfo',
  props: {
    info: Object
  },
  methods: {
    getProp(key) {
      return this.info && this.info.get(key)
    }
  }
}
</script>

<style lang="less">
  .collection-info {
    display: flex;
    vertical-align: middle;
    align-content: center;
    justify-content: center;
    
    img {
      max-width: 100px;
      max-height: 100px;
    }
    .info {
      flex: 1
    }
  }
</style>