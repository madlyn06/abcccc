import axios, { AxiosError, type AxiosInstance } from 'axios'
import { getAccessTokenFromLS } from './auth'

export class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'http://0.tcp.ap.ngrok.io:14755/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = 'Bearer ' + this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
