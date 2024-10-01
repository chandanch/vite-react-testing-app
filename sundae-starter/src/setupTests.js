import '@testing-library/jest-dom';

import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Enable mocking before all tests run
beforeAll(() => server.listen());
// Reset any request handlers between tests
afterEach(() => server.resetHandlers());
// close server and cleanup once all tests are run
afterAll(() => server.close());
