import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion';
import { FC, Fragment } from 'react';
import { Content } from '../../interfaces/Cases';
import { toAbsoluteUrl } from '../../util/util';

type Props = {
      buyAgain: () => void
      modalOpen: boolean
      closeModal: () => void
      data: Content
}
const DropItemModal: FC<Props> = ({ modalOpen, closeModal, buyAgain, data }) => {

      const handleAgain = () => { buyAgain(); closeModal() }
      
      return <Transition appear show={modalOpen} as={Fragment}>
            <Dialog
                  as="div"
                  className="fixed inset-0 z-50 overflow-y-auto"
                  onClose={closeModal}
            >
                  <div className="min-h-screen px-4 text-center">

                        <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                        >
                              <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                              className="inline-block h-screen align-middle"
                              aria-hidden="true"
                        >
                              &#8203;
                        </span>
                        <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                        >

                              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-light-back shadow-xl rounded-2xl">
                                    <div>
                                          <img className="absolute -top-1 -z-10" src={toAbsoluteUrl('/media/png/bgModal.png')} alt="" />
                                    </div>
                                    <Dialog.Title
                                          as="h3"
                                          className="text-lg font-medium leading-6 text-muted"
                                    >
                                          {data.item} - {data.collection} Kazandınız

                                          <motion.img
                                                animate={{ x: 0, opacity: 1}}
                                                initial={{ x: 200, opacity: 0.1 }}
                                                transition={{ delay: 0.5 }}
                                                className="mx-auto w-40" src={toAbsoluteUrl(data.itemPhoto)} alt="" />
                                    </Dialog.Title>
                                    <div className="mt-2">
                                          <p className="text-sm text-orange">
                                                Kasa içersinden elde ettiğiniz eşyanızı alınız veya Steam fiyatı ile web sitemizde satın ve uygun fiyatlarla kutuları açmaya devam edin !

                                          </p>

                                    </div>

                                    <div className="mt-4 flex justify-end space-x-2">
                                          <button
                                                type="button"
                                                className="btn inline-flex justify-center px-4 py-2 text-sm font-medium bg-orange border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                onClick={handleAgain}
                                          >
                                                Tekrar Oyna
                                          </button>
                                          <button
                                                type="button"
                                                className="btn inline-flex justify-center px-4 py-2 text-sm font-medium bg-muted border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink"
                                                onClick={closeModal}
                                          >
                                                Tamam
                                          </button>
                                    </div>
                              </div>
                        </Transition.Child>
                  </div>
            </Dialog>
      </Transition>
};

export default DropItemModal;
