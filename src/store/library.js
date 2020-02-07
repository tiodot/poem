import Author from '../model/author'
import Collection from '../model/collection'

const createCollectionGetter = (kind, filters) => state => {
  let arr = state.libraryData.collections.filter(c => c.get('kindId') == kind)

  filters && filters.forEach((filter) => {
    arr = arr.filter(filter)
  })

  return arr.sort((a, b) => a.get('order') - b.get('order'))
}

export default {
  state: {
    libraryData: {
      authors: [],
      collections: [],
      bookCollections: [], // 课本
    },
  },
  mutations: {
    setLibraryData(state, data) {
      Object.keys(data).forEach((key) => {
        state.libraryData[key] = data[key]
      })
    }
  },
  actions: {
    loadLibraryData({ commit }) {
      Promise.all([
        Author.getHotAuthors(),
        Collection.getCollections(),
      ]).then(([authors, collections]) => {
        commit('setLibraryData', {
          authors,
          collections
        })
      })
    }
  },
  getters: {
    libraryData: state => state.libraryData,

    sortAuthors: (state) => {
      let result = state.libraryData.authors.sort((a, b) => a.get('name').length > b.get('name').length)
      // let result = state.libraryData.authors

      return result
    },

    quotationCollections: createCollectionGetter(9), // 用典
    classicCollections: createCollectionGetter(1), // 选集
    topicCollections: createCollectionGetter(2), // 主题
    tuneCollections: createCollectionGetter(7), // 词牌
    natureCollections: createCollectionGetter(3), // 写景
    festivalCollections: createCollectionGetter(4), // 节日
    termCollections: createCollectionGetter(5), // 节气
    seasonCollections: createCollectionGetter(8), // 时令
    bookCollections: createCollectionGetter(6, [(c) => {
      let name = c.get('name')

      return name !== '声律启蒙' && name !== '千家诗' && name !== '幼学琼林'
    }]), // 课本
  }
}



// WEBPACK FOOTER //
// ./src/store/modules/library-data/index.js