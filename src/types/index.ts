import {z} from 'zod';
import {CurrecySchema, CrytoCurrencyResponseSchema, PairSchema, CryptoPriceSchema} from '../Schemas/cripto-schema';

export type Currency = z.infer<typeof CurrecySchema>
export type Cryptocurrency = z.infer<typeof CrytoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CrytpPrice = z.infer<typeof CryptoPriceSchema>
