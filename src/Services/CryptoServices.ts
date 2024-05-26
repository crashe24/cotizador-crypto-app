import axios from "axios"
import { CryptoPriceSchema, CrytoCurrenciesResponseSchema } from "../Schemas/cripto-schema"
import { Pair } from "../types"

export async function getCryptos () {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
   // console.log('data', Data)
    const result  = CrytoCurrenciesResponseSchema.safeParse(Data)
    if (result.success) {
        return result.data
    }
}


export async function getData (pair:Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
    const { data: {DISPLAY} } = await axios(url )
    //console.log('data-->', DISPLAY[pair.cryptocurrency][pair.currency])
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency])
    //console.log('result-->', result)
    if (result.success) {
        //console.log('result.data--->', result.data)
        return result.data
    }
}
