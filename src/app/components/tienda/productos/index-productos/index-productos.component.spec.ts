import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductosComponent } from './index-productos.component';

describe('IndexProductosComponent', () => {
  let component: IndexProductosComponent;
  let fixture: ComponentFixture<IndexProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexProductosComponent]
    });
    fixture = TestBed.createComponent(IndexProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
