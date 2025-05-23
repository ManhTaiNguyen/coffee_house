/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuIcon } from 'lucide-react';
import React from 'react'

export default function MobileMenuToggle({
    onToggle,
}: {
    onToggle: () => void;
}) {
  return (
    <button onClick={onToggle} className="lg:hidden cursor-pointer">
      <MenuIcon className="h-8 w-8" />
    </button>
  )
}
