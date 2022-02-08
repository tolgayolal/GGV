import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { TurkeyIcon } from '../../icons/HeaderSvg';


const FlagPopover = () => {
      return <div className="w-full max-w-sm px-4 top-16">
            <Popover className="relative z-20">
                  {(open) => {
                        return (
                              <>
                                    <Popover.Button className="flex bg-light-back px-3 py-1 rounded">
                                          <div className="flex content-center space-x-1 ml-1">
                                                <p className="text-muted text-sm">TR</p>
                                                <span className="flex items-center cursor-pointer">
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.007 10.7073 4.3 9.293 2.8858 6 6.1787l-3.2928-3.293L1.293 4.3 6 9.007Z" fill="#6D6E79" /></svg>
                                                </span>
                                          </div>
                                    </Popover.Button>
                                    <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-200"
                                          enterFrom="opacity-0 translate-y-1"
                                          enterTo="opacity-100 translate-y-0"
                                          leave="transition ease-in duration-150"
                                          leaveFrom="opacity-100 translate-y-0"
                                          leaveTo="opacity-0 translate-y-1"
                                    >
                                          <Popover.Panel className={`absolute z-10 w-14 max-w-lg mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl`}>
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                      <div className="relative gap-1 bg-light-back flex flex-col justify-center p-1">
                                                            <button className="flex rounded hover:bg-back hover:border hover:border-back items-center p-1">
                                                                  <TurkeyIcon />
                                                                  <span className="ml-1 text-muted text-sm">TR</span>
                                                            </button>
                                                            <button className="flex rounded hover:bg-background hover:border hover:border-border-color items-center p-1">
                                                                  <TurkeyIcon />
                                                                  <span className="ml-1 text-muted text-sm">EN</span>
                                                            </button>
                                                      </div>

                                                </div>
                                          </Popover.Panel>
                                    </Transition>
                              </>
                        );
                  }}
            </Popover>
      </div>
};

export default FlagPopover;
