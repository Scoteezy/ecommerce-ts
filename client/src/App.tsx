import Header from "./components/Header"
import { Container } from "./components/UI/Container"
import AppRouter from "./components/AppRouter"
function App() {
  return (
    <>
      <Header/>
      <Container>
        <AppRouter/>
      </Container>
    </>
  )
}

export default App
