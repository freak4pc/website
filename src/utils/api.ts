export default class Api {
  static contributors(): Promise<any> {
    return Api.get('/teams/xcoders/members')
  }
  private static get(path: string): Promise<any> {
    return fetch(`http://xcbuddy-website-api.herokuapp.com${path}`, {
      method: 'get',
    }).then(res => {
      return res.json()
    })
  }
}
