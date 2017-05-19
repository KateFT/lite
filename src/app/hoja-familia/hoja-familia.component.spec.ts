/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HojaFamiliaComponent } from './hoja-familia.component';

describe('HojaFamiliaComponent', () => {
  let component: HojaFamiliaComponent;
  let fixture: ComponentFixture<HojaFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
