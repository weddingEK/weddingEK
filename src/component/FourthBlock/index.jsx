import {
  Container,
  Info,
  Title,
  Text,
  Bg2,
  Times,
  Timing,
  Time,
  Circle,
  Im,
  Times2,
  Line,
  Dot,
  Dot2,
  Bg3,
  Bg4,
  Bg5,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";
import closh from "./assets/closh.png";
import pin from "./assets/place.png";

export default function FourthBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);
  const [isLoadedText, setIsLoadedText] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewport1, isInViewportText]);

  return (
    <Container>
      <Bg2 />
      <Bg3 />
      <Bg4></Bg4>
      <Bg5></Bg5>
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Программа
            <br /> дня
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br /> <br /> <br />
          </Title>
        )}
        {isLoadedText ? (
          <Timing key='hText' ref={refText}>
            <Times>
              <Circle>
                <Im src={closh} />
              </Circle>
              <Time>14:30</Time>
              <Text>
                Сбор
                <br />
                гостей
              </Text>
            </Times>
            <Line>
              <Dot />
              <Dot2 />
            </Line>
            <Times2>
              <Circle>
                <Im src={pin} />
              </Circle>
              <Time>16:00</Time>
              <Text>
                 Начало
                <br />
                свадебнного
                <br />
                ужина
              </Text>
            </Times2>
          </Timing>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
      </Info>
    </Container>
  );
}
