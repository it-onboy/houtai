import axios from 'axios'

let $http = axios.create({
    timeout:3000,
    // baseURL:'http://api.web1024.cn/news/list'
    params:{
        key: "8tk528"
    }
})

export default {
    $http
}