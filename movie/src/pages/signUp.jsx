import * as C from "../style/components/contents.js";

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
// TIP: zod를 사용하신다면 @hookform/resolvers/zod 를 import 하시면 됩니다!
import {yupResolver} from '@hookform/resolvers/yup'

const SignUp = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(16).required(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return (
      <C.Container>
        <C.Title>SignUp</C.Title>

        <C.Wrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type={'email'} {...register("email")}/>
              // register 한 이름에 맞게 연결해주세요!
              <p style={{color: 'red'}}>{errors.email?.message}</p>
              
              <input type={'password'} {...register("password")}/>
              <p style={{color: 'red'}}>{errors.password?.message}</p>

              <input type={'password'} {...register("password")}/>
              <p style={{color: 'red'}}>{errors.password?.message}</p>
              
              <input type={'submit'}/>
          </form>
        </C.Wrapper>
      </C.Container>
    );
};

export default SignUp;