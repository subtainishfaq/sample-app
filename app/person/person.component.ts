import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from './person-model';
import { PersonService } from './person.service';
import { OrderByPipeline, OrderByComponent, OrderByHeadComponent, OrderBy } from '../shared';

@Component({
    selector: 'persons',
    templateUrl: './app/person/person.component.html',
    styleUrls: ['./app/person/person.component.css'],
    pipes: [OrderByPipeline],
    directives: [OrderByComponent, OrderByHeadComponent]
})
export class PersonComponent {
    error: any;
    persons: Person[];
    orderByTarget: OrderBy;
    orderByFilter = '+';

    constructor(private _router: Router, private _personService: PersonService) { }

    ngOnInit() {
        this.getPersons();
        this.orderByFilter = '+';
    }

    UpdateSort(orderBy: OrderBy) {
        let orderSign = orderBy.direction ? '+' : '-';
        this.orderByTarget = orderBy;
        this.orderByFilter = orderSign + orderBy.target;
    }

    onCreate(){
        this._router.navigate(['/person/create']);
    }

    getPersons() {
        this._personService.getPersons()
            .then(persons => this.persons = persons)
            .catch(error => this.error = error);
    }

    delete(person: Person, event: any) {
        event.stopPropagation();
        this._personService
            .delete(person)
            .then(res => {
                this.persons = this.persons.filter(h => h !== person);
            })
            .catch(error => this.error = error);
    }

    edit(person: Person, event: any) {
        event.stopPropagation();
        this._router.navigate(['/detail', person.id]);
    }
}
