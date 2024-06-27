import axios from "axios";
import Constant from '../constant';
export const DataUser = async ({agent, username}) => {
    try {
        const data = await axios.post(`${Constant.SERVER_URL}/Member/Balance`, {
            s_agent_code: agent,
            s_username: username,
        });
        return data?.data?.data
    } catch (error) {
    }
};
export const  GetNews= async () => {
    try {
        const data = await axios.get(`${Constant.SERVER_URL}/news?agent=${Constant.AGENT_CODE}`);
        return data?.data?.data
    } catch (error) {
    }
};
export const CheckTokenExpire = async (token) => {
    try {
        const data = await axios.get(`${Constant.SERVER_URL}/Authen/CheckTokenLogin/${token}`);
        return data?.data?.data?.d_session_expire
    } catch (error) {
    }
};


