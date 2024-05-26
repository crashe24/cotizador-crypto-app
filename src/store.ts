import { create } from 'zustand';
import { Cryptocurrency, CrytpPrice, Pair } from './types';
import { devtools } from 'zustand/middleware';
import { getCryptos, getData } from './Services/CryptoServices';



type CryptoStoreType = {
    cryptoCurrencies: Cryptocurrency[]
    result: CrytpPrice
    loading: boolean
    fetchCrypto: () => Promise<void>
    fetchData: (pair:Pair) =>  Promise<void>
}

export const useCryptoStore = create<CryptoStoreType>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {} as CrytpPrice,
    loading: false,
    fetchCrypto: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async(pair) => {
        set(()=>({
            loading:true
        }))   
        const result = await getData(pair)
        set(()=>({
            result,
            loading:false
        }))   
    }

})))