import * as N from "../style/components/navbar.js";

const Navbar = () => {
    return (
        <N.Container>
          <N.Logo to={'/'}>EYNOW</N.Logo>
          <N.Wrapper>
            <N.Button to={'/login'}>
              <N.Text>로그인</N.Text>
            </N.Button>
            <N.Button to={'/signUp'}>
              <N.Text>회원가입</N.Text>
            </N.Button>
          </N.Wrapper>
        </N.Container>
      )
}

export default Navbar;
