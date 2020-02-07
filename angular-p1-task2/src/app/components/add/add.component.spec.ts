import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;

  beforeEach(() => {
    component = new AddComponent(null, null, null, null);
  });

  it('should set type image', () => {
    component.toggleType(true);
    expect(component.imgType).toBeTruthy();
  })

});
