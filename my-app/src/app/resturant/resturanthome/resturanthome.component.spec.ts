import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturanthomeComponent } from './resturanthome.component';

describe('ResturanthomeComponent', () => {
  let component: ResturanthomeComponent;
  let fixture: ComponentFixture<ResturanthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturanthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturanthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
