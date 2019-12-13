import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPHPComponent } from './test-php.component';

describe('TestPHPComponent', () => {
  let component: TestPHPComponent;
  let fixture: ComponentFixture<TestPHPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPHPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
