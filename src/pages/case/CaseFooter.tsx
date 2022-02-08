import React, { FC } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import ItemContentCase from '../../components/items/ItemContentCase';
import { Content, ICase } from '../../interfaces/Cases';

type Props = {
      isLoading: boolean
      data: ICase
}
const CaseFooter: FC<Props> = ({ isLoading, data }) => {
      const mockArray = Array.apply(null, Array(20)).map(function () {})

      return <div className="bg-light-back pt-5 lg:pt-10">
            <div className="container mx-auto px-4 lg:px-32">
                  <h1 className="text-white text-lg lg:text-2xl font-bold text-center">{isLoading ? <Loader className="w-64 mx-auto"/> : 'KUTUNUN İÇİNDEKİLER'}</h1>
                  <div className="grid auto-cols-max pt-3 lg:pt-10 pb-8 gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">

                        {isLoading ?
                              mockArray.map((item: any, idx) => { return <LoadingItem key={idx} /> })
                              :
                              data?.contents.map((item: Content, idx: number) => { return <ItemContentCase data={item} key={idx} /> })
                        }

                  </div>
            </div>
      </div>

};

export default CaseFooter;


const LoadingItem = () => {
      return <div className={`rounded relative bg-gradient-to-b from-default to-clip h-32`}>
            <div className="flex justify-center py-3 px-5">
                  <span className="absolute mx-auto top-5">
                        <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 66 66"><path d="M65.7272 29.667c-.1595-1.2133-1.1962-2.103-2.3924-2.103h-26.875c-.638.0809-1.1962.4853-1.5152 1.0515-3.5886 6.228-3.5886 6.228-.638 12.8604.5583 1.2133 2.1532 1.4559 2.7912 1.4559 3.5886 0 12.6799.0809 12.6799.0809l-.2393.4853c-.5582.8897-1.1962 1.6986-1.9937 2.4265-4.2266 4.0442-9.4102 6.3898-15.3913 6.0663-6.938-.3236-11.9621-4.206-15.152-10.0296-3.3494-6.0662-8.9317-8.2501-14.7533-10.2721-1.0367-.4045-2.1532.4044-2.233 1.5367-.319 8.7354 4.3862 20.7062 15.3116 27.5812 12.1216 7.7648 27.6724 6.7133 38.7573-2.4265 9.3305-7.7648 12.9989-19.9781 11.6432-28.7135ZM24.4179 18.0198c2.5519-1.0515 5.2634-1.9412 7.9748-2.103 6.7785-.4853 12.2014 2.2647 16.428 7.6839.638.8089 1.6747 1.0515 2.5519.728l9.5697-3.7207c1.276-.4853 1.8342-1.9412 1.1962-3.1544C56.3967 6.2108 44.5143-.7451 31.675.0636 21.3875.549 13.0938 4.9167 6.7937 13.005c-.7975 1.0515-.319 2.5883.8772 2.9927 1.914.7279 3.7482 1.2941 5.4229 2.1838 3.9076 2.0221 7.4962 1.4559 11.3241-.1617Zm-8.0545 5.5809c.3987.1618 1.0367-.4044 1.5152-.647l-.1595-.6471c-4.2266-1.6177-8.4532-3.3162-12.6799-4.9339-.4784-.1618-1.1962.2427-1.7544.4044l.0797.8089c4.3064 1.6985 8.6925 3.3971 12.9989 5.0147ZM.9721 29.0199c4.2267 1.6986 8.533 3.3971 12.8394 5.0148l.4785-.4044c-.319-.5662-.4785-1.3751-.957-1.5368-4.1469-1.6986-8.4532-3.3162-12.6799-4.9339l-.638.4044c.3988.5662.5583 1.2941.957 1.4559Zm2.1532-6.7133c3.6684 1.375 7.4165 2.8309 11.0849 4.2868 1.1165.4853 1.6747.2427 1.6747-1.2132l-13.238-5.0957c-.957 1.1324-.7178 1.6177.4784 2.0221Zm-1.3557 3.2353a394.3251 394.3251 0 0 0 12.4406 4.853l.4785-.4044c-.319-.4853-.4785-1.375-.957-1.5368-4.067-1.6176-8.1342-3.1544-12.1216-4.7721l-.5582.2427c.2392.5661.319 1.4559.7177 1.6176Z" fill="#111216" fill-opacity=".2" /></svg>
                  </span>
            </div>
            <div className="w-24 bottom-0 absolute p-3">
                  <Loader />
                  <Loader />
            </div>
      </div>
}

const Loader = (props: JSX.IntrinsicAttributes & IContentLoaderProps & { children?: React.ReactNode; }) => (
      <ContentLoader
            speed={1}
            width='100%'
            height={30}
            backgroundColor="#22232f"
            foregroundColor="#1b1c24"
            {...props}
      >
            <rect x="0" y="8" rx="5" ry="5" width="100vw" height="16" />
      </ContentLoader>
)