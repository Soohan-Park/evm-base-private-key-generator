import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: teal;
  margin-bottom: 5vh;
  position: fixed;
`;
const Title = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  padding-left: 1vw;
  font-size: 1.2rem;
  color: #eeeeee;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Private Key Generator</Title>
    </Wrapper>
  );
}

export default Header;
