import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIndexProductoComponent } from './admin-index-producto.component';

describe('AdminIndexProductoComponent', () => {
  let component: AdminIndexProductoComponent;
  let fixture: ComponentFixture<AdminIndexProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminIndexProductoComponent]
    });
    fixture = TestBed.createComponent(AdminIndexProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
