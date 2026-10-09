import { ComponentFixture, TestBed } from '@angular/core/testing';
import { End } from './end';

describe('End', () => {
  let component: End;
  let fixture: ComponentFixture<End>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [End],
    }).compileComponents();

    fixture = TestBed.createComponent(End);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
