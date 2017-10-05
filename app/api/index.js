import axios from 'axios'

const rootUrl = 'http://localhost:3000/api'

export default {
  login: (data) => {
    return axios.post(`${rootUrl}/auth`, data)
  }
}

