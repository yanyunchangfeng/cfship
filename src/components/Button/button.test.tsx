import React from 'react';
import {render} from '@testing-library/react'
import Buttton from './button'

test('our first react test case',()=>{
    const warpper  = render(<Buttton>Nice</Buttton>)
    const element = warpper.queryAllByText('Nice')
    expect(element).toBeTruthy()
})