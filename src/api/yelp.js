import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6s8DRNHc2K-O0Cs89KfU0GLrdmQuT4WMC3yEgiGPCSSyfv36ZMSQOd_AmINtyOZ5Zq3Z0_peb6trhyR4v0G1632xSHygHiNg9m2dtt9zUp82GDTSNLivPagzZNqNXnYx',

    }
})
