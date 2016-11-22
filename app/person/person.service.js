"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PersonService = (function () {
    function PersonService(_http) {
        this._http = _http;
        this.personsApi = 'http://localhost:5000/api/customers'; // URL to web api
    }
    // Get all persons from mocked constant data
    // getPersons() {
    //     return new Promise<Person[]>(resolve =>
    //         setTimeout(() => resolve(PERSONS), 1000)
    //     );
    // }
    // Get all persons from mocked service in-memory-db
    PersonService.prototype.getPersons = function () {
        return this._http.get(this.personsApi)
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(this.handleError);
    };
    PersonService.prototype.getPerson = function (id) {
        return this.getPersons()
            .then(function (persons) { return persons.find(function (person) { return person.id === id; }); });
    };
    PersonService.prototype.save = function (person) {
        if (person.id) {
            return this.put(person);
        }
        return this.post(person);
    };
    // Delete exisisting Person
    PersonService.prototype.delete = function (person) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.personsApi + "/" + person.id;
        return this._http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    /* Private Commands */
    // Add new person
    PersonService.prototype.post = function (person) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http
            .post(this.personsApi, JSON.stringify(person), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Person
    PersonService.prototype.put = function (person) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.personsApi + "/" + person.id;
        return this._http
            .put(url, JSON.stringify(person), { headers: headers })
            .toPromise()
            .then(function () { return person; })
            .catch(this.handleError);
    };
    PersonService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map