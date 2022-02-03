import React from 'react';
import FlagPopover from '../../components/Popover/FlagPopover';
import { FacebookIcon, GGDROP, InstagramIcon, MenuIcon, MessengerIcon, SteamIcon, TiktokIcon, TwitterIcon } from '../../icons/HeaderSvg';

const HeaderBody = () => {
      return <div className="container mx-auto h-20 bg-back flex items-center justify-between">
            <div className="flex items-center">
                  <a href="" title="Ana sayfaya geç">
                        <GGDROP />
                  </a>
                  <div>
                        <FlagPopover />
                  </div>
            </div>
            <div className="flex">
                  <ul className="lg:flex items-center space-x-3 hidden">
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
                  </ul>
                  <button className="btn bg-orange ml-5 flex hover:bg-orange/80">
                        <span className="font-semibold text-base">GİRİŞ</span>
                        <span className="ml-2">
                              <SteamIcon />
                        </span>
                  </button>
                  <button className="block lg:hidden m-5">
                        <MenuIcon />
                  </button>

            </div>
      </div>;
};

export default HeaderBody;
