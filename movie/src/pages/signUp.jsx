import * as C from "../style/components/contents.js";
import * as F from "../style/components/form.js";
// import Form from "../style/components/form.js";

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
// TIP: zod를 사용하신다면 @hookform/resolvers/zod 를 import 하시면 됩니다!
import {yupResolver} from '@hookform/resolvers/yup'

import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();

  const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const phoneRegExp = /^[0-9]{11}$/;

  const schema = yup.object().shape({
    email: yup.string().required('empty').matches(emailRegExp),
    password: yup.string().required('empty').min(8).max(16),
    passwordCheck: yup.string().required('empty').oneOf([yup.ref('password'), null]),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");
  const passwordCheckValue = watch("passwordCheck");
  const nameValue = watch("name");
  const phoneValue = watch("phone");

  const signUpSubmit = (data) => {
  // const onSubmit = (data) => {
      console.log('폼 데이터 제출')
      console.log(data);
      navigate("/");
  }

  return (
    <C.Container>
      <C.Title>SignUp</C.Title>
      <F.SignForm onSubmit={handleSubmit(signUpSubmit)}>
      {/* <Form
        type="email"
        placeholder="이메일 | example@gmail.com"
        register={register("email")}
        value={emailValue}
        isSubmitted={isSubmitted}
        error={errors.email}
      />

      <Form
        type="password"
        placeholder="비밀번호 | 8~16자"
        register={register("password")}
        value={passwordValue}
        isSubmitted={isSubmitted}
        error={errors.password}
      />

      <Form
        type="password"
        placeholder="비밀번호 재입력"
        register={register("passwordCheck")}
        value={passwordCheckValue}
        isSubmitted={isSubmitted}
        error={!passwordCheckValue || passwordCheckValue !== passwordValue}
      />

      <Form
        type="text"
        placeholder="이름"
        register={register("name")}
        value={nameValue}
        isSubmitted={isSubmitted}
        error={errors.name}
      />

      <Form
        type="text"
        placeholder="휴대전화번호"
        register={register("phone")}
        value={phoneValue}
        isSubmitted={isSubmitted}
        error={errors.phone}
      /> */}


        <F.InputDiv>
          <F.InputText type='password' placeholder='비밀번호 재입력' maxLength={16} {...register("passwordCheck")}
          $border={(!passwordCheckValue && isSubmitted) || (passwordCheckValue && (passwordCheckValue !== passwordValue)) ? '2px solid #e73e3e' : '2px solid black'}
          />
          {(passwordCheckValue || isSubmitted) && 
            <F.ValidationIcon src={!passwordCheckValue || (passwordCheckValue !== passwordValue)? '/src/icon/x_circle.svg' : '/src/icon/check_circle.svg'}/>
          }
        </F.InputDiv>

        <F.InputDiv style={{margin: '20px 0 0'}}>
          <F.InputText type='text' placeholder='이름' maxLength={30} {...register("name")}
          $border={(nameValue || isSubmitted) && errors.name ? '2px solid #e73e3e' : '2px solid black'}
          />
          {(nameValue || isSubmitted) && 
            <F.ValidationIcon src={errors.name? '/src/icon/x_circle.svg' : '/src/icon/check_circle.svg'}/>
          }
        </F.InputDiv>
        <F.InputDiv>
          <F.InputText type='text' placeholder='휴대전화번호' maxLength={11} {...register("phone")}
          $border={(phoneValue || isSubmitted) && errors.phone ? '2px solid #e73e3e' : '2px solid black'}/>
          {(phoneValue || isSubmitted) && 
            <F.ValidationIcon src={errors.phone? '/src/icon/x_circle.svg' : '/src/icon/check_circle.svg'}/>
          }
        </F.InputDiv>


        <F.Submit $opacity={!isValid ? '0.3' : '1'}>회원가입</F.Submit>
      </F.SignForm>

      <p style={{color: 'red'}}>{errors.email?.message}</p>
      <p style={{color: 'red'}}>{errors.password?.message}</p>
      <input type={'submit'}/>
    </C.Container>
  );
};

export default SignUp;