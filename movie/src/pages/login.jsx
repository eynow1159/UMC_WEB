import * as C from "../style/components/contents.js";
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
      <C.Wrapper></C.Wrapper>
    </C.Container>
  );
};

export default LogIn;