<template>
  <div class="review">
    <template v-if="!allDone">
      <div class="wrapper" @click="toggle">
        <template v-if="contentVisible">
          <h2>{{getProp('title')}}</h2>
          <div class="author">{{getProp('authorName')}}</div>
          <div class="content" v-html="format(getProp('content'))"></div>
        </template>
        <div v-else class="white">你可以的，再想想，真的不知道就点我再偷看一下咯</div>
      </div>
      
      <div class="action">
        <button @click="finish">我记住了</button>
        <div class="sep"></div>
        <button @click="tempPass">差不多忘了</button>
      </div>
    </template>
    <div v-else class="finish">
      <svg t="1581298771730" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10814" width="200" height="200"><path d="M879.193333 896H176.18a53.26 53.26 0 0 1-52.52-44.066667l-116.706667-661.333333A53.333333 53.333333 0 0 1 59.473333 128h703.013334a53.26 53.26 0 0 1 52.52 44.066667l7.286666 41.266666H1002.666667a21.333333 21.333333 0 0 1 0 42.666667h-172.846667l60.233333 341.333333H938.666667a21.333333 21.333333 0 0 1 0 42.666667h-41.08l34.126666 193.4a53.333333 53.333333 0 0 1-52.52 62.6z m-713.52-51.48a10.666667 10.666667 0 0 0 10.506667 8.813333h703.013333a10.666667 10.666667 0 0 0 10.5-12.52L854.26 640H746.666667a21.333333 21.333333 0 0 1 0-42.666667h100.06l-73.733334-417.853333a10.666667 10.666667 0 0 0-10.506666-8.813333H59.473333a10.666667 10.666667 0 0 0-10.5 12.52l116.7 661.333333zM1002.666667 810.666667h-21.333334a21.333333 21.333333 0 0 1 0-42.666667h21.333334a21.333333 21.333333 0 0 1 0 42.666667zM405.333333 640a21.266667 21.266667 0 0 1-15.086666-6.246667l-128-128a21.333333 21.333333 0 0 1 30.173333-30.173333L405.333333 588.5l198.246667-198.253333a21.333333 21.333333 0 0 1 30.173333 30.173333l-213.333333 213.333333A21.266667 21.266667 0 0 1 405.333333 640z m597.333334-170.666667h-85.333334a21.333333 21.333333 0 0 1 0-42.666666h85.333334a21.333333 21.333333 0 0 1 0 42.666666z" fill="#1afa29" p-id="10815"></path></svg>
      <p>赞啊，都完成了</p>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Review',
  data() {
    return {
      lists: this.getHistoryList(),
      current: 0,
      allDone: false,
      contentVisible: true
    }
  },
  mounted() {
    if (!this.workItem) {
      this.getWork()
    }
  },
  computed: {
    ...mapState({
      workItem: state => state.work.currentWork
    }),
  },
  methods: {
    ...mapActions(['getCurrentWork']),
    getProp(key) {
      return this.workItem && this.workItem.get(key)
    },
    finish() {
      const id = this.getProp('objectId')
      const item = this.getHistory(id)
      const [old, t] = item.split('-')
      const step = old * 2
      this.setHistory(id, [step, t].join('-'))
      this.nextItem()
    },
    // 先通过一下，下次进来再继续Review
    tempPass() {
      this.nextItem()
    },
    nextItem() {
      this.current += 1
      this.getWork()
    },
    getWork() {
      const id = this.lists[this.current]
      if (id) {
        this.getCurrentWork(id)
      } else {
        this.allDone = true
      }
    },
    getHistoryList() {
      const history = this.getHistory()
      if (!history) return []
      return Object.keys(history).filter(k => this.filterItem(history[k]))
    },
    getHistory(id) {
      const history = JSON.parse(window.localStorage.getItem('poem_history'))
      return id ? history[id] : history
    },
    setHistory(key, value) {
      let data = this.getHistory() || {}
      data[key] = value
      window.localStorage.setItem('poem_history', JSON.stringify(data))
    },
    filterItem(history) {
      const [step, time] = history.split('-')
      return Date.now() - time > step * 24 * 60 * 60 * 1000
    },
    format(content) {
      if (!content) return ''
      return content.replace(/(\r\n|\n)/g, '<br>')
    },
    toggle() {
      this.contentVisible = !this.contentVisible
    }
  }
}
</script>

<style lang="less">
  .review {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    h2 {
      margin-bottom: 5px;
    }
    .wrapper {
      flex: 1;
      overflow: auto;
      padding-bottom: 15px;
      line-height: 1.5;
    }

    .white {
      padding: 50px;
      line-height: 1.8
    }
    .action {
      height: 80px;
      display: flex;
      border-top: 1px solid #dedede;
      button {
        height: 100%;
        flex: 1;
        font-size: 16px;
      }
      .sep {
        width: 1px;
        background: #dedede;
      }
    }
  }
</style>