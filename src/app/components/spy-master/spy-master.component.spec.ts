import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyMasterComponent } from './spy-master.component';

describe('SpyMasterComponent', () => {
  let component: SpyMasterComponent;
  let fixture: ComponentFixture<SpyMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
