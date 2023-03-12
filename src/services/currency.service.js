import { axiosService } from "./axios.service";
import { urls } from "../configs";

const currencyService = {
    getEurRates: () => axiosService.get( urls.currency ),
    getUsdRates: () => axiosService( urls.currency + `&base=USD` ),
}

export {
    currencyService
}