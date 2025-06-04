'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faCartShopping, faGear, faHouse, faImage, faUser } from '@fortawesome/free-solid-svg-icons';

function AdminSideMenu(){
     const [isOpen, setIsOpen] = useState(true);
    return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Admin</h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <nav className="space-y-4">
        
          <Link href="/admin/users" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FontAwesomeIcon icon={faBox} />
            {isOpen && <span>products</span>}
          </Link>
          <Link href="/admin/settings" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FontAwesomeIcon icon={faImage} />
            {isOpen && <span>Gallery</span>}
          </Link>
            <Link href="/admin/settings" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
            <FontAwesomeIcon icon={faCartShopping} />
            {isOpen && <span>Ordered Products</span>}
          </Link>
        </nav>
      </div>

      {/* Main Content Placeholder */}
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-semibold">Admin Panel Content</h2>
      </div>
    </div>
  );
}
export default AdminSideMenu;