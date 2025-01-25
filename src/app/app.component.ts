import { Component, signal } from '@angular/core';
import { Post } from './models/post'
import { PostCardComponent } from "./post-card/post-card.component";
import { PostFormComponent } from "./post-form/post-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostCardComponent, PostFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'masterclass-testing-ci';

  readonly posts = signal<Post[]>([]);

  addPost(post: Post): void {
    this.posts.update((value) => [...value, post]);
  }
}
