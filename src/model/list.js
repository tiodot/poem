import AV from 'leancloud-storage'

export const List = AV.Object.extend('List')

List.getById = function (id) {
    return AV.Cloud.rpc('getListById', { listId: id, ttl: 600 })
}

List.getByIdWithUser = function (id) {
    return AV.Cloud.rpc('getListByIdWithUser', { listId: id, ttl: 600 })
}

// 获取精选诗单
List.getSelected = function (page = 1, perPage = 15) {
    return AV.Cloud.rpc('getSelectedLists', { page, perPage })
}

// 获取诗单作品
List.getWorks = function (id, page = 1, perPage = 15) {
    return AV.Cloud.rpc('getListWorks', {
        listId: id,
        page,
        perPage
    })
}

// 获取全部诗单的数量
List.CountAll = function () {
    return AV.Cloud.run('getListCount')
}

// 获取精选诗单的数量
List.CountSelected = function () {
    return AV.Cloud.run('getListCount')
}



// WEBPACK FOOTER //
// ./src/models/list.js