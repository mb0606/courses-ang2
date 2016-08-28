import { Component } from 'angular2/core';
import { CourseComponent } from "./courses.component";

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
                <my-courses></my-courses>
             `,
    directives: [CourseComponent]
})
export class AppComponent { }