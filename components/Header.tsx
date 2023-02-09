import Button from './Button';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='border-b-[1px] border-gray-300'>
      <div className="container flex px-4 justify-around items-center h-14 mx-auto">
        <Navigation />
        <Button />
      </div>
    </header>
  );
}
