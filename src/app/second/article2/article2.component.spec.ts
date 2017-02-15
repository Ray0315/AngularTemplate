/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Article2Component } from './article2.component';

describe('Article2Component', () => {
  let component: Article2Component;
  let fixture: ComponentFixture<Article2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
