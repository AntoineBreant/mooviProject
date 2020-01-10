import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreRechercheComponent } from './filtre-recherche.component';

describe('FiltreRechercheComponent', () => {
  let component: FiltreRechercheComponent;
  let fixture: ComponentFixture<FiltreRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
