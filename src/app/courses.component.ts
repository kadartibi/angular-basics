import { CoursesService } from './courses.sevice';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        ` 
        
        
    //inside {{}} we can use variable, method or code like Jinja
})
export class CoursesComponent{
    title = "List of courses"
    courses;
    //Logic to call HTTP service to get data
        //-- It depends on http endpoint and hard to test
        //-- Maybe we need this data somewhere else too
        //-- we should use only presentation logic here
        // => use services
    
    constructor(service: CoursesService){ 
        // we need to register CoursesService as a provider to make DI work
        this.courses = service.getCourses();
    }
}