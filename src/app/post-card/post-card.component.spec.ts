import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('post', {
      title: 'title',
      body: 'body'
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post title', () => {
    const title = (fixture.nativeElement as HTMLElement ).querySelector('.post-title')
    expect(title?.textContent).toBe('title')
  })
});
