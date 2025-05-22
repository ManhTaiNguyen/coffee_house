/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react'
import Wrapper from '../wrapper'
import Logo from './logo'
import MobileMenuToggle from './mobile-menu-toggle'
import NavGroup from './nav-group'
import { AnimatePresence } from 'motion/react';
import MobileNav from './mobile-nav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handelClose = () => {
    setIsOpen(false);
  }

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  }

  return <header className='py-8'>
    <Wrapper>
      <div className='flex items-center justify-between'>
        <Logo/>
        <div className='flex gap-6 items-center'>
          <NavGroup />
          <MobileMenuToggle onToggle = {handleToggle} />
        </div>
      </div>
    </Wrapper>
    <AnimatePresence>
      {isOpen && <MobileNav onClose={handelClose}/>}
    </AnimatePresence>
  </header>
}
