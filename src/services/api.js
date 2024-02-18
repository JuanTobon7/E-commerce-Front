import axios from 'axios'
const conn = axios.create({
  baseURL: '/'
})

export default{
    sendPhone({name,price}){
        return conn.post('api/leads',{name,price})
    }
}

