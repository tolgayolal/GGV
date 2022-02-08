import axios from 'axios'
import { Endpoints } from './Endpoints'
import {
  LoginRequest,
  RegisterRequest,
} from './PostRequestModels'
import { IPurchaseCase } from './PostRequestModels/Acc/Acc'

var httpClient = axios.create({
  httpsAgent: {
    rejectUnauthorized: false,
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

var httpClientFormData = axios.create({
  httpsAgent: {
    rejectUnauthorized: false,
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
})
httpClient.defaults.timeout = 500000
httpClientFormData.defaults.timeout = 500000

httpClient.interceptors.response.use(
  (res) => res,
  (err) => {
    try {
      if (err?.response?.data?.statusCode === 500) {
        //Handle 500
      }
    } catch (interceptorError) {
      // Do not sent it to Sentry
    } finally {
      return Promise.reject(err)
    }
  }
)

httpClientFormData.interceptors.response.use(
  (res) => res,
  (err) => {
    try {
      if (err?.response?.data?.statusCode === 500) {
        //Handle 500
      }
    } catch (interceptorError) {
      //Do not sent it to Sentry
    } finally {
      return Promise.reject(err)
    }
  }
)
interface IApiCalls { }

class ApiCalls implements IApiCalls {
  private server_link: string;
  public token: string;
  public logout: () => void;
  constructor() {
    // this.server_link = "http://localhost:5000/"; //local
    this.server_link = "ggval-backend-nig08xeja-tarikciplak.vercel.app"; //product
    this.token = "not set";
    this.logout = () => { }
  }

  ressetToken = () => {
    const newHttpClient = axios.create({
      httpsAgent: {
        rejectUnauthorized: false
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    newHttpClient.defaults.timeout = 500000;

    httpClient = newHttpClient;
  }

  setToken = (token: string) => {
    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    httpClientFormData.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    httpClient.interceptors.response.use((res) => res, (err) => {
      try {
        if (err?.response?.data?.statusCode === 401) {
          this.logout();
        }
        if (err?.response?.data?.statusCode === 500) {
          //Handle 500
        }
      }
      catch (interceptorError) {
        //Do not sent it to Sentry
      }
      finally {
        return Promise.reject(err);
      }
    })
    httpClientFormData.interceptors.response.use((res) => res, (err) => {
      try {
        if (err?.response?.data?.statusCode === 401) {
          this.logout();
        }
        if (err?.response?.data?.statusCode === 500) {
          //Handle 500
        }
      }
      catch (interceptorError) {
        //Do not sent it to Sentry
      }
      finally {
        return Promise.reject(err);
      }
    })
  }

  setLogout = (func: () => void) => {
    this.logout = func;
  }

  //Auth
  login = (loginRequest: LoginRequest) => {
    return httpClient.post(this.server_link + Endpoints.User.Login, loginRequest);
  }

  register = (registerRequest: RegisterRequest) => {
    return httpClient.post(this.server_link + Endpoints.User.Register, registerRequest);
  }

  getUserDetails = (token?: string) => {
    return httpClient.post(this.server_link + Endpoints.User.Me, { token })
  }

  //Case
  getAllCases = () => {
    return httpClient.get(this.server_link + Endpoints.Case.GetAllCase);
  }
  getCaseByName = (caseName: string) => {
    return httpClient.get(this.server_link + Endpoints.Case.GetCaseByName + caseName)
  }


  //Acc
  getAccBelongingMoney = (email: string | undefined) => {
    return httpClient.get(this.server_link + Endpoints.Acc.GetMoney + email)
  }
  putAccBelongingMoney = (data: IPurchaseCase) => {
    return httpClient.put(this.server_link + Endpoints.Acc.UpdateMoney, data)
  }
}

export default new ApiCalls()
