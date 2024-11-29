import * as C from "../style/components/contents.js";
import * as F from "../style/components/form.js";

import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate()

  const emailRegExp = 
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const schema = yup.object().shape({
    email: yup.string().required('empty').matches(emailRegExp),
    password: yup.string().required('empty').min(8).max(16),
  })

  const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitted } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  
  const emailValue = watch('email');
  const passwordValue = watch('password');

  const loginSubmit = (data) => {
    console.log('로그인')
    console.log(data)
    navigate('/', { replace: true })
  }
  
  useEffect(() => {
    document.title = `EYNOW | 로그인`
  })

  return (
    <C.Container>
      <C.Title>LogIn</C.Title>
      <C.Wrapper>
        <F.SignForm onSubmit={handleSubmit(loginSubmit)}>
        
        <F.InputDiv>
          <F.InputText type='email' placeholder='이메일 | example@gmail.com' {...register("email")}
          $border={ (emailValue || isSubmitted) && errors.email ? '2px solid #e73e3e' : '2px solid black'}
          />
          {(emailValue || isSubmitted) && 
            <F.ValidationIcon src={errors.email? '/src/icon/x_circle.svg' : '/src/icon/check_circle.svg'}/>
          }
        </F.InputDiv >
        <F.InputDiv>
          <F.InputText type='password' placeholder='비밀번호 | 8~16자' maxLength={16} {...register("password")}
          $border={ (passwordValue || isSubmitted) && errors.password ? '2px solid #e73e3e' : '2px solid black'}/>
          {(passwordValue || isSubmitted) && 
            <F.ValidationIcon src={errors.password?  '/src/icon/x_circle.svg' : '/src/icon/check_circle.svg'}/>
          }
        </F.InputDiv>
        <F.Submit $opacity={!isValid ? '0.3' : '1'}>로그인</F.Submit>
        
        </F.SignForm>
      </C.Wrapper>
    </C.Container>
  );
};

export default LogIn;