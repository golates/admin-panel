import { render, screen } from '@testing-library/react';
import PasswordInput from '../../component/PasswordInput/PasswordInput.tsx';
import { userEvent } from '@testing-library/user-event';

describe('PasswordInput Component', () => {
  it('should render password input with provided label (text) and name', async () => {
    const labelText = 'Input label';
    const name = 'input_label';
    const { container } = render(<PasswordInput label={labelText} name={name} />);

    const label = await screen.findByText(labelText);
    const input = container.querySelector('input');
    const showSpan = await screen.findByText(/show/i);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(showSpan).toBeInTheDocument();

    expect(label.textContent).toBe(labelText);
    expect(input).toHaveAttribute('name', name);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should render password input with provided label (node)', () => {
    const labelText = 'Input label';
    const content = <div>{labelText}</div>;
    const name = 'input_label';
    const { container } = render(<PasswordInput label={content} name={name} />);
    const label = container.querySelector('label');

    expect(label).toBeInTheDocument();
    const child = label?.firstChild;
    expect(child?.textContent).toBe(labelText);
  });

  it('should render password input and show error', () => {
    const labelText = 'Input label';
    const name = 'input_label';
    const errorText = 'Required';

    const { container } = render(<PasswordInput label={labelText} name={name} error={errorText} />);
    const error = container.querySelector('span');

    expect(error).toBeInTheDocument();
    expect(error?.textContent).toBe(errorText);
  });

  it('should toggle input type', async () => {
    const user = userEvent.setup();
    const labelText = 'Input label';
    const name = 'input_label';
    const { container } = render(<PasswordInput label={labelText} name={name} />);

    const showSpan = await screen.findByText(/show/i);
    await user.click(showSpan);
    const input = container.querySelector('input');
    const hideSpan = await screen.findByText(/hide/i);

    expect(hideSpan).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });
});
