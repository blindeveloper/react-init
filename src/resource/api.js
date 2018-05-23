const url = 'https://www.reddit.com/r/dogs.json'

const getData = (cb) => {
  return fetch(url)
    .then(res => res.json())
    .then(json => cb(null, json))
    .catch(err => cb(err))
}

export default {getData}