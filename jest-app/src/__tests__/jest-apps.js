import {fireEvent, render , screen} from '@testing-library/react';
import MyJestApp from '../jest-app';
import cleanDb from '../service';

// beforeAll(()=>{
//     console.log('**** beforeAll');
// })

// afterAll(()=>{
//     console.log('**** afterAll');
// })

let a=1;
beforeEach(()=>{
    console.log('**** beforeEach', a++);
    cleanDb();
})

// afterEach(()=>{
//     console.log('**** afterEach',a++);
// })


const titleValue= 'freepik images';

test('test MyJestApp', ()=>{
    console.log('example or test afterAll()');
    render(<MyJestApp />);
    const  text = screen.getByText('Hello Jest test case');
    const  caseInsentive = screen.getByText(/hello jest test case/i);
    const title = screen.getByTitle(titleValue);
    expect(caseInsentive).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();

})

test('Testing of rahul box',()=>{
    render(<MyJestApp/>);
    let checkInput = screen.getByRole('textbox');
    let checkPlaceHolder = screen.getByPlaceholderText('Enter first name')
    expect(checkInput).toBeInTheDocument();
    expect(checkPlaceHolder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name","firstname")
    expect(checkInput).toHaveAttribute("type","text")

})

// describe("UI test cases in Group",()=>{
//     test('test one MyJestApp', ()=>{
//         render(<MyJestApp />);
//         const  text = screen.getByText('Hello Jest test case');
//         const  caseInsentive = screen.getByText(/hello jest test case/i);
//         const title = screen.getByTitle(titleValue);
//         expect(caseInsentive).toBeInTheDocument();
//         expect(text).toBeInTheDocument();
//         expect(title).toBeInTheDocument();
    
//     })
//     test('Skip Input box',()=>{
//         render(<MyJestApp/>);
//         let checkInput = screen.getByRole('textbox');
//         let checkPlaceHolder = screen.getByPlaceholderText('Enter first name')
//         expect(checkInput).toBeInTheDocument();
//         expect(checkPlaceHolder).toBeInTheDocument();
//         expect(checkInput).toHaveAttribute("name","firstname")
//         expect(checkInput).toHaveAttribute("type","text")
    
//     })
// })

test('input field fireEvent',()=>{
    render(<MyJestApp/>);

    let inputName = screen.getByRole('textbox');
    fireEvent.change(inputName,{target:{value:'113'}});
    expect(inputName.value).toBe("113Test")
})

test("click event test case",()=>{
    render(<MyJestApp/>);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("My data is updated")).toBeInTheDocument();
})


// it("test button",()=>{
//     render(<MyJestApp/>);
//     const buttonEvent = screen.getByRole("button",{name:'Update Data'});
//     fireEvent.click(buttonEvent);
//     expect(screen.getByText("Update Data")).toBeInTheDocument();
// })