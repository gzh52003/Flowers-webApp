const {MongoClient,ObjectId} = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'gz2003'

async function connect(){
    //连接数据库
    const client = await MongoClient.connect(url)
    //连接表
    const db = client.db(dbName)
    return {client,db}
}
//增加
    async function insert(colName,data){
        const {client,db} = await connect()
        const collection = db.collection(colName)
        for(let key in data){
            if(!data[key]){
                data[key] = ''
            }
        }
        const result = await collection[Array.isArray(data) ? 'insertMany':'insertOne'](data)
        client.close()
        return result
    }

    //删除并
    async function remove(colName,query){
        const {client ,db} = await connect()
        const collection = db.collection(colName)
        if(query._id && typeof query._id === 'string'){
            query._id = ObjectId(query._id)
        }
        const result = await collection.deleteOne(query)
        client.close()
        return result
    }
//修改
    async function updata(colName,query,data){
        //调用函数连接
        const {client,db} =await connect()
        //连接指定的集合
        const collection = db.collection(colName)

        if(query._id && typeof query._id === 'string'){
            query._id = ObjectId(query._id)
        }
        const result = await collection.updateMany(query,data);
        //关闭数据库
        client.close()
        //返回
        return result
    }

//查询
async function find(colName,query={},options={}){
    const {client,db} = await connect()
    const collection = db.collection(colName)
    let obj = {}
    if(query._id && typeof query._id === 'string'){
        query._id = ObjectId(query._id)
    }
    const opt = {}
    if(options.field){
        opt.projection = options.field
    }
    //获取数据库数据
    let result = collection.find(query,opt)

    //获取数据库的总数
  
    if(options.total){
       obj.total = await collection.count().then((data)=>data)
      
   }
    //是否跳过数据
    if(options.skip){
        result = result.skip(options.skip)
    }

    if(options.limit){
        result = result.limit(options.limit)
    }

    if(options.sort){
        let key,value
        key = options.sort[0]
        if(options.sort.length > 1){
            value = options.sort[1] - 0

        }else{
            value = -1
        }
        result = result.sort({
            [key] : value
        })
    }

    result =  await result.toArray()
  
   obj.res = result
    client.close()
    return obj
}


module.exports = {
    insert,
    updata,
    remove,
    find,
}