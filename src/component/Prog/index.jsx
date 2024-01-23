import { Container, Times, Time, Text } from "./styles";

export default function Prog() {
  return (
    <Container>
      <Times>
        <Time>14:40</Time>
        <Text>Сбор гостей</Text>
      </Times>
      <Times>
        <Time>15:00</Time>
        <Text>Выездная церемония</Text>
      </Times>
      <Times>
        <Time>15:30</Time>
        <Text>Начало банкета</Text>
      </Times>
    </Container>
  );
}
