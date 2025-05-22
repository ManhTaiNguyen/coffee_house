import { SearchIcon } from 'lucide-react';
import React from 'react'
import { Input } from '../ui/input';

export default function SearchBox() {
  return <div className="flex px-3 rounded-full items-center bg-white border shadow-2xl shadow-primary/75">
    < SearchIcon />
    < Input placeholder='matcha latte' className='border-0 focus:ring-0 active:ring-0'/>
    </div>;
}
