import {Reducer, useReducer} from "react";

interface Data {
    result: number
}

interface Action {
    type: 'add' | 'minus',
    num: number
}

function reducer(state: Data, action: Action): Data {
    switch (action.type) {
        case 'add':
            return {result: state.result + action.num}
        case 'minus':
            return {result: state.result - action.num}
        default:
            throw new Error()
    }

    return state
}

function App() {

    // const [state, dispatch] = useReducer<Reducer<Data, Action>>(reducer, {result: 0})

    const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
        return {
            result: param === 'zero' ? 0 : 1
        }
    });


    return (
<div>
            <div onClick={() => dispatch({type: 'add', num: 1})}>add</div>
            <div onClick={() => dispatch({type: 'minus', num: 1})}>minus</div>
            {/*<div>{state.result}</div>*/}
            <div>{res.result}</div>
        </div>
    )

}

export default App
