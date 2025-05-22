import React from 'react'
import UtilityGroup from './utility-group'
import Navigation from './navigation'

export default function NavGroup() {
  return (
    <div className='hidden md:flex gap-6 items-center'>
      <Navigation />
      <UtilityGroup />
    </div>
  )
}
