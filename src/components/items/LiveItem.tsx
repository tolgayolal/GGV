import React from 'react';
import { toAbsoluteUrl } from '../../util/util';

const LiveItem = () => {
      return <li className="shrink-0 relative rounded-sm h-full bg-gradient-to-b from-default to-clip w-20 md:w-36 lg:w-40">
            <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full">
                  <img className='w-16 md:w-20 lg:w-28' src={toAbsoluteUrl('/media/png/weapon.png')} alt="" />
            </div>
            <div className="absolute bottom-0 w-full p-3 hidden md:block">
                  <span className="text-white text-xs font-bold">Hot Rod</span>
            </div>
      </li>
};

export default LiveItem;
