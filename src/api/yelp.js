import * as CONFIG from '../../config'
import axios from 'axios';

export default axios.create({
    baseURL: CONFIG.BASE_URL,
    headers: {
        Authorization: CONFIG.API_KEY
    }
});