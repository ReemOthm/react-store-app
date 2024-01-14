import {InputHTMLAttributes, memo} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input = ({...rest}:IProps)=>{
    return (
        <input className='block p-2 w-full rounded-lg border shadow-md focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none focus:ring-1'
        {...rest}/>
    )
}

export default memo(Input);