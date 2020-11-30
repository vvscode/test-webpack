import { greet } from './greet';

describe('greet', () => {
  let prompt, alert;

  beforeEach(() => {
    prompt = window.prompt;
    alert = window.alert;

    window.prompt = jest.fn();
    window.alert = jest.fn();
  });

  afterEach(() => {
    window.alert = alert;
    window.prompt = prompt;
  });


  it('should show Agu for small age', () => {
    window.prompt.mockReturnValue("4");
    greet();
    expect(window.alert).toHaveBeenCalledWith('Агу');
  })

})