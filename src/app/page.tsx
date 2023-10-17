'use client';
import Carousel from 'lib/client/components/Carousel';
import Hero from 'lib/client/components/Hero';
import ProductCard from 'lib/client/components/ProductCard';
import { NextResponse } from 'next/server';
import { useDerivedState } from 'lib/client/hooks';

export function middleware(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-origin', origin);
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default function Home() {
  const derivedState = useDerivedState();
  return (
    <main className="h-screen w-full pb-24 animate-fade-in-down overflow-x-hidden">
      <Hero prod={derivedState[0]} />
      <Carousel prod={derivedState.slice(3, derivedState.length)} />
      <div className="flex justify-center flex-col lg:flex-row  gap-20">
        <ProductCard prod={derivedState[1]} />
        <ProductCard prod={derivedState[2]} />
      </div>
    </main>
  );
}
