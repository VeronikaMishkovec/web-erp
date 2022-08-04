import axios, { Method } from 'axios'

export const METHOD_GET = 'get'
export const METHOD_POST = 'post'
export const METHOD_PUT = 'put'
export const METHOD_DELETE = 'delete'

// export const baseURL = 'http://localhost:5000';
export const baseURL = 'http://192.168.1.235:5000'

const request = (
  path: string,
  method: Method,
  data: object,
  token: string | null = null,
) =>
  axios.request({
    baseURL,
    method,
    [method === METHOD_GET ? 'params' : 'data']: data,
    responseType: 'json',
    url: path,
    headers: {
      'Access-Control-Allow-Origin': '*',
      authorization: token,
    },
    withCredentials: true,
  })

const api = async (
  path: string,
  method: Method,
  data: object,
  name?: string,
) => {
  try {
    // console.log(name, 'args', data);
    const res = await request(path, method, data)
    console.log(name || '', res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default api
