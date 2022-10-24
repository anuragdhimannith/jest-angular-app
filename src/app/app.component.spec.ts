import { AppComponent } from "./app.component"

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('it should have a title new app', () => {
    expect(fixture.title).toEqual('jest-angular-app');
  });
  it('add 1 and 4 gives us 5', () => {
    expect(fixture.sum(1,4)).toBe(5);
  });
});