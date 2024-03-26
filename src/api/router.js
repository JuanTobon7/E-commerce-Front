import router from '@/router'
import axios from 'axios'

const conn = axios.create({
    baseURL: 'http://localhost:3001'
})
export const singIn = async (name) => {
    return conn.post('/iniciar-sesion',{name});
}