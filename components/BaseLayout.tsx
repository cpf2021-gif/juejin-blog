import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  );
}
