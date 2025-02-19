import { render, screen } from '@testing-library/react';
import Button from '../../component/Button/Button.tsx';
import { expect } from 'vitest';

describe('Button Component', () => {
  it('should render button with provided children (text)', async () => {
    const content = 'Submit';
    render(<Button>{content}</Button>);

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(content);
  });

  it('should render button with provided children (node)', async () => {
    const textContent = 'Submit';
    const content = <div>{textContent}</div>;
    render(<Button>{content}</Button>);

    const div = await screen.findByText(textContent);
    expect(div).toBeInTheDocument();
    expect(div).toHaveTextContent(textContent);
  });
});
