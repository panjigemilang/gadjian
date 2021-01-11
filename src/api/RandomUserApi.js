import axios from "axios"

const BASE_URL = "https://randomuser.me/api/"

axios.defaults.baseURL = BASE_URL

export const fetchUsers = async () => {
  return await axios
    .get(`/?results=28&exc=nat,login,registered,gender`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err)
      return []
    })
}
