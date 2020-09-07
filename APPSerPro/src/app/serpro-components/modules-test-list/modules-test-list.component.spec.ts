import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesTestListComponent } from './modules-test-list.component';

describe('ModulesTestListComponent', () => {
  let component: ModulesTestListComponent;
  let fixture: ComponentFixture<ModulesTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
