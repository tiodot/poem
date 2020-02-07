import AV from 'leancloud-storage'

const Author = AV.Object.extend('Author')

Author.getById = function (id) {
    return AV.Cloud.rpc('getAuthorById2', { authorId: id })
}

Author.search = function (keyword) {
    return AV.Cloud.rpc('searchAuthors', { q: keyword })
}

// 此方法无参
Author.getHotAuthors = function () {
  
    return AV.Cloud.rpc('getHotAuthors')
}

Author.getHotAuthorsByLikers = function (page = 1, perPage = 10) {
  return AV.Cloud.rpc('getHotAuthorsByLikers', {
    page,
    perPage
  })
}


Author.getHotAuthorsIncludeCountByLikers = function (page = 1, perPage = 10) {
  return AV.Cloud.rpc('getHotAuthorsIncludeCountByLikers', {
    page,
    perPage
  }).then(({ count, authors }) => {
    return { 
      pageCount: count % perPage === 0 ? count / perPage : ((count / perPage >> 0) + 1),
      authors: authors
     }
  })
}

Author.getHotAuthorsPageCount = function (perPage = 10) {
  return AV.Cloud.rpc('getHotAuthorsCountsByLikers').then((authorCount) => {
    return authorCount / perPage >> 0
  })
}

Author.getWorks = function (id, page = 1, perPage = 20) {
    return AV.Cloud.rpc('getWorksByAuthor', {
        authorId: id,
        page,
        perPage
    })
}

Author.getByDynasty = function (dynasty, page = 1, perPage = 10) {
    return AV.Cloud.rpc('getAuthorsByDynasty', {
        dynasty,
        page,
        perPage
    })
}

Author.getAuthorsIncludeCountByDynasty = function (dynasty, page = 1, perPage = 10) {
  return AV.Cloud.rpc('getAuthorsIncludeCountByDynasty', {
      dynasty,
      page,
      perPage
  }).then(({ count, authors }) => {
    return { 
      pageCount: count % perPage === 0 ? count / perPage : ((count / perPage >> 0) + 1),
      authors: authors
     }
  })
}

Author.getAuthorsPageCountByDynasty = function (dynasty, perPage) {
   return AV.Cloud.rpc('getAuthorsCountByDynasty', {
     dynasty
   }).then((authorCount) => {
     return authorCount / perPage >> 0
   })
}

Author.like = function (authorId) {
  return AV.Cloud.rpc('likeAuthor', {
    authorId
  }).then(({succeeded}) => succeeded)
} 

Author.unlike = function (authorId) {
  return AV.Cloud.rpc('unlikeAuthor', {
    authorId
  }).then(({succeeded}) => succeeded)
} 

Author.checkLike = function (authorId) {
  return AV.Cloud.rpc('checkLikeAuthor', {
    authorId
  }).then(({liked}) => liked)
}

export default Author

// WEBPACK FOOTER //
// ./src/models/author.js