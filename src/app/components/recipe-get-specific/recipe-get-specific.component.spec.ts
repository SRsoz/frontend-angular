import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeGetSpecificComponent } from './recipe-get-specific.component';

describe('RecipeGetSpecificComponent', () => {
  let component: RecipeGetSpecificComponent;
  let fixture: ComponentFixture<RecipeGetSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeGetSpecificComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeGetSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
