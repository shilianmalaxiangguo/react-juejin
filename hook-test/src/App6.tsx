import {memo, useMemo, useCallback, useState, useEffect} from "react";

interface ChildProps {
    count: number,
    callback: Function
}

function App() {

    const [money, setMoney] = useState(100)

    const [count, setCount] =  useState(0)
    useEffect(() => {
        setInterval(() => {
            setMoney(() => Math.random() * 100)
        },2000)
    },[])
    // const counter2 = function () {
    //
    // }
    const counter2 = useMemo(function () {
        console.log('counter2运算一次')
        return count * 2
    },[count])

    console.log('render! App')
    // function childCallBack (props: CallBackProps ){
    //     console.log('开始很复杂的渲染,这是个很费渲染的方法!')
    // }

    const childCallBack = useCallback(function () {
        console.log('开始很复杂的渲染,这是个很费渲染的方法!')
    },[])
    return <div>
        {/*<Child count={count}></Child>*/}
        <div>this is count:{count}</div>
        <MemoChild count={counter2} callback={childCallBack}></MemoChild>
    </div>

}

const MemoChild = memo(Child)

interface CallBackProps {
    count: number
}

function Child(props: ChildProps) {
    console.log('render! Child')
    return <div>
        now count is :{props.count}
    </div>
}
export default App
