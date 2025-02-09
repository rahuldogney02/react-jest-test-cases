
import UserFunction from "../UserFunctional";
import { fireEvent, render, screen } from '@testing-library/react';

test("Method testing with events",()=>{
    render(<UserFunction/>);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Hello")).toBeInTheDocument();
})