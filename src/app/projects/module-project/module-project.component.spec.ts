import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleProjectComponent } from './module-project.component';

describe('ModuleProjectComponent', () => {
  let component: ModuleProjectComponent;
  let fixture: ComponentFixture<ModuleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
