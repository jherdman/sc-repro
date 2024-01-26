import { Box } from "@nulogy/components";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 18rem;
  font-weight: bold;
`;

const SmallTitle = styled.h2(() => ({
  fontSize: "14rem",
  fontWeight: "bold",
}));

const OptionLabel = styled.span(() => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const MyBox = styled(Box)(() => ({
  position: "fixed",
}));

function App() {
  return (
    <>
      <div>
        <Title>Hello</Title>
        <SmallTitle>World</SmallTitle>
        <OptionLabel>Balskdjf</OptionLabel>
        <MyBox>Inside</MyBox>
      </div>
    </>
  );
}

export default App;
