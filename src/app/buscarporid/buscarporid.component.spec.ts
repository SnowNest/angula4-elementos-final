import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporidComponent } from './buscarporid.component';

describe('BuscarporidComponent', () => {
  let component: BuscarporidComponent;
  let fixture: ComponentFixture<BuscarporidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarporidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarporidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
