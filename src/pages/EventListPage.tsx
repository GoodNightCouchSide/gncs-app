import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// export interface IEventListPageProps {}

const EventListPage: React.FunctionComponent = () => {
  const [message, setMessage] = useState('')
  const { number } = useParams()
  useEffect(() => {
    if (number != null) {
      setMessage(`The number is ${number}`)
    } else {
      setMessage('No number was provided')
    }
  }, [number])
  const navigate = useNavigate()
  return (
    <div>
      <p>is are event list component</p>

      <p>{message}</p>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}

export default EventListPage
