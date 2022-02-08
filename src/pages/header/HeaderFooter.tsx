import { url } from 'inspector';
import React from 'react';
import { toAbsoluteUrl } from '../../util/util';

const HeaderFooter = () => {
      return <div className="h-16 hidden md:flex">
            <div className="container mx-auto bg-zero-back h-20 p-1.5 rounded-xl backdrop-blur-xl flex relative z-10">
                  <a href="" className="relative w-48 bg-light-back rounded-lg hover:bg-light-back/70">
                        <img className="object-cover absolute h-full" src={toAbsoluteUrl('/media/png/header-footer__bonusses.png')} alt="" />
                        <span className="text-muted absolute top-3 right-3 text-xs">BONUSLAR</span>
                  </a>
                  <a href="" className="flex items-center space-x-2 ml-1 px-5 text-white">
                        <span>
                              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26" height="26"><path d="m23.9655 17.9822-3.2132-1.8362 2.4976-7.493a.8121.8121 0 0 0-1.1342-.983l-5.6994 2.8497-2.3872-6.2075a.8123.8123 0 0 0-.7583-.5206.8123.8123 0 0 0-.7583.5206l-2.3752 6.1761L4.993 7.6824a.81.81 0 0 0-.917.0959.813.813 0 0 0-.2372.891l2.4884 6.9675-3.7792 2.3617a.8139.8139 0 0 0-.3814.689c0 .28.1446.5405.3819.689l4.3333 2.7083a.8122.8122 0 0 0 .4307.1235h2.86l.6608-1.625-1.5286-.917c-.4837-.2904-.4263-1.0092.0975-1.2188l1.4311-.5725-.5785-1.7355c-.1733-.52.3938-.975.864-.6928l1.3395.8033.5157-1.8043c.163-.5709.9723-.5709 1.1353 0l.5157 1.8043 1.1689-.779c.5184-.3455 1.1494.2433.8401.7844l-.9257 1.6196 1.6873.5622c.5769.1923.6332.9858.0894 1.2578l-1.7767.8883 1.0833 1.625h1.8959a.8121.8121 0 0 0 .3948-.1024l4.875-2.7083a.8122.8122 0 0 0 .0082-1.4154Z"></path></svg>
                        </span>
                        <span className="text-white text-inherit">
                              Yükseltme
                        </span>
                  </a>
                  <a href="" className="flex items-center space-x-2 px-5 border-r border-l border-gray-800 text-white">
                        <span>
                              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26" height="26"><path d="M14.896 1.0834a.812.812 0 0 0-.8125.8125v1.4144c.391.1133.7643.2435 1.0833.3947.1874.0888.3672.1772.5417.2655V1.8959a.8121.8121 0 0 0-.8125-.8125Zm.8125 2.8871v4.967c0 .0564-.0094.1099-.0159.164-.0818.67-.6466 1.1902-1.3383 1.1902-.748 0-1.3542-.6061-1.3542-1.3542 0-.6548.4653-1.201 1.0834-1.3266V3.3103c-1.4977-.4333-3.2672-.5998-3.3484-.602-.2969-.0124-.5806.1521-.7279.4137l-7.195 12.7958a.8156.8156 0 0 0 .0243.8369c.066.1029 1.6473 2.5387 4.4412 4.1101 2.795 1.5714 5.6984 1.6572 5.8208 1.6599h.0191a.8124.8124 0 0 0 .7077-.4147l7.1951-12.7958a.8111.8111 0 0 0-.0233-.8358c-.0574-.0888-1.256-1.9239-3.3886-3.4352-.0634-.0481-.8487-.5402-1.9-1.0727Zm5.4166 7.9219-6.1191 10.882c-.1089.1933-.2466.3631-.4031.511 3.328-.064 5.9647-1.3783 6.0779-1.4357a.8126.8126 0 0 0 .4443-.7247v-9.2326Zm-9.4739.2973a.807.807 0 0 1 .4634.1015c.3906.2205.5294.7155.31 1.1066l-1.7043 3.031a.8131.8131 0 0 1-.7089.4147.8088.8088 0 0 1-.3978-.1047.8128.8128 0 0 1-.31-1.1066l1.7044-3.031a.8127.8127 0 0 1 .6432-.4115Z"></path></svg>
                        </span>
                        <span className="text-white text-inherit">
                              Sözleşmeler
                        </span>
                  </a>
            </div>
      </div>

};

export default HeaderFooter;
