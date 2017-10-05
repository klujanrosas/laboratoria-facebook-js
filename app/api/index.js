import axios from 'axios'

const rootUrl = 'http://localhost:3000/api'

export default {
  login: (data) => {
    return axios.post(`${rootUrl}/auth`, data)
  },
  getUserDataFromToken: token => axios.post(`${rootUrl}/user`, { token }),
  saveUserSession: userToken => sessionStorage.setItem('LaboratoriaUserSession', userToken),
  getUserSession: () => sessionStorage.getItem('LaboratoriaUserSession'),
  clearUserSession: () => sessionStorage.clear()
}

