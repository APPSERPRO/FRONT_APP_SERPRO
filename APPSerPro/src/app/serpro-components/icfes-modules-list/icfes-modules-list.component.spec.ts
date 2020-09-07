import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcfesModulesListComponent } from './icfes-modules-list.component';

describe('IcfesModulesListComponent', () => {
  let component: IcfesModulesListComponent;
  let fixture: ComponentFixture<IcfesModulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcfesModulesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcfesModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
