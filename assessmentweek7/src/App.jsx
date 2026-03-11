import Card from "./components/Card";
import Button from "./components/Button";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <Card>
        <h2>Abosede Soyinka</h2>
        <p>Frontend Developer</p>
        <p>Passionate about building interactive web applications.</p>

        <Button primary>Follow</Button>
        <br />
        <Button>Message</Button>
      </Card>

    </>
  );
}

export default App;