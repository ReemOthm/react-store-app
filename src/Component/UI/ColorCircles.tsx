import {HTMLAttributes} from 'react';
interface IProps extends HTMLAttributes<HTMLSpanElement>{
    color: string;
}

const ColorCircles = ({color , ...rest}:IProps)=>{
    return (
        <span className={`w-5 h-5 bg-red-500 rounded-full cursor-pointer`} style={{backgroundColor:color}} {...rest}/>
    )
}

export default ColorCircles;