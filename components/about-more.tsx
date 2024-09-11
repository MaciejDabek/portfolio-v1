'use client'
import { useState } from 'react'
import { Button } from './ui/button'

export default function AboutMore() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div>
      {showMore && <div>LALA</div>}
      <Button variant='secondary' onClick={() => setShowMore(s => !s)}>
        {!showMore ? 'Show more' : 'Show less'}
      </Button>
    </div>
  )
}
