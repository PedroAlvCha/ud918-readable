export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function dateToStringYYYY_MM_DD_HH_MM( dateGotten ){
  let postDateString = dateGotten.toISOString()
  postDateString = postDateString.replace('T',' ')
  postDateString = postDateString.substring(0,16)
  return postDateString;
}
