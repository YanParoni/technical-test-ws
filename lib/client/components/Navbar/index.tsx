'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AdjustmentsVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useProductStore } from 'lib/client/storage';

const NavBar = () => {
  const { setSidebarOpen, sidebarOpen } = useProductStore();
  const pathname = usePathname();
  const style =
    pathname === '/' ? 'flex justify-center relative' : 'flex justify-center relative';
  const navTitle =
    pathname === '/' ? 'My Products | Ecommerce' : 'My Products | Admin';

  return (
    <nav className="py-4 shadow-sm ">
      <div className={style}>
        {pathname === '/' && (
          <Link href={{ pathname: '/admin' }}>
            <button className="absolute hidden lg:flex left-12 py-2 px-8 text-white bg-[#212427] rounded-md hover:animate-pulse transition hover:ease-in-out hover:-translate-y-1 hover:scale-110">
              Login
            </button>
          </Link>
        )}

        {sidebarOpen ? (
          <button
            className="absolute flex top-0 left-2   justify-center lg:hidden lg:left-8 py-2 px-2  text-white bg-[#212427] rounded-md hover:animate-pulse transition hover:ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <XMarkIcon className="w-4 md:w-6" />
          </button>
        ) : (
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute flex  top-0 left-2 justify-center lg:hidden  lg:left-8 py-2 px-2  text-white bg-[#212427] rounded-md hover:animate-pulse transition hover:ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <AdjustmentsVerticalIcon className="w-5 md:w-6" />
          </button>
        )}

        <span className="pixel-antialiased cursor-default text-[#212427] font-600 text-lg sm:text-2xl md:text-4xl font-title tracking-wide">
          {navTitle}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
