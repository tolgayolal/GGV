import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FacebookIcon, GGDROP, InstagramIcon, LiveIcon, MenuIcon, MessengerIcon, SteamIcon, TiktokIcon, TwitterIcon } from '../../icons/HeaderSvg';
import Login from '../auth/Login';
import HeaderBodyAcc from './HeaderBodyAcc';
import PopoverFlag from './HeaderPopovers/PopoverFlag';

const HeaderBody = () => {
      const { user } = useAuth();

      return <div className="container mx-auto flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
                  <div>
                        <Link to="/" title="Ana sayfaya geç">
                              <GGDROP />
                        </Link>
                  </div>
                  <div>
                        <PopoverFlag />
                  </div>
                  <div className="space-x-1 hidden lg:flex">
                        <span className="ml-3"><LiveIcon /></span>
                        <div className="flex flex-col">
                              <span className="text-green-500 font-bold">184</span>
                              <span className="text-muted text-[10px]">ÇEVRİMİÇİ</span>
                        </div>
                  </div>
            </div>
            <div className="flex items-center">
                  {!user && <ul className="lg:flex items-center space-x-3 hidden">
                        <li>
                              <a href=""><FacebookIcon /></a>
                        </li>
                        <li>
                              <a href=""><TiktokIcon /></a>
                        </li>
                        <li>
                              <a href=""><TwitterIcon /></a>
                        </li>
                        <li>
                              <a href=""><InstagramIcon /></a>
                        </li>
                        <li>
                              <a href=""><MessengerIcon /></a>
                        </li>
                  </ul>}
                  <HeaderBodyAcc />
                  <button className="block lg:hidden m-5">
                        <MenuIcon />
                  </button>

            </div>
            <Login />
      </div>;
};

export default HeaderBody;
