import "./style.scss";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import Description from "./components/Description";
import Container from "./components/Container";

function App() {
  return (
    <Wrapper>
      <Container>
      <Description>Lorem ipsum</Description>
      </Container>
      <Container>
        <Button>Accept</Button>
        <Button>Reject</Button>
      </Container>
    </Wrapper>
  );
}

export default App;
