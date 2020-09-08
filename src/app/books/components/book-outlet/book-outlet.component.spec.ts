import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOutletComponent } from './book-outlet.component';

describe('BookOutletComponent', () => {
  let component: BookOutletComponent;
  let fixture: ComponentFixture<BookOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
