import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { useEffect } from "react";
import OAuth2 from "../pages/auth/OAuth2";
import { useMeQuery } from "../queries/usersQueries";
import Logout from "../pages/auth/Logout";
import Loading from "../components/common/Loading";
import Home from "../pages/home/Home";
import LeftSideBar from "../components/common/LeftSideBar";
import MainLayout from "../components/common/MainLayout";
// import FridgeHome from "../pages/fridge/FridgeHome";
// import MyFridge from "../pages/fridge/MyFridge";
// import Recipe from "../pages/fridge/Recipe";
import FridgeHome from "../pages/fridge-apple/FridgeHome";
import MyFridge from "../pages/fridge-apple/MyFridge";
import Recipe from "../pages/fridge-apple/Recipe";

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;

    const meQuery = useMeQuery();

    useEffect(() => {
        const { isLoading, data } = meQuery;
        if (!isLoading) {
            if (data.status !== 200) {
                if (!pathname.startsWith("/auth")) {
                    navigate("/auth/login");
                }
            } else {
                if (pathname.startsWith("/auth")) {
                    navigate("/");
                }
            }
        }
    }, [pathname, meQuery.data]);

    if (meQuery.isLoading) {
        return <Loading />;
    }

    if (meQuery.isSuccess && meQuery.data.status !== 200) {
        return <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/login/oauth2" element={<OAuth2 />} />
        </Routes>
    }

    return (
        <Routes>
            {/* 1. 냉장고: MainLayout 없이 전체 화면 (지금 잘 나오는 상태 유지) */}
            <Route path="/" element={<FridgeHome />} />
            <Route path="/my-fridge" element={<MyFridge />} />
            <Route path="/recipe" element={<Recipe />} />
            
            {/* 2. 기존 피드: 여기에만 MainLayout을 입혀서 예전 디자인 복구 */}
            <Route path="/feed" element={
                <MainLayout>
                    <LeftSideBar>
                        <Home />
                    </LeftSideBar>
                </MainLayout>
            } />
            
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
}


export default AuthRoute;