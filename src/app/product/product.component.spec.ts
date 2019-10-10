import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [AccordionModule, RouterModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadProcucts() to get Product list based on category ID', () => {
    let cate_id = 1;
    component.loadProcucts(cate_id)
    //expect(component.loadProcucts(cate_id)).toBeTruthy();
  });

});
