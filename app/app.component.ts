import { Component } from 'angular2/core';
import { CourseComponent } from "./courses.component";
import { AuthorComponent } from "./authors.component";
import {FavoriteComponent} from "./favorite.component";



@Component({
    selector: 'my-app',
    template: ` <div class="container">
                    <h1>My First Angular 2 App</h1>
                    <my-courses></my-courses>
                    <my-author></my-author>
                    <my-favorite 
                    [is-favorite]="post.isFavorite"
                    (change)="onFavoriteChange($event)"
                    ></my-favorite>
                </div>
             `,
    directives: [CourseComponent, AuthorComponent, FavoriteComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log($event);
    }
}