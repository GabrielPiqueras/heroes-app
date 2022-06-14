import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelPage = () => {

  return (
    <div>
        <h1 className='mb-4'>Marvel Page</h1>

        <HeroList publisher='Marvel Comics' />
    </div>
  )
}
