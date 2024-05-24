import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 1rem 0;
  text-align: center;
`;

function Footer() {
  return (
    <Wrapper>
      <p>2020 &copy; Thomas Kidane and Sofoniyas Tekalegn. All right reserved.</p>
    </Wrapper>
  );
}

export default Footer;
