import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

const Contactbody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1b1b1e;
  padding-top: 100px;
`;

const TextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding-left: 5%;
  color: #fffceb;
  box-sizing: border-box;
`;

const Contactswrap = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  background-color: #1b1b1e;
  color: #fffceb;
  text-align: center;

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 50px;
  }
  p {
    font-size: 3rem;
  }
  span {
    font-size: 2rem;

    line-height: 1.5rem;
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1199px) {
    flex-direction: column;
    width: 80%;

    margin: 0 auto;

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 2rem;
      padding-top: 20px;
    }
    span {
      line-height: 3rem;
    }
  }
`;
const Contact_wrap = styled.div`
  width: 600px;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 3vw;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2%;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
    height: auto;

    h1 {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.26rem;
  }
  p {
    font-size: 2rem;
  }
  span {
    font-size: 0.85rem;
  }
`;

const Iconwrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  margin-top: 50px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
// px 찌그러지기 시작하는지점 때부터 columm 찌그러질때 바깥div 가 고정값 안에 콘텐츠 div들이
// 100% 로 알아서 맞춰지게 만들어야 반응형이 편하다.
// 이미지는 div로 주고 bgimg 로 주고 그다음 이미지 cover bgposition center.

// img 태그를 사용하는경우는 사진을 통해 홈페이지 이동을 할때!

function Contact() {
  return (
    <>
      <Element
        style={{ backgroundColor: "#1B1B1E" }}
        className="contactSection"
      >
        <Contactbody>
          <TextWrap>
            <h1>Contact Me!</h1>
          </TextWrap>

          <Contactswrap>
            <Contact_wrap>
              <Iconwrap>
                <a
                  href="https://github.com/KiBeomSeok940613"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ color: "f5ddb0" }}
                    className="BoxIcon"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
              </Iconwrap>
            </Contact_wrap>
          </Contactswrap>
        </Contactbody>
      </Element>
    </>
  );
}

export default Contact;
