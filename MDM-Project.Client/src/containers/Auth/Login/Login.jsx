import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useAuth } from '../../../services/auth';

import Header from '../../HomePages/Header';
import axios from "axios";

//Icon
import emailIcon from '../../../assets/mail.svg';
import nameIcon from '../../../assets/name.png';
import passwordIcon from '../../../assets/password.svg';
import phoneIcon from '../../../assets/phone.svg';
import logoWithTextIcon from '../../../assets/logoText.svg';
import TVCIcon from '../../../assets/TVC.svg';

const Login = () => {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', formData);
            if (response.status === 200) {
                // Save accessToken, customerId to localStorage
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('customerId', response.data.customerId);
                navigate('/');
                login();
            } else {
                const message = response.data.message || 'An error occurred while login';
                alert(message);
            }
        } catch (error) {
            const message = error.response?.data?.message || 'An error occurred while login';
            alert(message)

        }
    };

    return (
        <div>
            <Header />
            <main className='login-frame'>
                <div className='login-layout'>
                    <div className='login-section'>
                        <div className='login-banner'>
                            <div className='slogan'>
                                <div className='slogan-img'>
                                    <img src={logoWithTextIcon}/>
                                </div>
                            </div>
                            <div className='banner-content'>
                                <div className='banner-img'>
                                    <img src={TVCIcon}/>
                                </div>
                            </div>
                        </div>

                        <div className='login-input'>
                            <div className='login-form'>
                                <div className='login-form-title'>Đăng nhập tài khoản</div>
                                <div className='login-form-content'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='login-input-content'>
                                            <img src={phoneIcon}/>
                                            <input type='text'
                                                   name='phone'
                                                className='form-control' 
                                                placeholder='Nhập số điện thoại'
                                                   value={formData.phoneNumber}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div className='login-input-content'>
                                            <img src={passwordIcon}/>
                                            <input type='password'
                                                   name='password'
                                                className='form-control' 
                                                placeholder='Nhập mật khẩu'
                                                   value={formData.password}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <button className='btn-login'>
                                            <span>Đăng nhập</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login