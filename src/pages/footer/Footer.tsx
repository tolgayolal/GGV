import React from 'react';
import { KeySvg, LogoSvg } from '../../icons/FooterSvg';
import { FacebookIcon, InstagramIcon, MessengerIcon, TiktokIcon, TwitterIcon } from '../../icons/HeaderSvg';
import { toAbsoluteUrl } from '../../util/util';

const Footer = () => {
      return <div className="container mx-auto mt-24 relative px-6 text-xs sm:text-base">
            <div className="flex flex-col md:flex-row grow">
                  <div>
                        <div className="mb-7 flex pt-5 items-center">
                              <div className="">
                                    <LogoSvg />
                              </div>
                              <div className="pl-3 mt-2 sm:pl-11">
                                    <h2 className="text-white font-bold text-lg">© 2018-2022 GGDROP</h2>
                                    <p className="text-white/75">En iyi CS:GO kasaları</p>
                              </div>
                        </div>
                        <div className="pl-6 xl:pl-28">
                              <ul className="flex flex-row md:flex-col space-y-0 space-x-5 md:space-x-0 md:space-y-3">
                                    <li className="text-muted text-sm">
                                          <a href="">
                                                Kullanıcı Sözleşmesi
                                          </a>
                                    </li>
                                    <li className="text-muted text-sm">
                                          <a href="">
                                                Gizlilik Sözleşmesi
                                          </a>
                                    </li>
                                    <li className="text-muted text-sm">
                                          <a href="">
                                                İletişim
                                          </a>
                                    </li>
                                    <li className="text-muted text-sm">
                                          <a href="">
                                                SSS
                                          </a>
                                    </li>
                              </ul>
                        </div>
                  </div>
                  <div className="bg-transparent sm:bg-light-back rounded-xl lg:rounded-2xl xl:rounded-[80px] p-2 sm:p-16 flex grow ml-0 mt-2 lg:ml-12 ">
                        <div className='flex flex-wrap gap-10 max-w-xl '>
                              <div className="flex">
                                    <span>
                                          <KeySvg />
                                    </span>
                                    <div className="ml-2">
                                          <span className="text-white font-bold text-sm md:text-2xl block leading-none">9.226.143</span>
                                          <span className="text-sm text-muted">AÇILAN KASA SAYISI</span>
                                    </div>
                              </div>
                              <div className="flex ">
                                    <span>
                                          <KeySvg />
                                    </span>
                                    <div className="ml-2">
                                          <span className="text-white font-bold text-sm md:text-2xl block leading-none">9.226.143</span>
                                          <span className="text-sm text-muted">AÇILAN KASA SAYISI</span>
                                    </div>
                              </div> <div className="flex">
                                    <span>
                                          <KeySvg />
                                    </span>
                                    <div className="ml-2">
                                          <span className="text-white font-bold text-sm md:text-2xl block leading-none">9.226.143</span>
                                          <span className="text-sm text-muted">AÇILAN KASA SAYISI</span>
                                    </div>
                              </div> <div className="flex">
                                    <span>
                                          <KeySvg />
                                    </span>
                                    <div className="ml-2">
                                          <span className="text-white font-bold text-sm md:text-2xl block leading-none">9.226.143</span>
                                          <span className="text-sm text-muted">AÇILAN KASA SAYISI</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between py-0 sm:py-20 px-0 sm:px-12">
                  <div className="flex items-center">
                        <div className="text-muted/25 text-sm hidden md:block">Sosyal Medya</div>
                        <div className="flex items-center justify-center sm:justify-start ml-10 p-4 sm:p-0">
                              <ul className="flex items-center space-x-3">
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

                        </div>
                  </div>
                  <div className="flex">
                        <div className="py-2 px-5 border rounded-lg border-dashed border-rose/75 text-rose hidden lg:block">
                              <a type='e-mail' href="mailto:ytarikciplak.com">
                                    <span>
                                          <svg className='h-6 w-6 inline mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M10.36 11.71 3.19 6.6201C3.98 5.3501 5.4 4.5 7 4.5h10c1.6 0 3.01.8401 3.81 2.1101L13.66 11.69c-1.01.67-2.31.6701-3.3.0201Zm11.12-3.1099-6.68 4.74c-.86.57-1.84.8498-2.81.8498-.96 0-1.92-.2798-2.76-.8398l-6.71-4.75c-.01.13-.02.2699-.02.3999v6c0 2.48 2.02 4.5 4.5 4.5h10c2.48 0 4.5-2.02 4.5-4.5V9c0-.13-.01-.2699-.02-.3999Z" fill="#934C4C" /></svg>
                                    </span>
                                    ytarikciplak@gmail.com
                              </a>
                        </div>
                        <div className="text-sm text-muted/50 ml-10 md:max-w-sm">(910) 436-4718 213 Spear Dr Fort Bragg,Crescent, Ellesmere Port, Cheshire, United Kingdom, North Carolina(NC), 28307</div>
                  </div>
            </div>
            <img className="absolute max-w-xl max-h-[550px] -top-20 right-10 hidden lg:block z-10" src={toAbsoluteUrl('/media/png/character.png')} alt="" />

      </div>
};

export default Footer;
