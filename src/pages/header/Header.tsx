import React from 'react';
import HeaderBody from './HeaderBody';
import HeaderFooter from './HeaderFooter';
import Live from './Live';

const Header = () => {
      return <div className="">
            <Live />
            {/* <div className="fixed w-full -translate-y-14 lg:translate-y-0 lg:static z-50"> */}
                  <HeaderBody />
            {/* </div> */}
            <HeaderFooter />
      </div>;
};

export default Header;
