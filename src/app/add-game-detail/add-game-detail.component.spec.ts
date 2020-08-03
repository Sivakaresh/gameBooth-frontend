import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameDetailComponent } from './add-game-detail.component';

describe('AddGameDetailComponent', () => {
  let component: AddGameDetailComponent;
  let fixture: ComponentFixture<AddGameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
