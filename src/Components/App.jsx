import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ButtonWhats from './ButtonWhats'
import Menu from './Menu'
import Header from './Header'
import Preco from './Precos'
import Main from './Main'
import Qualidade from './Qualidade'
import FAQ from './FAQ'
import Footer from './Footer'
import Carregando from './Carregando'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ButtonWhats />
              <Menu />
              <Header />
              <Preco />
              <Main />
              <Qualidade />
              <FAQ />
              <Footer />
            </>
          }
        />

        <Route
          path="/carregando"
          element={
            <>
              <Menu />
              <Carregando />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App