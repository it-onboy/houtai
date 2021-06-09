import axios from 'axios'

let instance = axios.create({
    timeout:3000,
    baseURL:'http://api.web1024.cn/news/list',
    params:{
        key: "8tk528"
    }
})

// 请求拦截器
instance.interceptors.request.use(config=>{
    console.log('正在请求。。。。。。。',config);
    return config
}),err=>{
    console.error('请求错误。。。。。',err);
    return Promise.reject(err)
}

// 相应拦截器
instance.interceptors.response.use(res=>{
    return res
},err=>{
    return Promise.reject(err)
})

// 封装请求
// 请求的配置信息 config.method请求方法. config.params请求参数。config.url请求路由地址
async function http({method = 'get',url,params}){
    let result;
    if(method === 'get' || method === 'delete'){
        await instance[method](url,{
            params
        }).then(res => {  
            result = res.data
        }).catch(err =>{
            result = err
        })
    }else if(method === 'post' || method === 'put' || method === 'patch'){
        await instance[method](url,params).then(res=>{
            result = res.data
        }).catch(err=>{
            result = err
        })
    }
    return result
}
export default http