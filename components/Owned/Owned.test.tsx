import { shallow } from 'enzyme'
import { Owned } from './Owned'
import { Button, Form } from 'react-bootstrap'
import { OwnedList } from '../OwnedList'

describe('Given a Owned component', () => {
  it('should render OwnedList component with address param', () => {
    const preventDefault = jest.fn()
    const stopPropagation = jest.fn()
    const wrapper = shallow(<Owned />)
    wrapper.find(Form.Control).simulate('blur', {
      target: { value: 's0mE1ddress' },
    })
    wrapper.find(Button).simulate('click', { preventDefault, stopPropagation })
    expect(preventDefault).toHaveBeenCalled()
    expect(stopPropagation).toHaveBeenCalled()
    expect(wrapper.find(OwnedList).prop('address')).toBe('s0mE1ddress')
  })
})
