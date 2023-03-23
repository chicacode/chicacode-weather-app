import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
      <nav>
        <ul className="flex justify-between bg-primary-light px-4 py-4">
          
            <button
              className={'mr-6 text-light hover:cursor-pointer hover:text-indigo ml-6'}
              onClick={() => navigate('/')}
            >
              Home
            </button>
            <button
              className={'mr-6 text-light hover:cursor-pointer hover:text-indigo'}
              onClick={() => navigate('/about')}
            >
              About
            </button>
            <button
              className={'mr-6 text-light hover:cursor-pointer hover:text-indigo'}
              onClick={() => navigate('/weather')}
            >
              Weather
            </button>

            {/* <button
              className={'mr-6 text-light hover:cursor-pointer hover:text-indigo'}
              onClick={() => navigate('/favorites')}
            >
              Favorites
            </button> */}
            <button
              className={'mr-6 text-light hover:cursor-pointer hover:text-indigo'}
              onClick={() => navigate('/settings')}
            >
              Settings
            </button>
         
        </ul>
      </nav>
    );
  };
  
  export default Navbar;