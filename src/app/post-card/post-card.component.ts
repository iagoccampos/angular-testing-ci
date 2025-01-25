import { Component, input, Input } from '@angular/core';
import { Post } from '../models/post'

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  readonly post = input.required<Post>();
}
