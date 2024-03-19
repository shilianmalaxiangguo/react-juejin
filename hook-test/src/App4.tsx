import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    useLayoutEffect,
    ForwardRefRenderFunction,
    HTMLProps,
} from 'react';

interface RefProps {
    focus: () => void;
    blur: () => void;
}

interface InputProps extends HTMLProps<HTMLInputElement> {
    xPlacement: 'top' | 'bottom';
}

const Input: ForwardRefRenderFunction<RefProps, InputProps> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current?.focus();
        },
        blur() {
            inputRef.current?.blur();
        },
    }));

    // 这里你可以根据 xPlacement 来决定样式或者类名
    const className:string = `input-${props.xPlacement}`;

    return <div className={className}>
        <input type="text" ref={inputRef} {...props} />
    </div>;
};

// 这里使用 InputProps 作为 WrapperInput 的属性类型
const WrapperInput = forwardRef<RefProps, InputProps>(Input);

function App() {
    const wrapperInputRef = useRef<RefProps>(null);
    useLayoutEffect(() => {
        wrapperInputRef.current?.focus();
    }, []);

    return (
        <div>
            <WrapperInput ref={wrapperInputRef} xPlacement="top" />
        </div>
    );
}

export default App;
