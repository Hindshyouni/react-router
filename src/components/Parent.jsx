import React from 'react'
import Ghild from './Ghild'

export default function Parent(Props) {
  return (
   <>
   <div>
     {Props.Children}
   </div>
   </>
  )
}
