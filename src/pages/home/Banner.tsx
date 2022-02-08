import React, { useEffect, useState } from 'react';
import { toAbsoluteUrl } from '../../util/util';


var eventTime: any = new Date("07/03/2022 00:00:00");

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var hours = new Date().getHours();
var min = new Date().getMinutes();
var sec = new Date().getSeconds();

const Banner = () => {
      const [localTime, setLocalTime] = useState<any>(`${date + '/' + month + '/' + year + '' + hours + ':' + min + ':' + sec}`);

      useEffect(() => {
            setTimeout(() => {
                  let diffDate = (eventTime - localTime)
                  setLocalTime(diffDate)

            }, 100)
      },[localTime]);


      return <div className="mx-auto text-center">
            <img className="absolute bg-contain bg-no-repeat bg-top bg-clip-content bg-back " src={toAbsoluteUrl('/media/png/home-background.png')} alt="" />
            <div className="pt-16 relative">
                  <div className="text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#ffd2d2] to-[#4f63a7] text-base md:text-[25px] lg:text-[40px] tracking-[1rem] leading-normal">KIŞ</div>
                  <div className="text-white font-bold text-[25px] sm:text-[50px] md:text-[75px] lg:text-[100px] -mt-10 tracking-wide">ETKİNLİĞİ</div>
                  <div className="text-white space-x-2 mb-10">
                        <button className="btn bg-[#6c51ba] font-bold px-5 py-4 rounded-md">ETKİNLİK</button>
                        <button className="btn bg-fuchsia-400 font-bold px-5 py-4 rounded-md">ÖDÜLLER</button>
                  </div>
                  <div className="mb-32 flex justify-center space-x-2">
                        <div className="bg-gray-200 bg-opacity-50 rounded-md flex flex-col py-3 px-4">
                              <span className="text-white text-xl">24</span>
                              <span className="text-light-back text-xs">GÜN</span>
                        </div>
                        <div className="bg-gray-200 bg-opacity-50 rounded-md flex flex-col py-3 px-4">
                              <span className="text-white text-xl">24</span>
                              <span className="text-light-back text-xs">SAAT</span>
                        </div>
                        <div className="bg-gray-200 bg-opacity-50 rounded-md flex flex-col py-3 px-4">
                              <span className="text-white text-xl">24</span>
                              <span className="text-light-back text-xs">DAKİKA</span>
                        </div>
                        <div className="bg-gray-200 bg-opacity-50 rounded-md flex flex-col py-3 px-4">
                              <span className="text-white text-xl">24</span>
                              <span className="text-light-back text-xs">SANİYE</span>
                        </div>
                  </div>
                  <h5 className="text-white font-bold text-3xl">KIŞ KASALARI</h5>
                  <p className="text-muted mb-3">Jeton kazanma fırsatı yakalayın</p>
            </div>
      </div>
};

export default Banner;
