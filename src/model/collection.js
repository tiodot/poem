import AV from 'leancloud-storage'

const Collection = AV.Object.extend('Collection')

Collection.getById = function (id) {
    return AV.Cloud.rpc('getCollectionById', { collectionId: id })
}

Collection.getCollections = function () {
    // return AV.Cloud.run('getAllCollecions')
    return AV.Cloud.rpc('getAllCollections')
}

Collection.getWorks = function (id, page = 1, perPage = 50) {
    return AV.Cloud.rpc('getWorksByCollection', { collectionId: id, page, perPage })
}

Collection.getPartCollections = function () {
    // return AV.Cloud.rpc('getAllCollecions', {
    //   queryLimit: 20 // 此处limit失效， 不知为何 // 缓存原因
    // })
    return AV.Cloud.rpc('getAllCollections')
}


Collection.like = function (collectionId) {
  return AV.Cloud.rpc('likeCollection', {
    collectionId
  }).then(({succeeded}) => succeeded)
}

Collection.unlike = function (collectionId) {
  return AV.Cloud.rpc('unlikeCollection', {
    collectionId
  }).then(({succeeded}) => succeeded)
}

Collection.checkLike = function (collectionId) {
  return AV.Cloud.rpc('checkLikeCollection', {
    collectionId
  }).then(({liked}) => liked)
}

Collection.getCountByKindId = (kindId) => {
  return AV.Cloud.run('getCollectionCountByKindId', {
    kindId
  })
}

// 通过Collection的KindId获取所有work总数
Collection.getWorkCountByKindId = (kindId) => {
  return AV.Cloud.run('getWorkCountByKindId', {
    kindId
  })
}

Collection.getWorkCountByCollection = (collectionId) => {
  return AV.Cloud.run('getWorkCountByCollection', {
    collectionId
  })
}

Collection.getCollectionCountByCollection = (kindList) => {
  return AV.Cloud.run('getCollectionCountByKindList', {
    kindList
  })
}

Collection.getWorkCountByKindList = (kindList) => {
  return AV.Cloud.run('getWorkCountByKindList', {
    kindList
  })
}


Collection.getCollectionCountByKindList = (kindList) => {
  return AV.Cloud.run('getCollectionCountByKindList', {
    kindList
  })
}

export default Collection

// WEBPACK FOOTER //
// ./src/models/collection.js