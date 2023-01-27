import { useSelector, useDispatch } from 'react-redux'

const View = () => {

    const { num } = useSelector((state: RootState) => ({
        num: state.num
    }))
    const dispatch = useDispatch()
    const changeNum = () => {
        dispatch({ type: "add" })
    }
    return (
        <div className="page1">
            <p>我是page1页面内容</p>
            <p>{num}</p>
            <button onClick={changeNum}>按钮</button>
        </div>
    )
}
export default View