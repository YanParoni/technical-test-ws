import NavBar from 'lib/client/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import 'reflect-metadata';
import SideBar from 'lib/client/components/Sidebar';

const inter = Inter({
  variable: '--body-font',
  subsets: ['latin'],
});

const playfair = Roboto_Mono({
  variable: '--title-font',
  weight: '400',
  subsets: ['latin'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Ecommerce WS ',
  description: 'Technical Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/next.svg'/>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-[#FEFEFE]`}
      >
        <NavBar /> 
        <div className='flex flex-row h-full  '>
        <SideBar />
        {children}
        </div>
      </body>
    </html>
  );
}
