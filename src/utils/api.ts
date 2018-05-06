export default class Api {
  static contributors(): Promise<any> {
    return Api.get('/teams/xcoders/members')
  }
  private static get(path: string): Promise<any> {
    return cachedFetch(`http://xcbuddy-website-api.herokuapp.com${path}`, {
      method: 'get',
    })
  }
}

const cachedFetch = (url, options) => {
  return new Promise((resolve, reject) => {
    let cachedResponse = sessionStorage.getItem(url)
    if (cachedResponse) {
      try {
        let object = JSON.parse(cachedResponse)
        if (
          object.date &&
          new Date(object.date * 1000 + 60 * 60 * 24) > new Date()
        ) {
          resolve(object.json)
        } else {
          reject('Expired')
        }
      } catch (error) {
        reject(error)
      }
    } else {
      reject('Not found')
    }
  }).catch(error => {
    return fetch(url, options)
      .then(res => res.json())
      .then(json => {
        let object = {
          date: new Date().getTime() / 1000,
          json: json,
        }
        sessionStorage.setItem(url, JSON.stringify(object))
        return json
      })
  })
}
