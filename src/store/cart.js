
// import request from '../utils/request'
// import {Notify} from 'vant'

    

const cart = {
    state:{
        goodslist:[]
    },
    getters:{
        totalPrice(state){
            return state.goodslist.reduce((pre,item)=>pre+parseInt(item.Price)*item.qty,0)*100;
        },
        
    },

    // 定义修改state的事件
    mutations:{
        // initCart(state,data){
        //     state.goodslist = data;
        // },
        // 添加商品到购物车
        add(state,goods){
            state.goodslist.unshift(goods)
        },

        // 修改数量
        changeQty(state,{_id,qty}){
            state.goodslist = state.goodslist.map(item=>{
                if(item._id === _id){
                    item.qty = qty;
                }
                return item;
            });

        },

        // 删除商品
        remove(state,_id){
            state.goodslist = state.goodslist.filter(item=>item._id!==_id)
        },
        pushstate(state,data){
            state.goodslist = data
        }
        // // 清空购物车
        // clear(state){
        //     state.goodslist = []
        // }
        
    },

    actions:{
        
      
        // 根据库存数量来判断是否允许更改购物车商品数量
        // async changeQtyAsync(context,{_id,qty}){
        //     console.log('context=',context);
        //     // 发起ajax请求，获取当前商品的库存数量
        //     // 库存>=qty：允许修改购物车商品数量
        //     // 库存<qty：不允许增加购物车商品数量
        //     const {data} = await request.get(`/goods/${_id}/kucun`)
        //     const kucun = data.data;
        //     console.log('kucun=',kucun)

        //     if(kucun<qty){
        //         Notify({ type: 'danger', message: '库存不足' })
        //         qty = kucun;
        //     }
        //     context.commit('changeQty',{_id,qty})
        // },
        // async getCart(){
        //     const {data} = await request.get(`/cart`);
        //     context.commit('initCart',data.data)

        // }
    }
}

export default cart;