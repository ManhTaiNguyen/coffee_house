import React from 'react'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'

export default function Cart() {
  return (
    <div className="relative">
        <PiShoppingCartSimpleLight className="text-3x1" />
        <span className="absolute right-0 top-1 rounded-full bg-primary h-2 w-2"></span>
    </div>
  )
}
