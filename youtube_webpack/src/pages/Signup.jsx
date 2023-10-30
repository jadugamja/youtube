import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../api/user";

import { FlexBox, TitleContainer, BigTitle, MarginLabel, TempInput, LoginButton } from "../commonStyle"

const Signup = () => {

    const idRef = React.useRef(null);
    const nicknameRef = React.useRef(null);
    const pwRef = React.useRef(null);

    const reg_id = /^[a-z][a-z0-9]*$/i;
    const reg_nickname = /^[가-힣a-zA-Z]+$/;
    const reg_pw = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/;

    const [formData,setFormData] = useState({
        id: "",
        nickname: "",
        pw: ""
    })

    const joinSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const signupPayload = {
            id: formData.get("id"),
            pw: formData.get("pw"),
            nickname: formData.get("nickname"),
        }

        if (( !reg_id.test(signupPayload.id) && signupPayload.id.length < 6 )
            || ( !reg_nickname.test(signupPayload.nickname) && signupPayload.nickname.length < 2 )
            || ( !reg_pw.test(signupPayload.pw)))
        {
            alert("입력값을 확인하세요");
            return;
        }

        console.log(signupPayload)
        signup(signupPayload)
    }

    const checkValidation = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        

        if (name === "id") {
            if ((!reg_id.test(value) || value.length < 6)) {
                alert("아이디 입력값을 확인하세요")
                e.preventDefault();
                if(document.activeElement != document.getElementsByName("id")[0]) {

                    alert("ㅇㅇㅇ")
                    
                }
                idRef.current.focus()
            }
            return
            debugger
        } else if (name === "nickname" && (!reg_nickname.test(value) || value.length < 2)) {
            // alert("닉네임 입력값을 확인하세요")
            e.preventDefault();
            if(document.activeElement != document.getElementsByName("id")[0])
                return
            nicknameRef.current.focus()
        } else if (name === "pw" && !reg_pw.test(value)) {
            alert("비밀번호 입력값을 확인하세요")
            // pwRef.current.focus();
            return;
        }

        setFormData({
            ...formData,
            [name]: value
        })
  }

    return (
        <main>
            <TitleContainer>
                <BigTitle>회원가입</BigTitle>
            </TitleContainer>
            <FlexBox as="form" dir="col" col="start" width="250px" onSubmit={joinSubmitHandler}>
                <MarginLabel>
                    아이디: <TempInput ref={idRef} type="text" name="id" maxLength={16} />
                </MarginLabel>
                <MarginLabel>
                    닉네임: <TempInput ref={nicknameRef} type="text" name="nickname" maxLength={6} />
                </MarginLabel>
                <MarginLabel>
                    비밀번호: <TempInput ref={pwRef} type="password" name="pw" maxLength={20} />
                </MarginLabel>
                <LoginButton type="submit">회원가입</LoginButton>
            </FlexBox>
            <Link to="/">로그인</Link>
        </main>
    )
}

export default Signup;