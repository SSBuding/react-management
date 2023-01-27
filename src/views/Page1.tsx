import { useSelector, useDispatch } from 'react-redux'
import numStatus from '@/store/NumStatus'

const View = () => {
    // 获取仓库数据
    const { num } = useSelector((state: RootState) => ({
        num: state.handleNum.num,

    }))
    // 修改仓库数据
    const dispatch = useDispatch()
    // dispatch({type: '字符串（认为是一个记号）',val:3}) type是固定的  val是自定义的
    const changeNum = () => {
        // dispatch({type: 'add1'})
        dispatch({ type: 'add3', val: 100 })
    }
    const changeNum2 = () => {
        // 最开始的写法-同步的写法
        // dispatch({type: 'add1'})
        // 异步的写法  redux-thunk的用法  基本格式  dispatch(异步执行的函数)
        // dispatch((dis:Function) => {
        //     setTimeout(() => {
        //         dis({type: 'add1'})
        //     })
        // })
        // 优化redux-thunk的异步写法
        // dispatch(调用状态管理中的asyncAdd1)
        dispatch(numStatus.asyncActions.asyncAdd1)
    }


    return (
        <div className='home'>
            <p>这是page1的内容</p>
            <p>{num}</p>
            <button onClick={changeNum}>同步按钮</button>
            <button onClick={changeNum2}>异步按钮</button>
        </div>
    )
}

export default View