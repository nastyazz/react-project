import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import { Text } from "@consta/uikit/Text";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { useDispatch } from "react-redux";
import { login } from "../../store/user-store/UserSlice";
import axios from "axios";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const validData = async (username, password) => {
        const expiresInMins = 60 * 24;

        const response = await axios.post(
            'https://dummyjson.com/auth/login',
            { username, password, expiresInMins },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return response.data;
    };

    const handleSubmit = async () => {
        setError('');
        if (!username || !password) {
            setError("Все поля должны быть заполнены");
            return;
        }

        try {
            const userData = await validData(username, password);
            dispatch(login({ ...userData }));
            navigate('/');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error(err.message);
                setError('Неверный логин или пароль');
            }
        }
    };

    return (
        <div className="login-page">
            <Text size="l" view="primary" weight="bold" align="center" className="login-title">
                Вход в сервис
            </Text>

            <div className="login-form">
                <TextField
                    label="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e || '')}
                    placeholder="Введите ваше имя пользователя"
                />
                <TextField
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e || '')}
                />
                {error && <Text view="alert" size="s" className="error-text">{error}</Text>}
                <Button
                    label="Войти"
                    size="l"
                    onClick={handleSubmit}
                    className="login-button"
                />
            </div>
        </div>
    );
};

export default LoginPage;
