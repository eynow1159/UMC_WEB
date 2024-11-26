import * as F from "../style/components/footer.js";

const Footer = () => {
    return (
        <F.Container>
          <F.Wrapper>
            <F.Section to={'/login'}>
                <F.Text>이용약관</F.Text>
            </F.Section>

          </F.Wrapper>

          <SNSLogo to={'/'}>인스타</SNSLogo>
        </F.Container>
      )
}

export default Footer;
