import { z } from 'zod';

export const CurrecySchema = z.object({
    code: z.string(),
    name: z.string(),
})

export const CrytoCurrencyResponseSchema = z.object({
        CoinInfo : z.object({
            FullName: z.string(),
            Name: z.string()
        })
    })



export const CrytoCurrenciesResponseSchema = z.array(CrytoCurrencyResponseSchema)

export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})
// export const CrytoCurrencyResponseSchema = z.array(
//     z.object({
//         CoinInfo : z.object({
//             FullName: z.string(),
//             Name: z.string()
//         })
//     })

// )

