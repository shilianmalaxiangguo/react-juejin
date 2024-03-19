import {memo, useMemo, useCallback, useState, useEffect} from "react";

function App() {
    const [count, setCount] = useState(0)

    const memoText = useMemo(() => {
        console.log('this is Date',new Date())
    },[Math.floor(count / 10)])

    useEffect(() => {
        if (count % 10 === 0) {
            // console.log('this is Date', new Date());
        }
    },[count])
    return <div>
        count:{count}
        <button onClick={() => setCount(prev => prev += 1)}>点击btn</button>
    </div>
}

export default App
