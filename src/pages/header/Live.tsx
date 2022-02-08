import { useState } from 'react';
import LiveItem from '../../components/items/LiveItem';

const Live = () => {
      const [liveList, setLiveList] = useState<boolean>();

      return <div className="flex p-0.5 h-14 sm:h-16 md:h-20 lg:h-28">
            <div className="flex-col space-y-0.5 hidden sm:flex">
                  <button onClick={() => setLiveList(true)} className={`btn bg-light-back py-3 px-4 h-1/2 text-muted text-xs justify-between flex items-center ${liveList && "bg-gradient-to-l from-[#3d2f37] text-orange"}`}>
                        <span className="font-bold mr-3 hidden lg:block">TOP</span>
                        <span >
                              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" width="18" height="16"><path d="M9 .425a.563.563 0 0 0-.5353.3882L6.8204 5.875H1.4979a.562.562 0 0 0-.5347.3882.5649.5649 0 0 0 .2043.6299l4.3052 3.1281-1.6435 5.0611a.563.563 0 0 0 .5347.7368.5623.5623 0 0 0 .331-.1077L9 12.5833l4.3051 3.1281a.5653.5653 0 0 0 .3311.1077.563.563 0 0 0 .5347-.7368l-1.6443-5.0611 4.3059-3.1281a.5643.5643 0 0 0 .2043-.63.5623.5623 0 0 0-.5346-.3881h-5.3226L9.5355.8132A.563.563 0 0 0 9 .425Zm-1.4326.723c-2.301.4473-4.2283 1.9449-5.258 3.977h1.2964c.81-1.2893 2.065-2.2636 3.5515-2.7144l.4101-1.2627Zm2.8653 0 .4101 1.2626c1.4865.4508 2.7415 1.4251 3.5515 2.7144h1.2964c-1.0297-2.0321-2.957-3.5297-5.258-3.977Zm6.0534 6.9235-1.1294.8203c-.0798 1.293-.5466 2.48-1.2868 3.452l.4072 1.2531c1.2484-1.3391 2.023-3.1255 2.023-5.0969 0-.144-.005-.2867-.014-.4285ZM1.514 8.0723A6.7245 6.7245 0 0 0 1.5 8.5c0 1.9714.7746 3.7574 2.023 5.0969l.4065-1.2524c-.7399-.972-1.2063-2.1589-1.2861-3.452L1.514 8.0724Zm5.8938 6.5947-1.1228.8159C7.1276 15.8133 8.0416 16 9 16c.9586 0 1.8725-.1863 2.7151-.5171l-1.1228-.8159c-.5092.1331-1.0417.208-1.5922.208s-1.083-.0749-1.5923-.208Z"></path></svg>
                        </span>
                  </button>
                  <button onClick={() => setLiveList(false)} className={`btn bg-light-back py-3 px-4 h-1/2 text-muted text-xs  flex items-center ${!liveList && "bg-gradient-to-l from-[#3d2f37] text-orange"}`}>
                        <span className="font-bold mr-3 hidden lg:block">HEPSİ</span>
                        <span><svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" width="18" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5345 5.6644c0-1.8233 1.4781-3.3014 3.3014-3.3014 1.8233 0 3.3014 1.4781 3.3014 3.3014 0 1.8233-1.4781 3.3014-3.3014 3.3014-1.8233 0-3.3014-1.478-3.3014-3.3014ZM1.863 13.3357c0-1.8233 1.4781-3.3014 3.3014-3.3014 1.8233 0 3.3014 1.4781 3.3014 3.3014 0 1.8233-1.478 3.3014-3.3014 3.3014-1.8233 0-3.3014-1.4781-3.3014-3.3014Zm8.6715-3.3014c-.5523 0-1 .4477-1 1v3.6028c0 1.1045.8954 2 2 2h2.6028c1.1045 0 2-.8955 2-2v-3.6028c0-.5523-.4477-1-1-1h-4.6028ZM1.863 3.363c0-.5522.4478-1 1-1h4.6028c.5523 0 1 .4478 1 1v3.6028c0 1.1046-.8954 2-2 2H3.863c-1.1045 0-2-.8954-2-2V3.363Z"></path></svg></span>
                  </button>
            </div>
            <div className="w-full mx-0.5 overflow-hidden">
                  <ul className="space-x-0.5 h-full flex">
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />
                        <LiveItem />      
                  </ul>
                  
            </div>
      </div>;
};

export default Live;
