const api = process.env.REACT_APP_README_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const myHeaders = {
  'Accept': 'application/json',
  'Authorization': token
}

export const categoriesGet = () =>
  fetch(`${api}/categories`, { myHeaders })
    .then(res => res.json())
    .then(data => data.categories)


export const postsGet = () =>
  fetch(`${api}/posts`, { myHeaders })
    .then(res => res.json())
    .then(data => data)

export const commentsGetForPost = (postID) =>
  fetch(`${api}/posts/${postID}/comments`, { myHeaders })
    .then(res => res.json())
    .then(data => data)

export const postVoteUp = (postId) =>
  fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: "upVote" })
      }).then(res => res.json())
        .then(data => data)

export const postVoteDown = (postId) =>
  fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: "downVote" })
  }).then(res => res.json())
    .then(data => data)
