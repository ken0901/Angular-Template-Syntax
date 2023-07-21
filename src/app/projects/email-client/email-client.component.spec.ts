import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailClientComponent } from './email-client.component';

describe('EmailClientComponent', () => {
  let component: EmailClientComponent;
  let fixture: ComponentFixture<EmailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
