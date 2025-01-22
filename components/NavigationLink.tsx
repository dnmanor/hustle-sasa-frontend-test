import { ChevronDown } from 'lucide-react'
import React from 'react'

export type NavigationItem = {
    name: string;
    url: string;
    nested: boolean;
  };

  
const NavigationLink = ({ link }: { link: NavigationItem }) => {
  return (
    <a href={link.url} key={link.name} className="uppercase flex items-center gap-x-1 hover:underline">
    {link.name}
    {link.nested && <ChevronDown size={16} />}
  </a>
  )
}

export default NavigationLink