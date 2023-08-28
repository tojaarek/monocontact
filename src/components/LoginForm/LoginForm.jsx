import css from '../RegisterForm/RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import {
  FormBox,
  Logo,
  Headline,
  Subheadline,
  InputBox,
  Input,
  Label,
  Button,
  Wrapper,
  Redirect,
} from 'components/RegisterForm/RegisterForm.styled';
import { signIn } from 'redux/auth/actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      signIn({
        email: form.elements.email.vaule,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <FormBox>
      <Logo>monoContact</Logo>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Headline>Welcome back</Headline>
        <Subheadline>
          Enter your details to get sign in to your account
        </Subheadline>
        <InputBox>
          <Input type="email" name="email" required />
          <Label>E-mail</Label>
        </InputBox>
        <InputBox>
          <Input type="password" name="password" required />
          <Label>Password</Label>
        </InputBox>
        <center>
          <Button type="submit">Sign In</Button>
        </center>
      </form>
      <center>
        <Wrapper>
          Don't have an account yet?
          <Redirect to="/register" className={css.link}>
            Sign up
          </Redirect>
        </Wrapper>
      </center>
    </FormBox>
  );
};

export default LoginForm;
