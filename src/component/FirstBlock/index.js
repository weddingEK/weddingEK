import {
  Container,
  Title,
  Names,
  Man,
  Women,
  Data,
  LavanderTop,
  LavanderTopLeft,
  Leaf,
} from "./styles";

export default function FirstBlock() {
  return (
    <Container>
      <LavanderTop />
      <LavanderTopLeft />
      <Leaf />
      <Title>ПРИГЛАШЕНИЕ НА СВАДЬБУ</Title>
      <Names>
        <Man>Егор</Man> <p>и</p> <Women>Екатерина</Women>
      </Names>
      <Data>27 • 07 • 2024</Data>
    </Container>
  );
}
