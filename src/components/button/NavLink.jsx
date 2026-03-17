'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({location,children}) => {
    const path =usePathname();
  
  return (
    <Link href={location} className={`${ path.startsWith(location) && "text-primary"} font-bold`} >{children}</Link>
  );
};

export default NavLink;