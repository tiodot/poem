import AV from 'leancloud-storage'

const Work = AV.Object.extend('Work')

Work.getById = function (id) {
  return AV.Cloud.rpc('getWorkById', { workId: id })
}

Work.getWorksByAuthor = function (authorId, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksByAuthor', {
    authorId,
    page,
    perPage
  })
}

Work.getWorksIncludeCountByAuthor = function (authorId, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksIncludeCountByAuthor', {
    authorId,
    page,
    perPage
  }).then(({ works, count }) => {
    return {
      pageCount: count % perPage === 0 ? count / perPage : (count / perPage >> 0) + 1,
      works
    }
  })
}

Work.getWorksByCollection = function (collectionId, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksByCollection', {
    collectionId,
    page,
    perPage
  })
}

Work.getWorksIncludeCountByCollection = function (collectionId, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksIncludeCountByCollection', {
    collectionId,
    page,
    perPage
  }).then(({ works, count }) => {
    return {
      pageCount: count % perPage === 0 ? count / perPage : (count / perPage >> 0) + 1,
      works
    }
  })
}

Work.getWorksByDynasty = function (dynasty, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksByDynasty', {
    dynasty,
    page,
    perPage
  })
}

Work.getWorksIncludeCountByDynasty = function (dynasty, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksIncludeCountByDynasty', {
    dynasty,
    page,
    perPage
  }).then(({ works, count }) => {
    return {
      pageCount: count % perPage === 0 ? count / perPage : (count / perPage >> 0) + 1,
      works
    }
  })
}

Work.getWorksPageCountByDynasty = function (dynasty, perPage = 10) {
  return AV.Cloud.rpc('getWorksCountByDynasty').then((worksCount) => {
    return worksCount / perPage >> 0
  })
}

Work.getWorksByKind = function (kind, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksByGenreKind', {
    kind,
    page,
    perPage
  })
}

Work.getWorksIncludeCountByKind = function (kind, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksIncludeCountByGenreKind', {
    kind,
    page,
    perPage
  }).then(({ works, count }) => {
    return {
      pageCount: count % perPage === 0 ? count / perPage : (count / perPage >> 0) + 1,
      works
    }
  })
}

Work.getWorksPageCountByKind = function (kind, perPage = 10) {
  return AV.Cloud.rpc('getWorksCountByGenreKind', {
    kind
  }).then(worksCount => {
    return worksCount / perPage >> 0
  })
}

// 搜索
Work.search = function (keyword) {
  return AV.Cloud.rpc('searchWorks2', { q: keyword }).then((searchResults) => {
    return searchResults.map(r => r.work)
  })
}

// 获取精选语音
Work.getSelectedAudios = function (id) {
  return AV.Cloud.rpc('getSelectedAudios', { workId: id })
}

// 获取诗单
Work.getLists = function (id, page = 1, perPage = 15) {
  return AV.Cloud.rpc('getWorkLists', { workId: id, page, perPage })
}

// 得到所有作品，按照收藏数量排序
Work.getWorksAll = function (page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksAll', {
    page,
    perPage
  })
}

// 得到所有作品，按照收藏数量排序
Work.getWorksAllIncludeCount = function (page = 1, perPage = 10) {
  return AV.Cloud.rpc('getWorksAllIncludeCount', {
    page,
    perPage
  }).then(({ works, count }) => {
    return {
      pageCount: count % perPage === 0 ? count / perPage : (count / perPage >> 0) + 1,
      works
    }
  })
}

Work.like = function (workId) {
  return AV.Cloud.rpc('likeWork', {
    workId
  })
}


Work.unlike = function (workId) {
  return AV.Cloud.rpc('unlikeWork', {
    workId
  })
}

Work.checkLike = function (workId) {
  return AV.Cloud.rpc('checkLikeWork', {
    workId
  }).then(({ liked }) => liked)
} 

export default Work

// WEBPACK FOOTER //
// ./src/models/work.js