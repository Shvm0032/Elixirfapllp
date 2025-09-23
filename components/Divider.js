import { Import } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


const Divider = () => {
  return (
    <>
     <div className="flex items-center justify-center my-4 px-4">
      {/* Left line */}
      <div className="w-20 h-[2px] bg-gray-600"></div>

      {/* Logo */}
      <div className="mx-4">
        <Image
          src="/Assets/logos/elixir-logo-main.png"
          alt="Logo"
          width={30} 
          height={30} 
          className="object-contain"
        />
      </div>

      {/* Right line */}
      <div className="w-20 h-[2px] bg-gray-600"></div>
    </div>

    
    </>
  )
}

export default Divider