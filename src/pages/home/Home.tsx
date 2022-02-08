import { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Case from '../../components/cases/Case';
import { ICase } from '../../interfaces/Cases';
import ApiCalls from '../../network/ApiCalls';
import { toAbsoluteUrl } from '../../util/util';
import Banner from './Banner';

const Home = () => {
      const { data, isLoading, error } = useQuery<AxiosResponse<ICase[]>>(['Get All Cases'], () => ApiCalls.getAllCases(), { staleTime: 300000, refetchOnWindowFocus: false })

      return (
            <main className="">
                  <Banner />
                  <section className="container mx-auto relative z-20 pb-32">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:rid-cols-5 xl:grid-cols-6">

                              {data?.data?.map((item: ICase, idx: number) => {
                                    return <Case data={item} key={idx} />
                              })}

                        </div>
                  </section>
            </main>
      )
};

export default Home;
