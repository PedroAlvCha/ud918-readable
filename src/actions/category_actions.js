export const CATEGORY_CREATE = 'CATEGORY_CREATE'

export function categoryCreate ({ name, path }) {
  return {
    type: CATEGORY_CREATE,
    name,
    path,
  }
}
