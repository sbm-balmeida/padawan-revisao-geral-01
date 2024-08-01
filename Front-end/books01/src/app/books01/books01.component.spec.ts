import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Books01Component } from './books01.component';

describe('Books01Component', () => {
  let component: Books01Component;
  let fixture: ComponentFixture<Books01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Books01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Books01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
