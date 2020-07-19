import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer dmV2OjEn_IMHBhAuddjrSTLFkMxTZzC7ume_hf9hSDITjWmtwfrCLekg9cRnRGGIKxa-OMdWq37LeplsAZw1-ksHc9Adf2swd9nKHDYaFXWSqmkJxfiAuQim0zYUX3Yx'
    }
});