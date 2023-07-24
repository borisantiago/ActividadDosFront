import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductoComponent } from './show-producto.component';

describe('ShowProductoComponent', () => {
  let component: ShowProductoComponent;
  let fixture: ComponentFixture<ShowProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProductoComponent]
    });
    fixture = TestBed.createComponent(ShowProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
