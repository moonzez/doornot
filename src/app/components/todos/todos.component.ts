import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(item => item.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo) {
    this.todoService.add(todo).subscribe(res => this.todos.push(res));
  }
}
