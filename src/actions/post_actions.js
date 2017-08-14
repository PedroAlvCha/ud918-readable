export const POST_EDIT = 'POST_EDIT'
export const POST_DELETE = 'POST_DELETE'
export const POST_CREATE = 'POST_CREATE'
export const POST_VOTE = 'POST_VOTE'


export function postCreate ({ id, timestamp, title, body, author, category }) {
  return {
    type: POST_CREATE,
    id,
    timestamp,
    title,
    body,
    author,
    category,
  }
}

export function postDelete ({ id }) {
  return {
    type: POST_DELETE,
    id,
  }
}

export function postVote ({ id, voteType }) {
  return {
    type: POST_VOTE,
    id,
    voteType,
  }
}

export function postEdit ({ id, timestamp, title, body, author, category }) {
  return {
    type: POST_EDIT,
    id,
    timestamp,
    title,
    body,
    author,
    category,
  }
}
