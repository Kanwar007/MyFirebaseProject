import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSudentInfoComponent } from './add-sudent-info.component';

describe('AddSudentInfoComponent', () => {
  let component: AddSudentInfoComponent;
  let fixture: ComponentFixture<AddSudentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSudentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
