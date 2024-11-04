import { NavLogo, NavWrapper, NavMenu, MenuButton } from "../style/components/navbar.js";

const Navbar = () => {
    return (
        <NavWrapper>
          <NavLogo to={'/'}>WATCHA</NavLogo>
          <NavMenu>
            <MenuButton to={'/login'} fontSize={'13px'} padding={'0px 12px'} margin={'14px 5px'} hovercolor={'#2C2D2F'}>로그인</MenuButton>
            <MenuButton to={'/sign-up'} fontSize={'13px'} padding={'0px 12px'} margin={'14px 5px'} backcolor={'#F82F62'} hovercolor={'#FF3D6E'}>회원가입</MenuButton>
          </NavMenu>
        </NavWrapper>
      )
}

export default Navbar;
