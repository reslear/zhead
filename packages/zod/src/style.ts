// Generated by ts-to-zod
import { z } from 'zod'

export const styleSchema = z.object({
  media: z.string(),
  nonce: z.string(),
  title: z.string(),
  key: z.string(),
  children: z.string(),
})

export const styleEntriesSchema = z.array(styleSchema.partial())
