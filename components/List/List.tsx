import { Table } from 'react-bootstrap'
import { FC } from 'react'
import ReactLoading from 'react-loading'
import { Token } from '../../types'

type Props = {
  tokens?: Token[]
  isLoading?: boolean
  type?: 'issuance' | 'balance'
}

export const List: FC<Props> = ({
  tokens,
  isLoading = false,
  type = 'issuance',
}) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>{type === 'issuance' ? 'Issuance' : 'Balance'}</th>
      </tr>
    </thead>
    <tbody>
      {tokens &&
        tokens.map((token) => (
          <tr key={`bridge_${token.id}`}>
            <td>{token.id}</td>
            <td>{token.name}</td>
            <td>{token.symbol}</td>
            <td>{type === 'issuance' ? token.issuance : token.balance}</td>
          </tr>
        ))}
      {isLoading && (
        <tr>
          <td colSpan={4}>
            <div className="text-center">
              <ReactLoading color="#0000ff" className="m-auto" />
            </div>
          </td>
        </tr>
      )}
    </tbody>
  </Table>
)
