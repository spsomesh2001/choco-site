import styled, { keyframes } from "styled-components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export const CheckOutContainer = styled.div`
  padding: 50px 0;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckOutWrapper = styled.div`
  height: 80%;
  min-height: 450px;
  width: 85%;
  padding: 15px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const CheckOutH = styled.h2`
  padding: 15px 10px 5px;
  margin: 0 10px;
  font-size: 2rem;
  border-bottom: 1px solid;
`;

export const CheckOutContent = styled.div`
  min-height: 35%;
  margin: 0 15px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceBreakCon = styled.div`
  height: 50px;
  margin: 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #a4a4a4;
`;

export const BreakLeft = styled.p`
  width: 70%;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const BreakRight = styled.p`
  width: 70px;
  font-size: 1.1rem;
  text-align: ${({ p }) => (p ? "end" : "")};
  padding-right: ${({ p }) => (p ? "5px" : "")};
`;

export const ProceedCon = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const CirCon = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlaceContainer = styled.div`
  width: 100%;
  min-height: 400px;
  border: 3px ridge #843434;
`;

export const CheckContainer = styled.div`
  height: 200px;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clockAnimation = keyframes`
  to {
    stroke-dashoffset: 200;
  }
`;

export const CheckIcon = styled(CheckCircleOutlineIcon)`
  height: 100%;
  width: 100%;
  stroke: #fff;
  fill: transparent;
  stroke-width: 5;
  stroke-dasharray: 200;
  stroke-dashoffset: 0;
  animation: ${clockAnimation} 2s ease-out forwards;
`;

export const CheckText = styled.h2`
  font-size: 1.8rem;
  text-align: center;
`;

export const GoCon = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
