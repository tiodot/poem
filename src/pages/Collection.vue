<template>
  <ul class="collection">
    <li class="item">
      <CollectionInfo :info="info"></CollectionInfo>
    </li>
    <li class="item" v-for="item in lists" :key="getProp(item, 'objectId')">
      <WorkItem :item="item"></WorkItem>
    </li>
  </ul>
</template>

<script>
import Collection from '../model/collection'
import CollectionInfo from '../components/CollectionInfo'
import WorkItem from '../components/WorkItem'

export default {
  name: 'Collection',
  data() {
    return {
      lists: [],
      info: null
    }
  },
  components: {
    CollectionInfo,
    WorkItem
  },
  created() {
    // 获取collection
    const objectId = this.$route.params.id
    Collection.getWorks(objectId, 1, 50).then(res => {
      // 判断是否已经完成
      res.forEach(item => {
        const id = item.get('objectId')
        const history = window.localStorage.getItem(id)
        if (history) {
          item.set('review', String(this.needReview(history)))
        }
      })
      this.lists.push(...res)
    })

    Collection.getById(objectId).then(res => {
      this.info = res
    })
  },
  methods: {
    getProp(item, key) {
      return item && item.get(key)
    },
    needReview(history) {
      const [step, time] = history.split('-')
      return Date.now() - time > step * 24 * 60 * 60 * 1000
    }
  }
}
</script>

<style lang="less">
  .collection {
    padding: 0;
    list-style: none;
    margin: 0;

    .item {
      border-bottom: 1px solid #eaeaea;
      padding: 15px 0;
    }
  }
</style>