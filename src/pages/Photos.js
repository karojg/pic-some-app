import React, {useContext} from 'react'
import Image from '../components/Image'
import { getClass } from '../utils'

import { Context }  from '../context/Context'

const Photos = () => {
    const { allPhotos } = useContext(Context)

    const data = allPhotos.map((img, index) => (
      <Image key={img.id} img={img} className={getClass(index)} />
    ))

    return (
      <main className='photos'>
        {data}
      </main>
    )
}

export default Photos
