import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Post } from '../models/post'

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  readonly submitForm = output<Post>();
  readonly form = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    body: new FormControl('', { nonNullable: true }),
  });
}
