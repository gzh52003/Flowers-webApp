const allow_origin = ['http://localhost:2001','http://120.24.63.27:2001','http://120.24.63.27:2004','http://120.24.63.27:2005']
function cors(req,res,next){
    // 获取请求者的域名
    const host = req.get('origin')
    if(allow_origin.includes(host)){
      
        res.set({
            "Access-Control-Allow-Origin":`${host}`,
            "Access-Control-Allow-Headers":"Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
            "Access-Control-Allow-Methods":"PUT,POST,GET,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Credentials":true,
        })
        // 跨域请求CORS中的预请求
        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            next();
        }

    }else{
        res.send(401);
    }

}
module.exports = {
    cors
}