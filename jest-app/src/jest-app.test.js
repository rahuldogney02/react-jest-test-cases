import {render , screen} from '@testing-library/react';
import MyJestApp from './jest-app';

const titleValue= 'freepik images';

test('test MyJestApp', ()=>{
    render(<MyJestApp />);
    const  text = screen.getByText('Hello Jest test case');
    const  caseInsentive = screen.getByText(/hello jest test case/i);
    const title = screen.getByTitle(titleValue);
    expect(caseInsentive).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();

})

test('Testing of Input box',()=>{
    render(<MyJestApp/>);
    let checkInput = screen.getByRole('textbox');
    let checkPlaceHolder = screen.getByPlaceholderText('Enter first name')
    expect(checkInput).toBeInTheDocument();
    expect(checkPlaceHolder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name","firstname")
    expect(checkInput).toHaveAttribute("type","text")

})

describe.only("UI test cases in Group",()=>{
    test('test one MyJestApp', ()=>{
        render(<MyJestApp />);
        const  text = screen.getByText('Hello Jest test case');
        const  caseInsentive = screen.getByText(/hello jest test case/i);
        const title = screen.getByTitle(titleValue);
        expect(caseInsentive).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    
    })
    test('Testing of two Input box',()=>{
        render(<MyJestApp/>);
        let checkInput = screen.getByRole('textbox');
        let checkPlaceHolder = screen.getByPlaceholderText('Enter first name')
        expect(checkInput).toBeInTheDocument();
        expect(checkPlaceHolder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name","firstname")
        expect(checkInput).toHaveAttribute("type","text")
    
    })
    test.skip('Skip Input box',()=>{
        render(<MyJestApp/>);
        let checkInput = screen.getByRole('textbox');
        let checkPlaceHolder = screen.getByPlaceholderText('Enter first name')
        expect(checkInput).toBeInTheDocument();
        expect(checkPlaceHolder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name","firstname")
        expect(checkInput).toHaveAttribute("type","text")
    
    })
})