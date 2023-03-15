import React from 'react'

export default function Menu() {
  return (
    <div className='flex flex-col gap-1 p-2'>
        <a href="/submit" className='underline text-blue-400'>
            To submit page
        </a>
        <a href="/dashboard" className='underline text-blue-400'>
            To Dashboard
        </a>
        <a href="/create-company" className='underline text-blue-400'>
            Create Company
        </a>
        <a href="/create-application" className='underline text-blue-400'>
            Create Application
        </a>
    </div>
  )
}
