import React from 'react';
import {render} from '@testing-library/react'
import Buttton from './button'

test('our first react test case',()=>{
    // const warpper  = render(<Buttton>Nice</Buttton>)
    // const element = warpper.queryAllByText('Nice')
    // expect(element).toBeTruthy()
    // expect(element).toBeInTheDocument()
})
describe('test Button component',()=>{
    it('should render the correct default button',()=>{
        const warpper  = render(<Buttton>Nice</Buttton>)
        const element = warpper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })
    
    it('should render the correct component based on different props',()=>{

    })
    it('should render a link when btnType equals link and href is provided',()=>{

    })
    it('should render disabled button when disabled set to true',()=>{

    })
})
