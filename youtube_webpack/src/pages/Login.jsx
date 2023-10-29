import React, { useState } from "react";
import { login } from "../api/login";

import { FlexBox, TitleContainer, BigTitle, MarginLabel, TempInput, LoginButton } from "../commonStyle"

const Login = () => {
    
    const [userInfo, setUserInfo] = useState(null)

    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const loginPayload = {
            id: formData.get("id"),
            pw: formData.get("pw")
        }

        const token = JSON.stringify((await login(loginPayload)))

        if (userInfo === null) return;
        setUserInfo(userInfo);
    }
    
    return (
        <main>
            <TitleContainer>
                <BigTitle>로그인</BigTitle>
            </TitleContainer>
            <FlexBox as="form" dir="col" col="start" width="250px" onSubmit={loginSubmitHandler}>
                <MarginLabel>
                    아이디: <TempInput type="text" name="id" />
                </MarginLabel>
                <MarginLabel>
                    비밀번호: <TempInput type="password" name="pw" />
                </MarginLabel>
                <LoginButton type="submit">로그인</LoginButton>
            </FlexBox>
        </main>
    )
}

export default Login;