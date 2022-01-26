import { FC, useCallback, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { OwnedList } from '../OwnedList/OwnedList';

export const Owned: FC = () => {
  const [addressValue, setAddressValue] = useState<string>()
  const [address, setAddress] = useState<string>()

  const handleBlur = useCallback(
    (e) => {
      setAddressValue(e.target.value)
    },
    [setAddressValue]
  )

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setAddress(addressValue)
  }, [setAddress, addressValue])

  return (
    <div>
      <Form className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Address:</Form.Label>
          <Form.Control onBlur={handleBlur} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      {address && <OwnedList address={address} />}
    </div>
  )
}
