'use client';
import { usePathname } from 'next/navigation';
import { useProductStore } from 'lib/client/storage';
import Link from 'next/link';

const CategoriesList = () => {
  const { categories, setActiveCategorie, activeCategorie } = useProductStore();
  return (
    <div className="h-screen ">
      <ul className=" flex-col  list-disc 	">
        {categories.map((product, i) => (
          <li
            key={`${product.description}, ${i}`}
            className="p-2  text-[#212427] cursor-pointer font-600 text-lg font-body hover:animate-pulse	transition hover:ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={() => setActiveCategorie(product)}
          >
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProfileList = () => {
  const options = ['Company Profile', 'Logout'];
  return (
    <div className="h-full">
      <ul className=" flex-col gap-6  list-outside	">
        {options.map((option, i) => (
          <li
            key={`${option}, ${i}`}
            className="p-2  text-[#212427] cursor-pointer font-600 text-lg font-body hover:animate-pulse	transition hover:ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
const SideBar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const navContent = isHome ? <CategoriesList /> : <ProfileList />;
  const { sidebarOpen } = useProductStore();

  return (
    <>
      {sidebarOpen && (
        <div
          className={`${
            sidebarOpen ? 'animate-slideIn' : 'hidden'
          } duration-300 h-screen pt-4    bg-white lg:flex shadow-md shrink-0 center items-center flex-col w-60`}
        >
       {isHome &&   <Link  className="flex lg:hidden p-2 text-[#212427] cursor-pointer font-600 text-base lg:text-lg font-body hover:animate-pulse transition hover:ease-in-out hover:-translate-y-1 hover:scale-110"
          href={{ pathname: '/admin' }}>
              Login
          </Link>
          }
          {navContent}
        </div>
      )}
    </>
  );
};

export default SideBar;
