import Header from "./components/Header"
import { Container } from "./components/UI/Container"
import MainPage from "./pages/MainPage"

function App() {

  return (
    <>
      <Header/>
      <Container>
        <MainPage/>
      </Container>
    </>
  )
}

export default App
