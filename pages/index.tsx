import type { NextPage } from 'next'
import Head from 'next/head'
import { Mangata } from 'mangata-sdk'
import { Container, Row, Col } from 'react-bootstrap'
import useFetch from 'react-fetch-hook'
import { List } from '../components/List'
import { useMemo } from 'react'
import { Token } from '../types'
import { Owned } from '../components/Owned/Owned'

type Props = {
  bridgeTokens: Token[]
}

const Home: NextPage<Props> = ({ bridgeTokens }) => {
  const { isLoading, data: liquidityTokens } = useFetch<Token[]>(
    '/api/liquidity-tokens'
  )

  const tokens = useMemo(
    () =>
      liquidityTokens ? [...bridgeTokens, ...liquidityTokens] : bridgeTokens,
    [bridgeTokens, liquidityTokens]
  )

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className="my-3">
          <Row>
            <Col>
              <h2>User owned tokens</h2>
              <Owned />
            </Col>
            <Col md={6}>
              <h2>Tokens in Mangata network</h2>
              <List tokens={tokens} isLoading={isLoading} />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const mangata = Mangata.getInstance(process.env.WS_API_URL as string)

  const bridgeTokens = await mangata.getBridgeTokens()

  const tokens = await Promise.all(
    Object.keys(bridgeTokens).map(async (key) => {
      const issuance = await mangata.getTotalIssuance(bridgeTokens[key].id)
      return { ...bridgeTokens[key], issuance: issuance.toJSON() }
    })
  )

  return { props: { bridgeTokens: tokens } }
}

export default Home
