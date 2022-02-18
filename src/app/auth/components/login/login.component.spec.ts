import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockFormBuilder;

  beforeEach(async () => {
    mockFormBuilder = jasmine.createSpyObj(['group']);
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: FormBuilder, useValue: mockFormBuilder }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

});
