<template>
  <div class="work-item">
    <div class="work-info" @click="goDetail">
      <h3>{{title}}</h3>
      <p>{{content}}</p>
    </div>
    <div class="action" @click="doFinish()">
      <template v-if="isReview">
        <svg v-if="isReview === 'true'" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7354" width="32" height="32"><path d="M715.316 928.194h-278.353c-11.334 0-20.559-9.113-20.559-20.306s9.225-20.278 20.559-20.278h278.353c59.147 0 87.722-32.091 101.222-59.006 0.675-1.631 0.9-3.122 1.238-4.894 2.559-12.853 6.891-34.425 35.325-68.484 20.503-24.581 16.988-50.681 12.853-80.887-1.294-9.591-2.587-19.125-3.122-28.575-2.362-40.303 8.213-57.713 22.894-81.844 2.672-4.331 5.541-9.056 8.606-14.344 13.472-23.231 12.712-52.059-2.025-77.091-18-30.6-51.863-48.909-90.534-48.909-68.512 0-147.487 2.334-148.247 2.334-6.834 0.253-12.206-2.391-16.228-7.031-4.078-4.641-5.737-10.856-4.641-16.875 0.281-1.406 26.072-141.047 26.072-202.416 0-62.944-47.756-69.722-68.231-69.722-32.372 0-58.697 34.453-58.697 76.837 0 52.678 0 70.453-27.844 108.9-38.419 53.044-110.953 142.059-165.6 142.059h-34.622v450.197c0 11.222-9.225 20.306-20.559 20.306h-117.675c-43.116 0-78.216-34.622-78.216-77.175v-356.737c0-42.525 35.072-77.147 78.216-77.147h172.884c24.469 0 78.834-51.412 132.103-125.044 20.194-27.872 20.194-34.425 20.194-85.331 0-65.869 43.819-117.422 99.787-117.422 50.456 0 109.378 28.912 109.378 110.306 0 49.331-14.766 141.131-22.359 185.147 29.166-0.703 78.975-1.716 124.284-1.716 53.494 0 100.688 25.819 126.113 69.103 22.162 37.688 22.978 81.675 2.166 117.591-3.234 5.569-6.244 10.519-9.028 15.103-13.641 22.388-18.759 30.769-17.128 58.584 0.506 8.409 1.716 16.959 2.841 25.509 4.472 32.878 10.041 73.8-21.881 112.050-21.825 26.184-24.778 40.866-26.747 50.569-0.928 4.641-1.913 9.45-4.331 14.287-26.831 53.353-75.853 82.35-138.459 82.35v0zM165.5 457.691c-20.419 0-37.069 16.397-37.069 36.563v356.794c0 20.194 16.65 36.591 37.069 36.591h97.116v-429.947h-97.116zM165.5 457.691z" p-id="7355" fill="#dbdbdb"></path></svg>
        <svg v-else class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2758" width="32" height="32"><path d="M931.84 517.12C931.84 768 732.16 972.8 486.4 972.8S40.96 768 40.96 517.12 240.64 61.44 486.4 61.44c93.184 0 182.272 28.672 257.024 83.968 9.216 7.168 11.264 19.456 4.096 28.672s-19.456 11.264-28.672 4.096C651.264 129.024 570.368 102.4 486.4 102.4 263.168 102.4 81.92 288.768 81.92 517.12S263.168 931.84 486.4 931.84 890.88 745.472 890.88 517.12c0-11.264 9.216-20.48 20.48-20.48s20.48 9.216 20.48 20.48z m44.032-349.184c-8.192-8.192-21.504-8.192-28.672 0L512 612.352 325.632 422.912c-8.192-8.192-20.48-8.192-28.672 0s-8.192 20.48 0 28.672l200.704 204.8c4.096 4.096 9.216 6.144 14.336 6.144 5.12 0 11.264-2.048 14.336-6.144l449.536-459.776c8.192-8.192 8.192-21.504 0-28.672z" p-id="2759" fill="#1afa29"></path></svg>
      </template>
      <svg v-else class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2758" width="32" height="32"><path d="M931.84 517.12C931.84 768 732.16 972.8 486.4 972.8S40.96 768 40.96 517.12 240.64 61.44 486.4 61.44c93.184 0 182.272 28.672 257.024 83.968 9.216 7.168 11.264 19.456 4.096 28.672s-19.456 11.264-28.672 4.096C651.264 129.024 570.368 102.4 486.4 102.4 263.168 102.4 81.92 288.768 81.92 517.12S263.168 931.84 486.4 931.84 890.88 745.472 890.88 517.12c0-11.264 9.216-20.48 20.48-20.48s20.48 9.216 20.48 20.48z m44.032-349.184c-8.192-8.192-21.504-8.192-28.672 0L512 612.352 325.632 422.912c-8.192-8.192-20.48-8.192-28.672 0s-8.192 20.48 0 28.672l200.704 204.8c4.096 4.096 9.216 6.144 14.336 6.144 5.12 0 11.264-2.048 14.336-6.144l449.536-459.776c8.192-8.192 8.192-21.504 0-28.672z" p-id="2759" fill="#dbdbdb"></path></svg>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'WorkItem',
  props: {
    item: Object
  },
  data() {
    return {
      title: this.getTitle(),
      content: this.getProp('content'),
      isReview: this.getProp('review')
    }
  },
  methods: {
    ...mapMutations(['setCurrentWork']),
    getProp(key) {
      return this.item && this.item.get(key)
    },
    getTitle() {
      const author = this.getProp('authorName')
      return this.getProp('title') + ( author ? `(${author})` : '')
    },
    goDetail() {
      this.setCurrentWork(this.item)
      this.$router.push({name: 'work', params: {id: this.getProp('objectId')}})
    },
    doFinish() {
      const id = this.getProp('objectId')
      let step = 1, time = Date.now()
      // 已经完成，但是没有到Review时间
      if (this.isReview === 'false') {
        return false
      }
      if (this.isReview === 'true') {
        // 重置step
        const [old, t] = this.getHistory()[id].split('-')
        step = old * 2
        time = t
      }
      this.isReview = 'false'
      this.setHistory(id, `${step}-${time}`)
    },
    getHistory() {
      return JSON.parse(window.localStorage.getItem('poem_history'))
    },
    setHistory(key, value) {
      let data = this.getHistory() || {}
      data[key] = value
      window.localStorage.setItem('poem_history', JSON.stringify(data))
    }
  }
}
</script>

<style lang="less">
  .work-item {
    display: flex;
    align-items: center;
    justify-content: center;

    .work-info {
      flex: 1;

      h3 {
        margin: 0 0 8px;
        color: #6495ed;
        font-size: 16px;
      }

      p {
        color: #aaa;
        font-size: 12px;
        margin: 0;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .action {
      text-align: center;
      padding: 10px 2px 10px 10px;
    }
  }
</style>