import "./App.css";
import { Segment } from "semantic-ui-react";
import HeaderText from "./components/HeaderText";
import anything, {
  AppContainer,
  Transparent,
  yo,
} from "./components/ExportImportDemo";
import { bigNumAdd } from "./helper/Math";
import Projects from "./components/Projects";

function App() {
  yo();
  anything();
  const doMath = () => {
    let result = bigNumAdd(1, 2);
  };

  return (
    <AppContainer>
      <HeaderText fSize="large">My Portfolio</HeaderText>
      <Segment as={Transparent} onClick={doMath}>
        <HeaderText fSize="meduim">My Projects</HeaderText>
        <Projects />
      </Segment>
      <Segment as={Transparent}>
        <HeaderText fSize="small">Contact</HeaderText>
      </Segment>
    </AppContainer>
  );
}

export default App;
