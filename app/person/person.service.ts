import { Injectable } from '@angular/core';
import { Person } from './person-model';
import { PERSONS } from './mock-persons';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {

    // private personsApi = 'http://localhost:5000/api/customers';  // URL to web api
    private personsApi = 'api/persons';  // URL to web api

    constructor(private _http: Http) { }

    // Get all persons from mocked constant data
    // getPersons() {
    //     return new Promise<Person[]>(resolve =>
    //         setTimeout(() => resolve(PERSONS), 1000)
    //     );
    // }

    // Get all persons from mocked service in-memory-db
    getPersons(): Promise<Person[]> {
        return this._http.get(this.personsApi)
            .toPromise()
            .then(response => {
                //  return response.json().data as Person[]
                 return response.json().data as Person[]
            })
            .catch(this.handleError);
    }

    getPerson(id: string) {
        return this.getPersons()
            .then(persons => persons.find(person => person.id === id));
    }

    save(person: Person): Promise<Person> {
        if (person.id) {
            return this.put(person);
        }
        return this.post(person);
    }

    // Delete exisisting Person
    delete(person: Person) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.personsApi}/${person.id}`;

        return this._http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    /* Private Commands */

    // Add new person
    private post(person: Person): Promise<Person> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http
            .post(this.personsApi, JSON.stringify(person), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Person
    private put(person: Person): Promise<Person> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.personsApi}/${person.id}`;

        return this._http
            .put(url, JSON.stringify(person), { headers: headers })
            .toPromise()
            .then(() => person)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
