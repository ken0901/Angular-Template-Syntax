import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsearchComponent } from './wsearch.component';

describe('WsearchComponent', () => {
  let component: WsearchComponent;
  let fixture: ComponentFixture<WsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
