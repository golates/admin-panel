import { render, screen } from '@testing-library/react';
import ProgressBar from '../../component/ProgressBar/ProgressBar.tsx';
import { expect } from 'vitest';

describe('ProgressBar Component', () => {
  it('should render progress bar with value', async () => {
    const value = 15;
    render(<ProgressBar value={value} />);

    const div = await screen.findByRole('progressbar');
    expect(div.style.width).toBe(`${value.toString()}%`);
  });
});
