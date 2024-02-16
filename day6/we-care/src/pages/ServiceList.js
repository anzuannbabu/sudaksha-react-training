import React from 'react'
import  Fetcher  from '../hooks/Fetcher'
import { Link } from 'react-router-dom'

function ServiceList() {
    const {data} = Fetcher('https://jsonplaceholder.typicode.com/users')
  return (
   <>
     <div>ServiceList</div>
    <ul>
        {data.map(_ => <>
        <li key={_.id}> {_.name}</li>
        </>)}
    </ul>
   </>
  )
}

export default ServiceList