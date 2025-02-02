// src/__tests__/UserClass.test.js
import React from 'react';
import { render ,screen } from '@testing-library/react';
import UserClass from '../UsersClass';

describe('UserClass Component', () => {
    test('renders without crashing', () => {
        render(<UserClass />);
        const headingElement = screen.getByText(/Class react component/i);
        expect(headingElement).toBeInTheDocument();
    });
  
    test('getUserList method returns correct value', () => {
        const userClassInstance = new UserClass();
        expect(userClassInstance.getUserList()).toBe("User list");
    });
});