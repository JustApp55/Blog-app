import axios from "axios"

export const getBlogs = () => {
    const URL = 'http://localhost:3001/post'
    const response = axios.get(URL)
    return response
}

export const getBlog = (id) => {
    const URL = `http://localhost:3001/post/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteBlog = (id) => {
    const URL = `http://localhost:3001/post/${id}`
    const response = axios.delete(URL)
    return response
}

export const createBlog = (add) => {
    const URL = 'http://localhost:3001/post'
    const response = axios.post(URL, add)
    return response
}

export const editBlog = (id, updateTheBlog) => {
    const URL = `http://localhost:3001/post/${id}`
    const response = axios.put(URL, updateTheBlog)
    return response
}

