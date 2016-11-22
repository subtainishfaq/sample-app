"use strict";
var guid_1 = require('../shared/guid');
var Person = (function () {
    function Person(firstName, lastName, email, phoneNumber, country) {
        this.id = guid_1.Guid.newGuid();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person-model.js.map