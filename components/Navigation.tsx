import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jjblog from '@/public/jjtb.svg';

export default function Navigation() {
  const links = [
    {
      id: 'index',
      url: '/',
      content: '首页',
    },
    {
      id: 'pins',
      url: '/pins',
      content: '沸点',
    },
    {
      id: 'events',
      url: '/events',
      content: '活动',
    },
  ];
  return (
    <div className="flex">
      <Link className="flex" href="/">
        <Image
          className="mr-1"
          src={jjblog}
          alt="稀土掘金"
          width={30}
          height={22}
        />
        <p className="font-semibold">稀土掘金</p>
      </Link>
      <ul className="flex">
        {links.map((link) => {
          return (
            <li key={link.id} className="mx-4">
              <Link href={link.url}>
                <p className="dark:text-white/86 dark:hover:text-white/60">
                  {link.content}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
