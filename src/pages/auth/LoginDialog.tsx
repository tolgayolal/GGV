import { Dialog, Transition } from '@headlessui/react';
import React, { FC, Fragment, useState } from 'react';
import Spinner from '../../components/loading/Spinner';
import { useAuth } from '../../contexts/AuthContext';
import ApiCalls from '../../network/ApiCalls';
import { LoginRequest } from '../../network/PostRequestModels/Auth/LoginRequest';
import { toAbsoluteUrl } from '../../util/util';

type Props = {
      modalOpen: boolean
      closeModal: () => void
}
const LoginDialog: FC<Props> = ({ modalOpen, closeModal }) => {

      const [values, setValues] = useState<LoginRequest>({
            username: '',
            password: ''
      });
      const { setUser }: any = useAuth()
      const [loading, setLoading] = useState<boolean>()
      const [errorMessage, setErrorMessage] = useState<string>();

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name
            const value = e.target.value
            setValues({
                  ...values,
                  [key]: value
            })
      }

      const login = async (e: React.FormEvent) => {
            e.preventDefault()
            try {
                  if (values.username && values.password) {
                        setLoading(true)
                        let loginRequest: LoginRequest = values
                        const res = await ApiCalls.login(loginRequest)
                        if (res) {
                              let { token } = res.data
                              localStorage.setItem('auth', token)
                              setUser(res?.data)
                        }
                        setLoading(false)
                        closeModal()
                  }
            } catch (error: any) {
                  setErrorMessage(error?.response?.data.message)
                  setLoading(false)

            }
      }

      return <Transition appear show={modalOpen} as={Fragment}>
            <Dialog
                  as="div"
                  className="fixed inset-0 z-50 overflow-y-auto"
                  onClose={closeModal}
            >
                  <div className="min-h-screen px-4 text-center bg-zero-back bg-opacity-95">

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

                              <div className="inline-block w-full max-w-md p-6  my-8 overflow-hidden text-left align-middle transition-all transform bg-light-back shadow-xl rounded-2xl">
                                    <div>
                                          <img className="absolute top-0 -z-10" src={toAbsoluteUrl('/media/png/bgModal.png')} alt="" />
                                    </div>
                                    <Dialog.Title
                                          as="h3"
                                          className="text-xl font-medium leading-6 text-muted"
                                    >
                                          Kullanıcı Giriş
                                    </Dialog.Title>
                                    <div className="max-w-md bg-light-back mt-7">
                                          <form onSubmit={login} className="space-y-10">
                                                <label className="flex-1 relative group block cursor-pointer">
                                                      <input
                                                            id='username'
                                                            type='text'
                                                            name='username'
                                                            required
                                                            onChange={handleChange}
                                                            className="h-12 px-4 border border-gray-200 shadow-sm rounded-md w-full transition-colors focus:ring focus:ring-orange focus:border-back peer text-sm pt-3 font-medium" />
                                                      <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-slate-400 transition-all peer-focus:h-7 peer-focus:text-[10px] peer-valid:h-7 peer-valid:text-[10px]">Kullanıcı Adı</span>
                                                </label>
                                                <label className="flex-1 relative group block cursor-pointer">
                                                      <input
                                                            id='password'
                                                            type='password'
                                                            name='password'
                                                            required
                                                            onChange={handleChange}
                                                            className="h-12 px-4 border border-gray-200 shadow-sm rounded-md w-full transition-colors focus:ring focus:ring-orange focus:border-back peer text-sm pt-3 font-medium " />
                                                      <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-slate-400 transition-all peer-focus:h-7 peer-focus:text-[10px] peer-valid:h-7 peer-valid:text-[10px]">Şifre</span>
                                                </label>
                                                <div className="h-1">
                                                      <p className="text-lg text-orange">{errorMessage}</p>
                                                </div>
                                                <div className="mt-4 flex justify-end space-x-2">
                                                      <button
                                                            type="button"
                                                            className="btn inline-flex justify-center px-4 py-2 text-sm font-medium bg-orange border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                            onClick={closeModal}
                                                      >
                                                            İptal
                                                      </button>
                                                      <button
                                                            type="submit"
                                                            disabled={loading}
                                                            className="btn inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-muted border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink"
                                                      >
                                                            Giriş Yap
                                                            {loading && <Spinner />}
                                                      </button>
                                                </div>
                                          </form>



                                    </div>


                              </div>
                        </Transition.Child>
                  </div>
            </Dialog>
      </Transition>
};

export default LoginDialog;
