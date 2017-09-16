import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  private todosUrl = 'http://todos-api-rails.herokuapp.com/todos';
  constructor(public http: Http) {}

  getTodos() {
    return this.http.get(this.todosUrl)
      .map(res => res.json());
  }

}
