export const COMMENT_EDIT = 'COMMENT_EDIT'
export const COMMENT_DELETE = 'COMMENT_DELETE'
export const COMMENT_CREATE = 'COMMENT_CREATE'
export const COMMENT_VOTE = 'COMMENT_VOTE'

export function commentCreate ({ id, timestamp, body, author, parentId }) {
  return {
    type: COMMENT_CREATE,
    id,
    timestamp,
    body,
    author,
    parentId,
  }
}

export function commentDelete ({ id }) {
  return {
    type: COMMENT_DELETE,
    id,
  }
}

export function commentVote ({ id, voteType }) {
  return {
    type: COMMENT_VOTE,
    id,
    voteType,
  }
}

export function commentEdit ({ id, timestamp, body, author, parentId }) {
  return {
    type: COMMENT_EDIT,
    id,
    timestamp,
    body,
    author,
    parentId,
  }
}
