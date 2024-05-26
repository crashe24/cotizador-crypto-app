import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
    const result = useCryptoStore((state)=> state.result )
    const loading = useCryptoStore((state)=> state.loading )
    //console.log('loading', loading)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);
    
  return (
    <div className="result-wrapper">
       {loading ? <Spinner />: hasResult && (
        <>
            <h2>Cotización</h2>
            <div className="result">
                <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt={result.PRICE} />
                <div >
                    <p>El precio es de <span>{result.PRICE}</span></p>
                    <p>Ultima actualizacion <span>{result.LASTUPDATE}</span></p>
                    <p>Ultimo cambio en las 24 horas <span>{result.CHANGEPCT24HOUR}</span></p>
                    <p>El precio mas alto del dia  <span>{result.HIGHDAY}</span></p>
                    <p>El precio mas bajo del dia  <span>{result.LOWDAY}</span></p>
                </div>
            </div>
        </>
       )} 
    </div>
  );
}
