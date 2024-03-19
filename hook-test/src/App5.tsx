import {createContext, useContext} from "react";

const counterContext = createContext(99)

function App() {
    return <div>
        <counterContext.Provider value={299}>
            <Middle></Middle>
        </counterContext.Provider>
    </div>
}

function Middle () {
    return <div>
        <Child></Child>
    </div>
}
function Child () {
    const childCounter = useContext(counterContext)
    return <p>当前context值:{childCounter}</p>
}
export default App

// 用 createContext 创建 context 对象，用 Provider 修改其中的值，
// function 组件使用 useContext 的 hook 来取值，class 组件使用 Consumer 来取值