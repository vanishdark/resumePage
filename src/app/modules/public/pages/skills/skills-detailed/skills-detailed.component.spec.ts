import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillsDetailedComponent} from './skills-detailed.component';

describe('SkillsDetailedComponent', () => {
  let component: SkillsDetailedComponent;
  let fixture: ComponentFixture<SkillsDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsDetailedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
