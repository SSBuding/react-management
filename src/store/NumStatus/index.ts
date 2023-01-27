const store = {
    state: {
        num: 20
    },
    actions:{
        // 只放同步的方法
        add1(newState:{num:number},action:{type:string}){
            newState.num++
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val
        },
        add3(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val
        }
    },
    // 优化redux-thunk的异步写法（模仿Vuex的写法）
    asyncActions:{
        asyncAdd1(dispatch:Function){
            setTimeout(() => {
                dispatch({type: 'add1'})
            },1000)
        }
    },
    // 名字统一管理
    // actionNames:{
    //     add1:'add1',
    //     add2:'add2'
    // },
    actionNames: {
        
    }
}
let actionNames = {}
for(let key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames
export default store