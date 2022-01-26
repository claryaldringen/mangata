import { shallow } from 'enzyme'
import { OwnedList } from '../OwnedList'
import useFetch from 'react-fetch-hook'
import { List } from '../List'
import ReactLoading from 'react-loading'

jest.mock('react-fetch-hook', () => jest.fn())

describe('Given a OwnedList component', () => {
  it('should render loader', () => {
    ;(useFetch as jest.Mock).mockReturnValueOnce({ isLoading: true })
    const wrapper = shallow(<OwnedList address="s0mEteSt1dDreSs" />)
    expect(useFetch).toHaveBeenCalledWith('/api/owned-tokens/s0mEteSt1dDreSs')
    expect(wrapper.contains(<ReactLoading color="#0000ff" className="m-auto" />)).toBeTruthy()
  })

  it('should render list', () => {
    ;(useFetch as jest.Mock).mockReturnValueOnce({ isLoading: false, data: [] })
    const wrapper = shallow(<OwnedList address="s0mEteSt1dDreSs2" />)
    expect(useFetch).toHaveBeenCalledWith('/api/owned-tokens/s0mEteSt1dDreSs2')
    expect(wrapper.contains(<List tokens={[]} type="balance" />)).toBeTruthy()
  })
})
