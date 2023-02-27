import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'paekodfy',
  dataset: 'production',
  apiVersion: '2023-02-26',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
