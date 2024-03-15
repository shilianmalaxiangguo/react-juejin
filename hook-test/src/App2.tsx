import {useEffect, useState, useLayoutEffect, useRef} from "react";

async function queryData() {
    return await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(998)
        }, 2e3)
    })
}

function App() {

    const [num, setNum] = useState(0)

    // useEffect(() => {
    //     queryData().then((num) => {
    //         setNum(num)
    //     })
    // }, [])

    useEffect(() => {
        console.log('effect')
        const timer = setInterval(() => {
            console.log('num', num)
        }, 1e3)

        return () => {
            console.log('clean up')
            clearInterval(timer)
        }
    }, [num])
    const divRef = useRef(null)
    const [size, setSize] = useState({x: 0, y: 0})
    const [scroll, setScroll] = useState(0)
    useLayoutEffect(() => {
        if (divRef.current) {
            setSize({
                x: divRef.current['offsetWidth'],
                y: divRef.current['offsetHeight']
            })
        }
        const handleScroll = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    return (
        <div>
            <div onClick={() => setNum((prev) => prev + 1)}>click{num}</div>

            <div ref={divRef} style={{height: '120vh', width: '100%', background: 'lightblue'}}>
                mafeifei
                <div>
                    Div size: {size.x}px x {size.y}px
                </div>
                <div style={{margin: '40vw'}}>
                    Scroll position: {scroll}px
                </div>
            </div>

        </div>
    );
}

export default App
