import { shallow } from 'enzyme'

import { List } from './List'
import ReactLoading from 'react-loading'

const tokensMockIssuance = [
  {
    id: '1',
    symbol: 'MGA',
    name: 'Mangata',
    issuance: '1234567',
  },
  {
    id: '3',
    symbol: 'mBTC',
    name: 'mBTC',
    issuance: '1234567000',
  },
]

const tokensMockBalance = [
  {
    id: '1',
    symbol: 'MGA',
    name: 'Mangata',
    balance: '66',
  },
  {
    id: '3',
    symbol: 'mBTC',
    name: 'mBTC',
    balance: '12',
  },
]

describe('Given a Owned component', () => {
  it('should render two rows with issuance', () => {
    const wrapper = shallow(<List tokens={tokensMockIssuance} />)
    expect(
      wrapper.contains(<ReactLoading color="#0000ff" className="m-auto" />)
    ).toBeFalsy()
    expect(wrapper.contains(<th>Issuance</th>)).toBeTruthy()
    expect(
      wrapper.contains(
        <tr>
          <td>1</td>
          <td>Mangata</td>
          <td>MGA</td>
          <td>1234567</td>
        </tr>
      )
    ).toBeTruthy()
    expect(
      wrapper.contains(
        <tr>
          <td>3</td>
          <td>mBTC</td>
          <td>mBTC</td>
          <td>1234567000</td>
        </tr>
      )
    ).toBeTruthy()
  })

  it('should render loading list', () => {
    const wrapper = shallow(<List isLoading />)
    expect(
      wrapper.contains(<ReactLoading color="#0000ff" className="m-auto" />)
    ).toBeTruthy()
  })

  it('should render two rows with balance', () => {
    const wrapper = shallow(<List tokens={tokensMockBalance} type="balance" />)
    expect(
      wrapper.contains(<ReactLoading color="#0000ff" className="m-auto" />)
    ).toBeFalsy()
    expect(wrapper.contains(<th>Balance</th>)).toBeTruthy()
    expect(wrapper.contains(<td>66</td>)).toBeTruthy()
    expect(wrapper.contains(<td>12</td>)).toBeTruthy()
  })
})
