import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer NMdMmUObjAtx-HVSduxuZF56QRqWSsyXihelUmrea2U1FJdk946-A0LJABAiq5y2lZABprgeAu2AGfDlTRGoyZqOipcfbMmzKBLU7vj9KOQIl89XqVmSfkJsjvpfXnYx'
    }
});
