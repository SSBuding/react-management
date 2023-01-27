import {legacy_createStore} from 'redux'
import reducer from './reducer.ts'

const store = legacy_createStore(reducer,
    // 为了让浏览器正常使用redux-dev-tools插件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store