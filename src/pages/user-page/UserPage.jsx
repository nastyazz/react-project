import './UserPage.css';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/user-store/UserSlice";

const UserPage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="user-info">
                <div className="info-block">
                    <p><strong>Имя:</strong> {user.firstName}</p>
                    <p><strong>Фамилия:</strong> {user.lastName}</p>
                </div>
                <div className="info-block">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Пол:</strong> {user.gender}</p>
                </div>
            </div>
            <div className="user-photo">
                <img src={user.image} alt="User Photo" />
            </div>
            <div className="logout-button-container">
                <button className="logout-button" onClick={handleLogout}>Выход</button>
            </div>
        </div>
    );
};

export default UserPage;
