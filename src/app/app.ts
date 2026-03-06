import { Component, signal } from '@angular/core';
import { Todolist } from './todolist/todolist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todolist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
}
