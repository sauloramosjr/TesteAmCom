import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideButtomComponent } from './aside-buttom.component';

describe('AsideButtomComponent', () => {
  let component: AsideButtomComponent;
  let fixture: ComponentFixture<AsideButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
