import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossIconComponent } from './cross-icon.component';

describe('CrossIconComponent', () => {
  let component: CrossIconComponent;
  let fixture: ComponentFixture<CrossIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
