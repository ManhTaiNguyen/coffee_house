import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/">
      <Image height={30} width={150} src="/logo.png" 
      alt={"logo"} />
    </Link>
  )
}
