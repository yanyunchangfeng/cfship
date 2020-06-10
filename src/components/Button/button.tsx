import React ,{FC,ButtonHTMLAttributes,AnchorHTMLAttributes} from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?:string;
    children: React.ReactNode
}
//添加button和a的原生属性
type NativeButtonProps  = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>//交叉类型
// button有的属性是必须的 没法在a上填写button的属性 然后Partial出来登场了
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 这是我们的第一个Button组件
 * ## Button header
 * ~~~js
 * import {Button} from 'cfship'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props)=>{
    const {btnType,disabled,className,size,children,href,...restProps} = props
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === 'link')&&disabled
    })
    if(btnType === 'link'){
        return (
        <a className={classes} href={href} {...restProps}>{children}</a>
        )
    }else{
        return(
        <button className={classes} disabled={disabled} {...restProps}>{children}</button>
        )
    }
}
Button.defaultProps = {
    disabled: false,
    btnType:'default'
}
export default Button;