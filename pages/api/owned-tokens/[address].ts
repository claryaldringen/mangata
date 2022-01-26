import type { NextApiRequest, NextApiResponse } from 'next'
import { Mangata, TAsset } from 'mangata-sdk'

const getOwnedTokens = async (req: NextApiRequest, res: NextApiResponse<TAsset[]>) => {
  const mangata = Mangata.getInstance(process.env.WS_API_URL as string)

  const tokens = await mangata.getOwnedTokens(req.query.address as string)

  res
    .status(200)
    .json(tokens ? Object.keys(tokens).map((key) => tokens[key]) : [])
}

export default getOwnedTokens
