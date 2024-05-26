import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  
  const fetchCrypto = useCryptoStore((state)=> state.fetchCrypto )
  
  useEffect(() => {
      fetchCrypto()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='app-title'>
          Cotizador de <span> Criptomonedas</span>
        </div>
        <div className='content'>
          <CriptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
