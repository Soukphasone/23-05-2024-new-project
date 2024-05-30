import axios from "axios";
import { useHistory } from "react-router-dom";
import Constant from "../constant";
import { EncriptBase64 } from "../helper";
import { DataLocalStorage, TokenLocalStorage } from "../helper";
import { showSuccessAlert } from "../helper/SweetAlert";
const LoginController = () => {
	const history = useHistory();
	// ==================> handleLogin <=================
	const handleLogin = async (username, password, setLoading) => {
		try {
			const { data } = await axios.post(`${Constant.SERVER_URL}/Authen/Login`, {
				agentCode: Constant.AGENT_CODE,
				username,
				password,
				ip: "1.2.3.4",
			});
			// console.log("data?.data: ", data?.data)
			if (data?.statusCode === 0) {
				localStorage.setItem(Constant.LOGIN_TOKEN_DATA, data.data.token);
				localStorage.setItem(Constant.TOKEN_EXPIRE, data.data.d_session_expire);
				localStorage.setItem(Constant.DATA_PROFILE, JSON.stringify(data?.data?.info?.profile))
				localStorage.setItem(Constant.DATA_BANK_LIST, JSON.stringify(data?.data?.info?.bankList))
				localStorage.setItem(Constant.DATA_PROMOTION, JSON.stringify(data?.data?.info?.promotionList))
				localStorage.setItem(Constant.BRAND_LIST, JSON.stringify(data?.data?.info?.brandList))
				localStorage.setItem(Constant.CASHBACK, JSON.stringify(data?.data?.info?.cashback))
				localStorage.setItem(Constant.CONFIG_CASHBACK, JSON.stringify(data?.data?.info?.configCash))
				localStorage.setItem(Constant.CONFIG_LINE, JSON.stringify(data?.data?.info?.configLine))
				localStorage.setItem(Constant.CONFIG_LOBBY, JSON.stringify(data?.data?.info?.configLobby))
				localStorage.setItem(Constant.CONFIG_WITHDRAW, JSON.stringify(data?.data?.info?.configWithdraw))
				localStorage.setItem(Constant.SLIDE, JSON.stringify(data?.data?.info?.slide))
				localStorage.setItem(Constant.BANK_DEPOSIT, JSON.stringify(data?.data?.info?.bankDeposit))
				localStorage.setItem(Constant.LOGIN_USER_DATA,
					JSON.stringify({
						agent: data?.data?.agent,
						username: data?.data?.username,
						password: password,
						balance: data?.data?.balance,
						shortUrl: data?.data?.info?.shorturl
					}),
				);

				setLoading(false);
				history.push(Constant.AFTER_LOGIN, data?.data);
			} else {
				setLoading(true);
			}
			return data;
		} catch (error) {
			setLoading(true);
			console.log("🚀 ~ handleLogin ~ error:", error);
		}
	};
	const loginPlayNow = async (username, password) => {
		console.log("first: ", username)
		console.log("second: ", password)
		try {
			let _res = await axios({
				method: 'post',
				url: `${Constant.SERVER_URL}/Authen/Login`,
				data: {
					"agentCode": Constant?.AGENT_CODE,
					"username": username,
					"password": password,
					"ip": "1.2.3.4"
				},
			});
			console.log("_res?.data.statusCode::: ", _res?.data)
			if (_res?.data.statusCode === 0) {
				history.push(Constant.AFTER_LOGIN, _res?.data?.data);
			}
		} catch (error) {
			console.log("🚀 ~ const_login= ~ error:", error)
		}
	}
	// ==================> handleRegister <=================
	const handleRegister = async (
		inputFirstname,
		inputLastname,
		inputPhonenumber,
		inputPassword,
		inputBank,
		iBank,
		ref,
		setLoading
	) => {
		// console.log("REGISTER");
		try {
			const _date = {
				s_agent_code: Constant.AGENT_CODE,
				s_phone: inputPhonenumber,
				s_password: inputPassword,
				i_bank: iBank,
				s_account_no: inputBank,
				s_channel: "GOOGLE",
				s_line: "line@",
				type_shorturl: true,
				s_ref: ref,
				s_channel_name: Constant.AGENT_CODE,
				i_channel: "134",
			};
			const _resOne = await axios({
				method: "post",
				url: `${Constant.SERVER_URL}/Member/Register/Verify`,
				data: _date,
			});
			if (_resOne?.data?.statusCode === 0) {
				const _resTwo = await axios({
					method: "post",
					url: `${Constant.SERVER_URL}/Member/Register/Confirm`,
					data: {
						..._resOne?.data?.data,
						s_firstname: inputFirstname,
						s_lastname: inputLastname,
						s_fullname: `${inputFirstname} ${inputLastname}`,
						s_channel_name: Constant.AGENT_CODE,
						i_channel: "134",
					},
				});
				// console.log("🚀 ~ CreateUser ~ _resTwo:", _resTwo?.data);
				if (_resTwo?.data.statusCode === 0) {
					const _resThree = await axios({
						method: "post",
						url: `${Constant.SERVER_URL}/Member/Balance`,
						data: {
							s_agent_code: Constant.AGENT_CODE,
							s_username: _resTwo?.data?.data?.s_username,
						},
					});

					if (_resThree?.data.statusCode === 0) {

						localStorage.setItem(
							Constant.LOGIN_TOKEN_DATA,
							_resTwo?.data?.data?.token,
						);
						localStorage.setItem(
							Constant.LOGIN_USER_DATA,
							JSON.stringify(_resTwo?.data?.data),
						);
						// setLoading(true);
						_loginAfterRegister(
							_resTwo?.data?.data?.s_username,
							_resTwo?.data?.data?.s_password,

						);

					}
				}

			} else {
				return _resOne?.data;
			}
		} catch (error) {
			console.log("🚀 ~ handleRegister ~ error:", error);
		}
	};


	const _loginAfterRegister = async (username, password) => {
		try {
			const { data } = await axios.post(`${Constant.SERVER_URL}/Authen/Login`, {
				agentCode: Constant.AGENT_CODE,
				username,
				password,
				ip: "1.2.3.4",
			});
			if (data?.statusCode === 0) {
				localStorage.setItem(Constant.LOGIN_TOKEN_DATA, data.data.token);
				localStorage.setItem(Constant.DATA_PROFILE, JSON.stringify(data?.data?.info?.profile))
				localStorage.setItem(Constant.DATA_BANK_LIST, JSON.stringify(data?.data?.info?.bankList))
				localStorage.setItem(Constant.DATA_PROMOTION, JSON.stringify(data?.data?.info?.promotionList))
				localStorage.setItem(Constant.BRAND_LIST, JSON.stringify(data?.data?.info?.brandList))
				localStorage.setItem(Constant.CASHBACK, JSON.stringify(data?.data?.info?.cashback))
				localStorage.setItem(Constant.CONFIG_CASHBACK, JSON.stringify(data?.data?.info?.configCash))
				localStorage.setItem(Constant.CONFIG_LINE, JSON.stringify(data?.data?.info?.configLine))
				localStorage.setItem(Constant.CONFIG_LOBBY, JSON.stringify(data?.data?.info?.configLobby))
				localStorage.setItem(Constant.CONFIG_WITHDRAW, JSON.stringify(data?.data?.info?.configWithdraw))
				localStorage.setItem(Constant.SLIDE, JSON.stringify(data?.data?.info?.slide))
				localStorage.setItem(Constant.BANK_DEPOSIT, JSON.stringify(data?.data?.info?.bankDeposit))
				localStorage.setItem(Constant.LOGIN_USER_DATA,
					JSON.stringify({
						agent: data?.data?.agent,
						username: data?.data?.username,
						password: password,
						balance: data?.data?.balance,
						shortUrl: data?.data?.info?.shorturl
					}),
				);
				showSuccessAlert('สำเร็จ')
				history.push(Constant.AFTER_LOGIN, data?.data);
				return null;
			}
			return data;
		} catch (error) {
			console.log("🚀 ~ const_login= ~ error:", error);
		}
	};

	// ==================> ChangePassword <=================
	const ChangePassword = async (newPassword, firstPassword) => {
		const _dataTokenLocal = await TokenLocalStorage();
		const _dataLocal = await DataLocalStorage();
		const _res = await axios({
			method: "post",
			url: `${Constant.SERVER_URL}/Authen/ResetPassword`,
			data: {
				token: _dataTokenLocal,
				agentCode: Constant.AGENT_CODE,
				username: _dataLocal?.username,
				password: newPassword,
				password_original: firstPassword,
				actionBy: "Member",
			},
		});

		console.log("🚀 ~ ChangePassword ~ _res?.data:", _res?.data);
		if (_res?.data) {
			return _res;
		}
	};
	// ==================> handleRegister <=================
	const loginWithToken = async (token) => {
		try {
			const _resDecrypt = EncriptBase64(token);
			if (
				!_resDecrypt?.agentCode &&
				!_resDecrypt?.username &&
				!_resDecrypt?.password
			) {
				return;
			}
			const _res = await axios({
				method: "post",
				url: `${Constant.SERVER_URL}/Authen/Login`,
				data: {
					agentCode: Constant.AGENT_CODE,
					username: _resDecrypt?.username,
					password: _resDecrypt?.password,
					ip: "1.2.3.4",
				},
			});
			if (_res?.data.statusCode === 0) {
				console.log("🚀 ~ loginWithToken ~ _res?.data:", _res?.data);
				localStorage.setItem(Constant.LOGIN_TOKEN_DATA, _res.data.token);
				localStorage.setItem(
					Constant.LOGIN_USER_DATA,
					JSON.stringify({
						agent: _res?.data?.agent,
						username: _res?.data?.username,
						balance: _res?.data?.balance,
					}),
				);
				history.push(Constant.AFTER_LOGIN, _res?.data?.data);

			}
		} catch (error) {
			console.log("🚀 ~ const_login= ~ error:", error);
		}
	};

	return {
		handleLogin,
		handleRegister,
		loginWithToken,
		ChangePassword,
		loginPlayNow
	};
};
export default LoginController;
