import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import { useLanguage } from '../../context/LanguageContext';
import { MenuIcon, SettingsSuggestIcon } from '../UI/icons';

const pages = [
  'Norwegian Verbs',
  'English Verbs',
  'English Grammar',
  'Useful Sentences',
];
const settings = ['About'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();

  const handleNavigate = (page: string) => () => {
    switch (page) {
      case 'English Verbs':
        setLanguage('English');
        navigate('/english-verbs');
        break;
      case 'Norwegian Verbs':
        setLanguage('Norsk');
        navigate('/norwegian-verbs');
        break;
      case 'English Grammar':
        navigate('/english-grammar');
        break;
      case 'About':
        navigate('/about');
        break;
      case 'Useful Sentences':
        navigate('/useful-sentences');
        break;
      default:
        break;
    }
  };

  const menuItemClass =
    'block w-full px-4 py-2 text-center text-base text-ink data-[focus]:bg-black/5';

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex min-h-16 items-center">
          <div className="h-[50px] w-[50px] shrink-0 rounded-full">
            <img
              src={icon}
              alt="Verbs Logo"
              className="h-full w-full rounded-full"
            />
          </div>

          {/* Desktop brand */}
          <Link
            to="/"
            className="mx-2 hidden font-mono text-xl font-bold tracking-[.1rem] text-inherit no-underline md:flex"
          >
            Verbs Pool
          </Link>

          {/* Mobile menu */}
          <div className="flex grow md:hidden">
            <Menu as="div" className="relative">
              <MenuButton
                aria-label="open navigation menu"
                className="rounded-full p-3 text-inherit transition-colors hover:bg-white/10"
              >
                <MenuIcon />
              </MenuButton>
              <MenuItems
                anchor="bottom start"
                className="z-50 mt-1 min-w-40 rounded bg-white py-2 shadow-lg focus:outline-none"
              >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <button
                      type="button"
                      onClick={handleNavigate(page)}
                      className={menuItemClass}
                    >
                      {page}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>

          {/* Mobile brand */}
          <Link
            to="/"
            className="mr-2 flex grow font-mono text-2xl font-bold tracking-[.1rem] text-inherit no-underline md:hidden"
          >
            Verbs Pool
          </Link>

          {/* Desktop nav */}
          <nav className="hidden grow md:flex">
            {pages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={handleNavigate(page)}
                className="my-4 block rounded px-3 py-2 text-sm uppercase text-white transition-colors hover:bg-white/10"
              >
                {page}
              </button>
            ))}
          </nav>

          {/* Settings menu */}
          <div className="shrink-0">
            <Menu as="div" className="relative">
              <MenuButton
                aria-label="open settings"
                className="rounded-full p-1 transition-colors hover:bg-white/10"
              >
                <SettingsSuggestIcon className="text-white" />
              </MenuButton>
              <MenuItems
                anchor="bottom end"
                className="z-50 mt-3 min-w-40 rounded bg-white py-2 shadow-lg focus:outline-none"
              >
                {settings.map((page) => (
                  <MenuItem key={page}>
                    <button
                      type="button"
                      onClick={handleNavigate(page)}
                      className={menuItemClass}
                    >
                      {page}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ResponsiveAppBar;
