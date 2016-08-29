import { Component } from 'angular2/core';
import { CourseComponent } from "./courses.component";
import { AuthorComponent } from "./authors.component";


@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
                <my-courses></my-courses>
                <my-author></my-author>
             `,
    directives: [CourseComponent, AuthorComponent]
})
export class AppComponent { }