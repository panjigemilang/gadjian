import axios from "axios"

const BASE_URL = "https://randomuser.me/api/"

axios.defaults.baseURL = BASE_URL

export const getUser = async (page = 1, limit = 4) => {
  return await axios
    .get(`/?page=${page}&results=${limit}&exc=nat,login,registered,gender`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err)
      return []
    })
}
