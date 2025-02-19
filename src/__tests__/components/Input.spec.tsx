import { render, screen } from '@testing-library/react';
import Input from '../../component/Input/Input.tsx';

describe('Input Component', () => {
  it('should render input with provided label (text) and name', async () => {
    const labelText = 'Input label';
    const name = 'input_label';
    render(<Input label={labelText} name={name} />);

    const label = await screen.findByText(labelText);
    const input = await screen.findByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    expect(label.textContent).toBe(labelText);
    expect(input).toHaveAttribute('name', name);
  });

  it('should render input with provided label (node)', () => {
    const labelText = 'Input label';
    const content = <div>{labelText}</div>;
    const name = 'input_label';
    const { container } = render(<Input label={content} name={name} />);
    const label = container.querySelector('label');

    expect(label).toBeInTheDocument();
    const child = label?.firstChild;
    expect(child?.textContent).toBe(labelText);
  });

  it('should render input and show error', () => {
    const labelText = 'Input label';
    const name = 'input_label';
    const errorText = 'Required';

    const { container } = render(<Input label={labelText} name={name} error={errorText} />);
    const error = container.querySelector('span');

    expect(error).toBeInTheDocument();
    expect(error?.textContent).toBe(errorText);
  });
});
