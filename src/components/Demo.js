import styled from "styled-components";
import { BLACK, MOBILE, TERTIARY_COLOR } from "../styles";
const Demo = () => {
  return (
    <div>
      <h1>Style Component Demo</h1>
      <Button>click</Button>
      <Responsive>
        <Card />
        <Card />
        <Card />
        <Card />
      </Responsive>
    </div>
  );
};
const Responsive = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  width: 100px;
  display: flex;
  background: ${TERTIARY_COLOR};
  color: white;
  padding: 25px;
  cursor: pointer;

  &:hover {
    background: red;
  }
`;
const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  border: 1px solid ${BLACK};
  background: ${TERTIARY_COLOR};

  @media (max-width: ${MOBILE}) {
    background: red;
  }
`;

export default Demo;
