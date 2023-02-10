import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissaoFooterComponent } from './admissao-footer.component';

describe('AdmissaoFooterComponent', () => {
  let component: AdmissaoFooterComponent;
  let fixture: ComponentFixture<AdmissaoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissaoFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissaoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
