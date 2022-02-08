import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ApiCalls from '../../network/ApiCalls';
import CaseFooter from './CaseFooter';
import CaseOpening from './CaseOpening';

const Case = () => {
      const { caseName }: any = useParams()
      const { data, isLoading, error } = useQuery(['Get Case Byname',caseName], () => ApiCalls.getCaseByName(caseName), { cacheTime: 60000, staleTime: 600000, enabled: !!caseName })

      return <>
            <div className='bg-zero-back'>
                  <CaseOpening data={data?.data} isLoading={isLoading} />
            </div>
            <div>
                  <CaseFooter data={data?.data} isLoading={isLoading} />
            </div>
      </>
};

export default Case;
