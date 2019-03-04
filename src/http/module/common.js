import axios from 'axios'

//TODO: get apiAddress from config
const apiAddress = '1.1.1.1:8080/api'

let http = axios.create({
  baseURL: apiAddress
})

http.defaults.headers.post['Content-Type'] = 'application/json'

export const commonApi = {
  fetch: () => http({ method: 'GET', url: 'favorite/grouping'}),
  fetchWithParam: (esId) => http({ method: 'GET', url: `favorite/grouping/relate?esId=${esId}`}),
  postWithParam: (data) => http({ method: 'POST', url: 'favorite/entity', data})
}