import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="l-header fixed w-full top-0 left-0 z-[100] bg-white shadow-md">
      <nav className="nav h-12 flex justify-between items-center px-4 md:px-8">
        <div>
          <a href="#" className="nav__logo text-[hsl(224,56%,12%)] font-semibold">Jogendra</a>
        </div>
        
        <div className={`nav__menu md:static absolute top-12 right-0 w-4/5 h-full p-8 bg-[hsl(224,56%,12%)] transition-all duration-500 md:flex md:items-center md:w-auto md:p-0 md:bg-transparent ${showMenu ? 'right-0' : '-right-full'}`}>
          <ul className="nav__list md:flex md:gap-6">
            {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
              <li key={item} className="nav__item mb-4 md:mb-0">
                <a href={`#${item.toLowerCase()}`} className="nav__link text-white md:text-[hsl(224,56%,12%)] hover:text-[hsl(224,89%,60%)] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle md:hidden text-[hsl(224,56%,12%)] text-2xl cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}