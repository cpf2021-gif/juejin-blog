import React from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import Image from 'next/image';
import {navigationstate} from '../state/navigationstate.js'
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

  const [focu, setFocu] = useRecoilState(navigationstate);

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
            <li
              key={link.id}
              className="mx-4"
              onClick={() => {
                setFocu(link.id);
              }}
            >
              <Link href={link.url}>
                <p
                  className={
                    focu === link.id
                      ? 'text-blue-700'
                      : 'dark:text-white/86 dark:hover:text-white/60'
                  }
                >
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
