import { Text, Rounds, Round } from "./styles";

export default function Colors() {
  return (
    <>
      <Text>
        Мы очень старались сделать праздник красивым и будем рады, если в своих
        нарядах вы поддержите цветовую гамму нашей свадьбы!
      </Text>
      <Rounds>
        <Round color={"#0E172F"} />
        <Round color={"#899BB1"} />
        <Round color={"#808080"} />
        <Round color={"#C0C0C0"} />
      </Rounds>
    </>
  );
}
