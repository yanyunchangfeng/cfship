import React from 'react';
import classNames from 'classnames';
export const enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
export enum ButtonType {
    Primary = 'promary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?:string;
    children: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props)=>{
    const {btnType,disabled,size,children,href} = props
    const classes = classNames('btn',{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === ButtonType.Link)&&disabled
    })
    if(btnType === ButtonType.Link){
        return (
        <a className={classes} href={href}>{children}</a>
        )
    }else{
        return(
        <button className={classes} disabled={disabled}>{children}</button>
        )
    }
}