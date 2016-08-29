import { Component } from 'angular2/core';
import { CourseComponent } from "./courses.component";
import { AuthorComponent } from "./authors.component";
import {FavoriteComponent} from "./favorite.component";
import {HeartComponent} from "./heart.component";



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
                    <my-like 
                    [totalLikes]="tweet.totalLikes"
                    [iLike]="tweet.iLike"
                    ></my-like>
                </div>
             `,
    directives: [CourseComponent,
                 AuthorComponent,
                 FavoriteComponent, HeartComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
    tweet = {
        totalLikes: 10,
        iLike: false
    }

    onFavoriteChange($event){
        console.log($event);
    }
}