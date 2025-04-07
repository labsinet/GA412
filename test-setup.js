import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Мокуємо createRoot, якщо потрібно
vi.mock('react-dom/client', () => ({
  createRoot: () => ({
    render: vi.fn(),
  }),
}));
