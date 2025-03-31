import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.scss';
import Header from '../../HomePages/Header';

// Icon
import emailIcon from '../../../assets/mail.svg';
import nameIcon from '../../../assets/name.png';
import passwordIcon from '../../../assets/password.svg';
import phoneIcon from '../../../assets/phone.svg';
import logoWithTextIcon from '../../../assets/logoText.svg';
import TVCIcon from '../../../assets/TVC.svg';


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
        email: '',
        name: '',
        
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
            const response = await axios.post('http://localhost:8080/api/auth/register', formData);
            console.log(formData);
            if (response.status === 200) {
                alert('User registered successfully');
                navigate('/login');
            } else {
                const message = response.data.message || 'An error occurred while registering';

                alert(message);
            }
        } catch (error) {
            const message = error.response?.data?.message || 'An error occurred while registering';
            alert(message)

        }
    };

    return (
        <div>
            <Header />
            <main className='register-frame'>
                <div className='register-layout'>
                    <div className='register-section'>
                        <div className='register-banner'>
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

                        <div className='register-input'>
                            <div className='register-form'>
                                <div className='register-form-title'>Đăng ký tài khoản</div>
                                <div className='register-form-content'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='register-input-content'>
                                            <img src={phoneIcon}/>
                                            <input type='text'
                                                   name='phone'
                                                   className='form-control'
                                                   placeholder='Nhập số điện thoại'
                                                   value={formData.phone}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div className='register-input-content'>
                                            <img src={emailIcon}
                                                 style={{width: '48px', height: '37.6px'}}/>
                                            <input type='email'
                                                   name='email'
                                                   className='form-control'
                                                   placeholder='Nhập Email'
                                                   value={formData.email}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div className='register-input-content'>
                                            <img
                                                src={nameIcon}
                                                style={{width: '48px', height: '37.6px'}}/>
                                            <input type='text'
                                                   name='name'
                                                   className='form-control'
                                                   placeholder='Nhập họ tên'
                                                   value={formData.name}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div className='register-input-content'>
                                            <img src={passwordIcon}/>
                                            <input type='password'
                                                   name='password'
                                                   className='form-control'
                                                   placeholder='Nhập mật khẩu'
                                                   value={formData.password}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <button className='btn-register'>
                                            <span>Đăng ký</span>
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

export default Register;
