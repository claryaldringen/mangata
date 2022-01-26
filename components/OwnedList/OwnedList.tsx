import useFetch from 'react-fetch-hook'
import { Token } from '../../types'
import { List } from '../List'
import { FC } from 'react'
import ReactLoading from 'react-loading'

type Props = {
  address: string
}

export const OwnedList: FC<Props> = ({ address }) => {
  const { isLoading, data: tokens } = useFetch<Token[]>(
    `/api/owned-tokens/${address}`
  )

  if (isLoading) {
    return (
      <div>
        <ReactLoading color="#0000ff" className="m-auto" />
      </div>
    )
  }
  return <List tokens={tokens} type="balance" />
}
