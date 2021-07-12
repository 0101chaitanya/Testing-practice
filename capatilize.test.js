import { capatilize } from './capatilize';
test('capatilize "hello', () => {
  expect(capatilize('hello')).toBe('Hello');
});
