import * as React from 'react';
import * as Enzyme from 'enzyme';
import Login from '../Login';
import InputField from '../InputField';
import LoginButton from '../LoginButton';

jest.mock('../../../hooks/useNavigate', () => (
    () => ({
        navigateToServersList: jest.fn(),
    })
));
jest.mock('../../../hooks/useLogin', () => (
    () => ({
        login: jest.fn(),
        username: 'test0',
        password: 'password',
        isLoading: false,
        errorMessage: null,
        userNameValid: true,
        passwordValid: true,
        updateUsername: jest.fn(),
        updatePassword: jest.fn(),
    })
));

describe('<Login />', () => {
    const setup = () => Enzyme.shallow(<Login />);

    test('should mount', () => {
        expect(setup().exists()).toBe(true);
    });

    test('should have 2 InputFields and a LoginButton', () => {
        const wrapper = setup();
        expect(wrapper.find(InputField).length).toBe(2);
        expect(wrapper.find(LoginButton).length).toBe(1);
    });
});
