import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInsideModuleComponent } from './component-inside-module.component';

describe('ComponentInsideModuleComponent', () => {
  let component: ComponentInsideModuleComponent;
  let fixture: ComponentFixture<ComponentInsideModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInsideModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInsideModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
