import { generatePerson } from '.';
test('should produce correct results', function () {
    var person = generatePerson('Justin Singh', 'test@test.com');
    expect(person.name).toBe('Justin Singh');
    expect(person.email).toBe('test@test.com');
});
//# sourceMappingURL=index.test.js.map