import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ColorObj } from '../../interfaces/Cases';
import { ILiveItem } from '../../interfaces/Item';
import { toAbsoluteUrl } from '../../util/util';



type Props = {
      data: ILiveItem
}
const LiveItem: FC<Props> = ({ data }) => {
      const classes = ColorObj[data?.color]
      const clip = ColorObj['clip']

      return <Link
            to={'/case/' + data.caseName}
            style={{ background: `linear-gradient(${classes},${clip})` }}
            className="shrink-0 relative rounded-sm w-20 md:w-36 lg:w-40 group">
                  
            <div className="w-full h-full relative group-hover:-translate-y-28 transition ease-linear duration-200">
                  <div className="absolute flex items-center justify-center top-0 left-0 w-full">
                        <img className='w-16 md:w-20 lg:w-28' src={toAbsoluteUrl(data?.itemPhoto)} alt="" />
                  </div>
                  <div className="absolute bottom-0 w-full p-3 hidden md:block">
                        <span className="text-white text-xs font-bold">{data?.collection}</span>
                  </div>
            </div>
            <div className="w-full h-full relative invisible opacity-0 translate-y-7 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 ease-in-out duration-500">
                  <div className="absolute w-full flex">
                        <span className="text-white text-xs bottom-3 left-5 absolute">{data.owner}</span>
                        <img className="-right-4 -bottom-5 h-28 absolute hidden sm:block" src={toAbsoluteUrl(data.casePhoto)} alt={data.caseName} />
                  </div>
            </div>
      </Link>
};

export default LiveItem;
