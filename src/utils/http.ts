import axios, { AxiosError, type AxiosInstance } from 'axios'

export class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080/api/v1/',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}
const http = new Http().instance
export default http
