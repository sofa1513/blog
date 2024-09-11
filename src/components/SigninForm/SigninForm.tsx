import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';

import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUserPost } from '../../types/SignUser';
import { Spinner } from '../Spinner/Spinner';

import classes from './SigninForm.module.scss';

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email address is required')
      .matches(/^[0-9a-z][a-z0-9._\-^s]*@[a-z]*\.[a-z]+/, 'Email address is not valid: example@mail.com.'),
    password: Yup.string().required('Password is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const isUser = useTypedSelector((state) => state.userData.user.username);
  const serverError = useTypedSelector((state) => state.userData.errors);
  const loading = useTypedSelector((state) => state.userData.loading);

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isUser) navigate(fromPage, { replace: true });

    if (serverError['email or password']) {
      setError('email', {
        type: 'server',
        message: 'Email or password is invalid.',
      });
      setError('password', {
        type: 'server',
        message: 'Email or password is invalid.',
      });
    }
  }, [isUser, serverError, navigate, fromPage, setError]);

  const onSubmit = (data: Inputs) => {
    const user: IUserPost = {
      user: {
        email: data.email,
        password: data.password,
      },
    };

    signIn(user, () => null);
    reset();
  };

  return (
    <div className={cn(classes['main__sign-in-form'])}>
      <h2 className={cn(classes['sign-in-form__title'])}>Sign In</h2>
      <form className={cn(classes['sign-in-form__form'])} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className={cn(classes['form-label'])}>Email address</label>
        <input
          {...register('email')}
          className={cn(classes['form-input'])}
          placeholder="Email address"
          autoComplete="email"
          id='email'
        />
        {errors.email && <span className={cn(classes['form__error'])}>{errors.email.message}</span>}

        <label htmlFor="password" className={cn(classes['form-label'])}>Password</label>
        <input
          {...register('password')}
          className={cn(classes['form-input'])}
          type="password"
          placeholder="Password"
          autoComplete='current-password'
          id='password'
        />
        {errors.password && <span className={cn(classes['form__error'])}>{errors.password.message}</span>}

        <div className={cn(classes['form__actions'])}>
          {loading ? <Spinner size={25} /> : <input className={classes['submit']} type="submit" value="Login" />}
          <span className={classes['form__signup']}>
            Don’t have an account?{' '}
            <Link to="/sign-up" className={cn(classes['signup-link'])}>
              Sign Up.
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
