import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleProjectComponent } from './style-project.component';

describe('StyleProjectComponent', () => {
  let component: StyleProjectComponent;
  let fixture: ComponentFixture<StyleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
