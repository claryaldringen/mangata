import type { NextApiRequest, NextApiResponse } from 'next'
import { Mangata, TAssetInfo } from 'mangata-sdk'
import BN from 'bn.js'

type TokenInfo = TAssetInfo & { issuance: BN }

const getLiquidityTokens = async (
  req: NextApiRequest,
  res: NextApiResponse<TokenInfo[]>
) => {
  const mangata = Mangata.getInstance(process.env.WS_API_URL as string)

  const tokens = await mangata.getLiquidityTokens()

  const data = await Promise.all(
    Object.keys(tokens).map(async (key) => {
      const issuance = await mangata.getTotalIssuance(tokens[key].id)
      return { ...tokens[key], issuance }
    })
  )

  res.status(200).json(data)
}

export default getLiquidityTokens