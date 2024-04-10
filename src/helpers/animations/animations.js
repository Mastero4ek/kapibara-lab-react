import styled, { keyframes } from 'styled-components';
import { fadeInRightBig, jello, fadeIn, fadeInUp } from 'react-animations';

const jelloAnimation = keyframes`${jello}`;
const fadeInRightBigAnimation = keyframes`${fadeInRightBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const FadeInRightBigDiv = styled.div`
  animation: .5s ${fadeInRightBigAnimation};
`;

export const JelloDiv = styled.div`
  animation: .5s ${jelloAnimation} infinite;
`;

export const FadeInDiv = styled.div`
  animation: .5s ${fadeInAnimation};
`;

export const FadeInUpDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;