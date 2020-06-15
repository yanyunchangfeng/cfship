import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info'

import Button from './button';
import '../../styles/index.scss' 


const styles:React.CSSProperties ={
    textAlign:'center'
}
const centerDecoraor =(storyFn:any)=><div style={styles}>{storyFn()}</div>
const defaultButton = () =>
    <Button onClick = {action('clicked')}>default button</Button>
const buttonWithSize = () => <>
<Button size='lg'>large button</Button>
<Button size='sm'>small button</Button>
</>

const buttonWithType =()=>(
    <>
    <Button btnType='primary'>primary</Button>
    <Button btnType='danger'>danger</Button>
    <Button btnType='link' href="https://github.com/yanyunchangfeng">link</Button>
    </>
)
storiesOf('Button Component', module)
  .addDecorator(centerDecoraor)
  .addDecorator(withInfo)
  .addParameters({
      info:{
          text:`
          this is  a very nice component
          ##  this is a header
          ~~~js
           const a  = 'hello'
          ~~~
          `,
          inline:true
      }
  })
  .add('Button', defaultButton)
  .add('different ButtonSize',buttonWithSize,{info:false,header:false})
  .add('different ButtonType',buttonWithType)