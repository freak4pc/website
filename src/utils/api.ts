import 'whatwg-fetch'
import { API_URL } from './constants'

export default class Api {
  static contributors(): Promise<any> {
    return Api.get('/teams/xcoders/members')
  }
  static releases(): Promise<any> {
    return Api.get('/releases')
  }
  private static get(path: string): Promise<any> {
    const url = `${API_URL}${path}`
    return fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => {
        let object = {
          date: new Date().getTime() / 1000,
          json: json,
        }
        sessionStorage.setItem(url, JSON.stringify(object))
        return json
      })
  }
}
