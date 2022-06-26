import React from 'react';
import { HeroList } from '../heroes/HeroList'

export const DcPage = () => {

  return ( 
    <div>
        <h1 className='mb-4'>Dc Page</h1>

        <HeroList publisher='DC Comics' />
    </div>
  )
}
