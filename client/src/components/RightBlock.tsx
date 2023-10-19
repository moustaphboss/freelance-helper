import React from 'react'
import Illustration from './Illustration'

const RightBlock = () => {
  return (
    <div className="right-block w-1/2 overflow-hidden bg-teal-800 ml-4 rounded-3xl p-8 pt-40 flex flex-col items-center">
      
        <div className="text-4xl text-white mb-4">The freelancer's best friend</div>
        <div className="text-xl text-white mb-32">Organize all your freelance projects</div>

        <div className="">
          <Illustration/>
        </div>

      </div>
  )
}

export default RightBlock