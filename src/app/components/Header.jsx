"use client"; 
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from './ContextProvider';

const Header = () => {
  const { cart, wishlist} = useAppContext();
 return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo Section */}
      <Link href="/" className="text-xl font-bold text-gray-800">
        ShopEasy
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
      </nav>

      {/* Shopping Cart Section */}
      <div className="flex items-center space-x-4">
      <Link href="/wishlist" className="relative">
          <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-gray-800" />
         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{wishlist.length}
          </span> 
        </Link>
        <Link href="/cart" className="relative">
          <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-gray-800" />
         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
           {cart.length}
          </span> 
        </Link>
        <Link href="/account" className="text-gray-600 hover:text-gray-900">Account</Link>
      </div>
    </header>
  );
};

export default Header;
