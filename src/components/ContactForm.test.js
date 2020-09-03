import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('contact form adds new information to the state', () => {
    render(<ContactForm/>);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target: {value: 'Sar'}});
    fireEvent.change(lastNameInput, {target: {value: 'Cearc'}});
    fireEvent.change(emailInput, {target: {value: 'cearc@gmail.com'}});
    fireEvent.change(messageInput, {target: {value: 'Hello'}});

    const submitButton = screen.getByTestId(/submit/i);
    fireEvent.click(submitButton);
})