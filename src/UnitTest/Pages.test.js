import { fireEvent, render, screen } from '@testing-library/react';
import Pages from '../UnitTest/Pages'

it('finding the text', () => {
    render(<Pages />);
    const inputElement = screen.getByText('Search:');
    expect(inputElement).toBeInTheDocument();
});

it('checking role', () => {
    render(<Pages />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
});

it('using query', () => {
    render(<Pages />);
    const inputElement = screen.queryByText(/Search for someone/);
    expect(inputElement).toBeNull();
});

it('using fireEvent', () => {
    render(<Pages />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: 'Go Buy Some Food' }})
});
