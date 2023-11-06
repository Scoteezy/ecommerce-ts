import Header from "./components/Header"
import { Container } from "./components/UI/Container"
import MainPage from "./pages/MainPage"
import {useState,useEffect} from 'react'
import items from './data/mock.json'
function App() {
  const [filteredProducts, setFilteredProducts] = useState(items);

  const handleSearch = (search?:string, category?:string)=>{ 
      let data = [...items];

      if(category){
          data = data.filter(d => d.category.includes(category))
      }

      if(search) { 
          data = data.filter(c=>c.name.toLowerCase().includes(search.toLowerCase()))
      }

      setFilteredProducts(data);
  }

    useEffect(()=>{
      handleSearch();
      
    //eslint-disable-next-line
    },[items])
  return (
    <>
      <Header handleSearch={handleSearch}/>
      <Container>
        <MainPage items={filteredProducts}/>
      </Container>
    </>
  )
}

export default App
