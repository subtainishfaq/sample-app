"use strict";
var person_model_1 = require('../person/person-model');
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var persons = [
            new person_model_1.Person("Joris", "Brauns", "info@owic.be", 32468198772, "Belgium"),
            new person_model_1.Person("Tim", "Sommer", "tim.sommer@outlook.be", 32468982277, "Belgium"),
            new person_model_1.Person("Raphael", "Köllner", "Raphael.kollner@gmail.com", 332423423423, "Germany"),
            new person_model_1.Person("Albert", "Brauns", "Raphael.kollner@gmail.com", 332423423423, "Germany")
        ];
        return { persons: persons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map