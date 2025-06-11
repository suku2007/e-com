"use client"
import { usePathname } from "next/navigation";

function ShowChildren({children}){
        const pathname = usePathname();
      
    
    return(
        <div className = {pathname.includes('/admin') ? "adminContentWrapper" : ''}>{children}</div>
    );
}
export default ShowChildren;