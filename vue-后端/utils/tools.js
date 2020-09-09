//加密
const crypto = require('crypto')

//接口规范
//参数一个对象，msg:状态信息，status:状态码，data:参数
function formatData(options){
    let obj = {
        msg:'success',
        status:200,
        data:[]

    }
    options = Object.assign(obj,options)
    //请求失败
    if(options.status === 400){
        obj.msg = 'fail'
    }
    //请求过期
    if(options.status === 100){
        obj.msg = 'invalid'
    }
    //权限不够
    if(options.status === 300){
        obj.msg = 'no-permission'
    }
    return obj
}

//md5加密
    function md5(data,privateKey='xuelin'){
        const hash = crypto.createHash('md5')
        const result =  hash.update(data+privateKey).dagest('hex')
        return result
    }
    
module.exports = {
    formatData,
    md5
}