import router from '@/router'
import axios from 'axios'

const conn = axios.create({
    baseURL: 'http://localhost:3001/api/'
})
export const resgiter = async ({email,password}) => {
    return conn.post('registrarme',{email,password});
}