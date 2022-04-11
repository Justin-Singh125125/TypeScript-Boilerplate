import { generatePerson } from '.';

test('should produce correct results', () => {
  const person = generatePerson('Justin Singh', 'test@test.com');
  expect(person.name).toBe('Justin Singh');
  expect(person.email).toBe('test@test.com');
});
