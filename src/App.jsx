import './App.css'
import ButtonItem from "./components/buttons/ButtonItem.jsx";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

        <nav>
          <ButtonItem
              className={"button-header"}
              title = {"to the collection"}
              targetUrl = {"www.google.com"}
          />
          <ButtonItem
              className={"button-header"}
              title = {"shop all bags"}
              targetUrl = {"www.facebook.com"}
          />
          <ButtonItem
              className={"button-header"}
              title = {"pre-orders"}
              targetUrl = {"www.youtube.com"}
          />

        </nav>
      </>
  )
}

export default App
