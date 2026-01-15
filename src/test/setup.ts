import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../mocks/server';

// Inicia o servidor de mocks antes de todos os testes
beforeAll(() => server.listen());

// Reseta os handlers após cada teste, caso tenham sido modificados
afterEach(() => server.resetHandlers());

// Fecha o servidor de mocks após todos os testes
afterAll(() => server.close());