import { Component } from 'angular2/core';
import {AuthorService} from "./author.services";



@Component({
    selector: 'my-author',
    template:`
        <h1>Author</h1>
        <p>this is the author</p>
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent {
    authors;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }

}