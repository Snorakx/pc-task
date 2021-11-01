import "./style.scss";
import Wrapper from "./components/Wrapper";
import Button from "./components/atoms/Button";
import Description from "./components/atoms/Description";
import Container from "./components/atoms/Container";
import ButtonsHolder from "./components/molecules/ButtonsHolder";

function App() {
  require('dotenv').config()
  return (
    <Wrapper>
      <Container>
      <Description>Lorem ipsum</Description>
      </Container>
      <ButtonsHolder/>
    </Wrapper>
  );
}

export default App;
