'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({location,children}) => {
    const path =usePathname();
    const isActive = location=='/' ? path=='/':path.startsWith(location)
  return (
    <Link href={location} className={`${isActive&& "text-primary"} font-bold`} >{children}</Link>
  );
};

export default NavLink;