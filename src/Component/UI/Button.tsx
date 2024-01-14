import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode;
    className?: string
}

const Button = ({children, className, ...rest} : IProps)=>{
    return (
        <button className={`text-gray-200 font-mono font-medium p-2 w-full rounded-md ${className}`} {...rest} >{children}</button>
    )
}

export default memo(Button);