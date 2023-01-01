import React from 'react'
import { useGetEventsQuery } from '@/services/eventListService'
import { BasicEvent } from '@/types/EventTypes'

// export interface IEventListPageProps {}

const EventListPage: React.FunctionComponent = () => {
  const { data, error, isLoading } = useGetEventsQuery()
  if (isLoading) return <div>loding events...</div>
  if (error != null) return <div>error at loding events</div>
  return (
    <div>
      {data?.map((event: BasicEvent) => (
        <div key={event.id}>{event.title}</div>
      ))}
    </div>
  )
}

export default EventListPage
