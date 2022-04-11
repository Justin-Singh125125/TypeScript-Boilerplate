"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
test('should produce correct results', function () {
    var person = (0, _1.generatePerson)('Justin Singh', 'test@test.com');
    expect(person.name).toBe('Justin Singh');
    expect(person.email).toBe('test@test.com');
});
//# sourceMappingURL=index.test.js.map