import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    padding: 16px 24px;
`;

const TermsContainer = styled.div`
    font-size: ${({ link }) => { 
        if (link)
            return "13px"
        else
            return "12px"
    }};
    color: ${({ link }) => { 
        if (link)
            return "#606060"
        else
            return "#909090"
    }};
    margin-bottom: 13px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <TermsContainer link>
                <div>
                    <a>정보</a>
                    <a>보도자료</a>
                    <a>저작권</a>
                    <a>문의하기</a>
                    <a>크리에이터</a>
                    <a>광고</a>
                    <a>개발자</a>
                </div>
                <div>
                    <a>약관</a>
                    <a>개인정보처리방침</a>
                    <a>정책 및 안전</a>
                    <a>YouTube 작동의 원리</a>
                    <a>새로운 기능 테스트하기</a>
                </div>
            </TermsContainer>
            <TermsContainer>
                <span>
                    © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 
                    <a>사업자정보</a>, 
                    <a>불법촬영물 신고</a>
                    <br />
                    크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.
                </span>
            </TermsContainer>
        </StyledFooter>
   )
}

export default Footer;