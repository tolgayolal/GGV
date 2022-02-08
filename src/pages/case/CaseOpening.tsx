import { motion, useAnimation, useMotionValue } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import ItemCase from '../../components/items/ItemCase';
import { SteamIcon } from '../../icons/HeaderSvg';
import { calcShuffle, toAbsoluteUrl } from '../../util/util';
import { openCaseAnimation } from '../../util/animation';
import DropItemModal from './DropItemModal';
import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../contexts/AuthContext';
import { Content, ICase } from '../../interfaces/Cases';
import ApiCalls from '../../network/ApiCalls';
import { useMutation, useQueryClient } from 'react-query';
import { IPurchaseCase } from '../../network/PostRequestModels/Acc/Acc';

interface opened {
      array: Content[]
      dropItem: null | Content
}

type Props = {
      isLoading: boolean
      data: ICase
}
const CaseOpening: FC<Props> = ({ isLoading, data }) => {
      const history = useHistory()
      const { isShow, toggle } = useModal()
      const { toggle: loginToggle, user: isAuthenticated }: any = useAuth()
      const [mixed, setMixed] = useState<opened>({ array: data?.contents, dropItem: null })

      const queryClient = useQueryClient()
      const { mutateAsync } = useMutation(ApiCalls.putAccBelongingMoney, { onSuccess: () => queryClient.invalidateQueries(['Get Account Money', isAuthenticated?.email]) })

      //Animation
      const [spinning, setSpinning] = useState<number>(0);
      const [animation, setAnimation] = useState(false);
      const controls = useAnimation();
      const x = useMotionValue(1);


      const resetAnimation = () => {
            setSpinning(0)
            x.set(0)
            setAnimation(true)
      }
      const buyingAnimation = () => {
            resetAnimation()
            controls.set({ scale: 1, y: 20 });
            controls.start(openCaseAnimation);
            // itemlerin pixelleri baz alındı dinamikleştirelecek.
            setSpinning(Math.floor(Math.random() * 230) - 10820);
            setTimeout(() => {
                  setAnimation(false)
                  toggle()
            }, 7000);
      }

      const spin = async () => {
            if (isAuthenticated && data?.price) {
                  try {
                        let purchaseRequest: IPurchaseCase = {
                              email: isAuthenticated.email,
                              price: data?.price
                        }
                        await mutateAsync(purchaseRequest)
                        buyingAnimation()
                  } catch (error: any) {
                        console.log(error?.response?.data.message)
                  }
            }
      }

      useEffect(() => {
            if (data?.contents) {
                  let array = calcShuffle(data?.contents).slice(0, 50);
                  setMixed({ array, dropItem: array[45] })
            }
      }, [data, spinning]);


      return <><div className="container mx-auto px-4 lg:px-32 pt-10 ">
            <div>
                  <div>
                        <button onClick={() => history.push('/')} className="btn py-3 px-5 text-muted bg-light-back lg:flex items-center space-x-3 hidden">
                              <span className="inline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path d="M6.512 13.1122l1.936-1.936-2.816-2.816H15.6v-2.72H5.632l2.816-2.816L6.512.8882.4 7.0002l6.112 6.112z" fill="#7E8494" /></svg>
                              </span>
                              <span className="text-xs">{isLoading ? <Loader className="w-16" /> : 'GERİ'}</span>
                        </button>

                  </div>
                  <div className="mt-5">
                        <div className="bg-light-back rounded-2xl h-40 lg:h-64 overflow-hidden relative">

                              {isAuthenticated && <div className="overflow-hidden h-16 w-16 absolute rotate-45 z-50 left-96">
                                    <div className="bg-orange h-5 w-5 rounded-sm z-auto"></div>
                              </div>}
                              {isLoading && <Loader height={80} y={50} className="mx-auto w-40 h-40 flex relative" />}
                              {
                                    !isAuthenticated ? <img className="h-full mx-auto scale-125" src={toAbsoluteUrl(data?.image)} alt="" />
                                          :
                                          <motion.div
                                                style={{ x }}
                                                animate={{ x: spinning }}
                                                transition={{ ease: [0.17, 0, 0.08, 1], duration: 7 }}
                                                className="flex min-w-max w-[1850px] h-full space-x-1 p-2">
                                                {mixed?.array?.map((item: Content, idx: number) => { return <ItemCase data={item} key={idx} /> })}
                                          </motion.div>
                              }
                              {isAuthenticated && <div className="overflow-hidden h-16 w-16 absolute rotate-45 z-50 left-96">
                                    <div className="bg-orange h-5 w-5 rounded-sm z-auto"></div>
                              </div>}
                        </div>

                  </div>
                  <div className="flex justify-center py-5">
                        {isAuthenticated ?
                              <div>
                                    <button onClick={spin} disabled={animation} className={`btn bg-orange text-lg font-bold text-light-back px-10 py-3 flex items-center space-x-3 ${animation && 'cursor-wait'}`}>
                                          {animation || isLoading ? <Loader className="w-40" /> : <><span className="text-lg font-bold text-white">${data.price}</span><span className="">SATIN AL</span></>}

                                    </button>
                              </div>
                              :
                              <div className="space-y-5">
                                    <div className="bg-orange/25 rounded-xl text-center py-3 px-7 backdrop-blur-lg -mt-20">
                                          <h3 className="text-lg text-orange font-bold">OTURUM AÇMADINIZ!</h3>
                                          <span className="text-white text-base">Kutuları açmak için kullanıcı hesabınıza giriş yapınız</span>
                                    </div>
                                    <button onClick={loginToggle} className="btn bg-orange text-lg font-bold text-light-back px-10 py-3 flex mx-auto">
                                          {isLoading ? <Loader className="w-40" /> :
                                                <><span className="mr-3">
                                                      <SteamIcon />
                                                </span><span>STEAM ÜZERİNDEN GİR</span></>}

                                    </button>
                              </div>}
                  </div>
            </div>
      </div>{mixed?.dropItem && <DropItemModal modalOpen={isShow} closeModal={toggle} buyAgain={spin} data={mixed?.dropItem} />}
      </>
};

export default CaseOpening;


const Loader = (props: JSX.IntrinsicAttributes & IContentLoaderProps & { children?: React.ReactNode; }) => (
      <ContentLoader
            speed={1}
            width='100%'
            height={props.height ?? 20}
            backgroundColor="#22232f"
            foregroundColor="#1b1c24"
            {...props}
      >
            <rect x="0" y={props.y ?? 3} rx="3" ry="3" width="100%" height={props.height ?? 16} />
      </ContentLoader>
)

