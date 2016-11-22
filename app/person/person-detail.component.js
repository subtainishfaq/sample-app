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
var router_1 = require('@angular/router');
var person_model_1 = require('./person-model');
var person_service_1 = require('./person.service');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(personService, route) {
        this.personService = personService;
        this.route = route;
        this.submitted = false;
        this.countries = ['Belgium', 'Italy', 'Germany', 'United States'];
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = params['id'];
                _this.personService.getPerson(id)
                    .then(function (person) { return _this.person = person; });
            }
            else {
                _this.person = new person_model_1.Person("", "", "", 0, "");
            }
        });
    };
    PersonDetailComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        this.personService
            .save(this.person)
            .then(function (person) {
            _this.person = person;
        })
            .catch(function (error) { return _this.error = error; });
    };
    PersonDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/person/person-detail.component.html',
            styleUrls: ['./app/person/person-detail.component.css']
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.ActivatedRoute])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map