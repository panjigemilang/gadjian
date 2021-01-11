import axios from "axios"

const BASE_URL = "https://randomuser.me/api"

axios.create({
  baseURL: BASE_URL,
})

export const getUser = (page = 1, limit = 4) => {
  axios
    .get(`/?page=${page}results=${limit}`)
    .then((res) => res.data)
    .catch((err) => err.response.data)
}
