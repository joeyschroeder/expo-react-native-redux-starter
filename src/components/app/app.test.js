import { render, screen } from '@testing-library/react-native';
import { App } from './app';

describe('<App />', () => {
  it('should render correctly', () => {
    render(<App />);

    const component = screen.toJSON();
    expect(component).toMatchSnapshot();
  });
});
