<template>
  <div class="work">
    <h2>{{getProp('title')}}</h2>
    <div class="author">{{getProp('authorName')}}</div>
    <div class="content" v-html="content"></div>
    <ul class="tabs">
      <li class="tab" :class="current === tab.prop && 'highlight'"
         v-for="tab in tabs" 
         @click="select(tab)"
         :key="tab.prop">
         {{tab.name}}
      </li>
    </ul>
    <div class="dynamic" v-html="tabContent"></div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Work',
  data() {
    return {
      current: 'intro',
      tabs: [
        {prop: 'intro', name: '评析'},
        {prop: 'annotation', name: '注释'},
        {prop: 'translation', name: '译文'},
        {prop: 'appreciation', name: '赏析'},
        {prop: 'masterComment', name: '辑评'}
      ]
    }
  },
  computed: {
    ...mapState({
      workItem: state => state.work.currentWork
    }),
    tabContent() {
      return this.format(this.getProp(this.current))
    },
    content() {
      return this.format(this.getProp('content'))
    }
  },
  methods: {
    ...mapActions(['getCurrentWork']),
    getProp(key) {
      return this.workItem && this.workItem.get(key)
    },
    format(content) {
      if (!content) return ''
      return content.replace(/(\r\n|\n)/g, '<br>')
    },
    select(tab) {
      this.current = tab.prop
    }
  },
  mounted() {
    if (!this.workItem) {
      this.getCurrentWork(this.$route.params.id)
    }
  }
}
</script>

<style lang="less">
  .work {
    text-align: center;
    line-height: 2;
    h2 {
      margin-bottom: 0;
    }

    .tabs {
      display: flex;
      margin: 15px 0;
      padding: 0;
      list-style: none;

      .tab {
        flex: 1;
      }

      .highlight {
        color: #92130a;
      }
    }

    .dynamic {
      text-align: left;
      padding: 5px 15px;
      line-height: 1.8;
    }
  }
</style>