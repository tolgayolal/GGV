import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { useQuery } from 'react-query';
import { useAuth } from '../../contexts/AuthContext';
import { SteamIcon } from '../../icons/HeaderSvg';
import ApiCalls from '../../network/ApiCalls';

const HeaderBodyMoney = () => {
      const { authLoading, toggle, user, logout } = useAuth();

      const { data, error, isLoading } = useQuery(['Get Account Money', user?.email], () => ApiCalls.getAccBelongingMoney(user?.email), { cacheTime: 50000, staleTime: 50000, enabled: !!user })

      if (error) {
            return <div>...Error</div>
      }

      if(authLoading || isLoading ) {
            return <Loader />
      }

      if (!user) {
            return <button onClick={toggle} className="btn py-1 px-4 lg:py-3 lg:px-7 bg-orange ml-5 flex hover:bg-orange/80 max-h-12 items-center">
                  <span className="font-semibold">GİRİŞ</span>
                  <span className="ml-2">
                        <SteamIcon />
                  </span>
            </button>
      }
      
      return <div>
            <p className="text-white font-bold text-sm lg:text-xl ml-3">{user?.username}</p>
            <div className="flex items-center justify-end space-x-2">
                  <span className="text-orange sm:text-xs lg:text-xl animate-pulse font-bold">{data?.data.toFixed(2)} €</span>
                  <button onClick={logout}>
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                  </button>
            </div>
      </div>

};

export default HeaderBodyMoney;

const Loader = (props: JSX.IntrinsicAttributes & IContentLoaderProps & { children?: React.ReactNode; }) => (
      <ContentLoader
            speed={1}
            width='75'
            height={70}
            backgroundColor="#22232f"
            foregroundColor="#1b1c24"
            {...props}
      >
            <rect x="0" y={10} rx="3" ry="3" width="100%" height={40} />
      </ContentLoader>
)

