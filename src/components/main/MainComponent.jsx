import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RadiusButton from "../designTool/RadiusButton";
import { useRouter } from "next/router";
import ChatbotModal from "../../components/common/ChatbotModal";
import { authStore } from "../../stores/authStore";
import { observer } from "mobx-react";

const MainComponent = observer (()=>{
  const router = useRouter();
  const loggedIn = authStore.loggedIn;
  const isSubscribe = authStore.isSubscribe;

  const handleNavigation = (path) => {
    if (typeof window !== "undefined") {
      if(loggedIn){            
          if (isSubscribe == 'Y') {
            router.push(path);
          }else{
            console.log("구독여부", isSubscribe);
            alert("구독이 필요한 서비스입니다.");
            router.push('/payment');
          }
      }else{
          if(confirm("로그인이 필요합니다. 이동하시겠습니까?")){
              router.push("/member/login");
            }else{
              router.push("/main")
            }
      }
    }
  };
  useEffect(() => {
    console.log(authStore.isAdmin);
    console.log(authStore.memberNo);
    console.log(authStore.loggedIn);
    console.log(isSubscribe);

    if (authStore.isAdmin) {
      console.log(authStore.isAdmin);
    }
    if (authStore.memberNo) {
      console.log(authStore.memberNo);
    }
  }, [authStore.isAdmin, authStore.memberNo]);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  //맨처음 모달창이 보이지 않도록 state 초기값 설정함
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  //Chatbot 이미지 클릭시 state 값 바꾸어 모달창 보이게 안보이게 함
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div className="slider1">
            <div className="slider1_left">
              <h3
                style={{
                  color: "#9DC3C1",
                  fontSize: "15pt",
                  fontWeight: "600",
                }}
              >
                당신의 꿈을 이루기 위한 첫 걸음,
              </h3>
              <p
                style={{
                  color: "#6E7783",
                  fontSize: "25pt",
                  fontWeight: "900",
                }}
              >
                똑똑한 인재 관리 AI파트너 NAIN
              </p>
            </div>
            <div className="slider1_right">
              <img
                className="AIrobot"
                src="/image/AIrobot.png"
                width={"250px"}
                alt="AI Robot"
              ></img>
            </div>
          </div>
          <div className="slider1">
            <div className="slider1_left">
              <h3
                style={{
                  color: "#9DC3C1",
                  fontSize: "15pt",
                  fontWeight: "600",
                }}
              >
                당신의 꿈을 이루기 위한 첫 걸음,
              </h3>
              <p
                style={{
                  color: "#6E7783",
                  fontSize: "25pt",
                  fontWeight: "900",
                }}
              >
                똑똑한 인재 관리 AI파트너 NAIN
              </p>
            </div>
            <div className="slider1_right">
              <img
                className="AIrobot"
                src="/image/AIrobot.png"
                width={"250px"}
                alt="AI Robot"
              ></img>
            </div>
          </div>
          <div className="slider1">
            <div className="slider1_left">
              <h3
                style={{
                  color: "#9DC3C1",
                  fontSize: "15pt",
                  fontWeight: "600",
                }}
              >
                당신의 꿈을 이루기 위한 첫 걸음,
              </h3>
              <p
                style={{
                  color: "#6E7783",
                  fontSize: "25pt",
                  fontWeight: "900",
                }}
              >
                똑똑한 인재 관리 AI파트너 NAIN
              </p>
            </div>
            <div className="slider1_right">
              <img
                className="AIrobot"
                src="/image/AIrobot.png"
                width={"250px"}
                alt="AI Robot"
              ></img>
            </div>
          </div>
        </Slider>
      </div>
      <div className="middle_word">
        <h1
          style={{
            color: "#6E7783",
            fontSize: "23pt",
            fontWeight: "900",
          }}
        >
          꼼꼼한 평가와 철저한 관리로 채용까지
        </h1>
        <h3
          style={{
            color: "#6E7783",
            fontSize: "14pt",
            fontWeight: "600",
            margin: "20px",
          }}
        >
          내 역량을 잘 표현할 수 있도록 이력서부터 면접까지 관리하여 돋보이는
          개발자로 만들어드립니다.
        </h3>
      </div>
      <div className="banner">
        <div className="resume_image">
          <img
            className="ResumeImage"
            src="/image/ResumeImage.png"
            width={"370px"}
            alt="ResumeImage"
          ></img>
        </div>
        <div className="resume_word">
          <h1
            style={{
              color: "#6E7783",
              fontSize: "20pt",
              fontWeight: "900",
              margin: "30px",
            }}
          >
            나만의 이력서 매니저
          </h1>
          <ul
            style={{
              color: "#6E7783",
              fontSize: "13pt",
              fontWeight: "600",
              margin: "30px",
            }}
          >
            <li>이력서 작성</li>
            <li>이력서 관리</li>
            <li>합격자 이력서 공유</li>
            <li>합격 키워드 분석</li>
          </ul>
          <div className="banner_botton">
            <RadiusButton
              padding="10px 30px"
              color="#9dc3c1"
              text="자세히 보기"
              borderRadius="30px"
              fontSize="18px"
              onClick={() => handleNavigation("/resume")}
            />
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="interview_word">
          <h1
            style={{
              color: "#6E7783",
              fontSize: "20pt",
              fontWeight: "900",
              margin: "30px",
            }}
          >
            맞춤형 AI 면접 솔루션
          </h1>
          <ul
            style={{
              color: "#6E7783",
              fontSize: "13pt",
              fontWeight: "600",
              margin: "30px",
            }}
          >
            <li style={{ marginBottom: "20px" }}>모의면접</li>
            <li>면접 report</li>
          </ul>
          <div className="banner_botton">
            <RadiusButton
              padding="10px 30px"
              color="#9dc3c1"
              text="자세히 보기"
              borderRadius="30px"
              fontSize="18px"
              onClick={() => handleNavigation("/interview")}
            />
          </div>
        </div>
        <div className="interview_image">
          <img
            className="InterviewImage"
            src="/image/InterviewImage.png"
            width={"370px"}
            alt="InterviewImage"
          ></img>
        </div>
      </div>

      <div>
        <img
          className="chatbot fixed-bottom"
          src="/image/chatbot.png"
          width={"100px"}
          alt="AI Robot"
          onClick={handleOpenModal}
        ></img>
        <button className="chatbot-button" onClick={handleOpenModal}>
          챗봇 실행
        </button>
        <ChatbotModal
          show={isModalOpen}
          onClose={handleCloseModal}
          title="Chatbot"
        />
      </div>

      <div className="subscribe_banner">
        <h1 style={{ color: "#FFFFFF", fontSize: "20pt", fontWeight: "900" }}>
          맞춤형 AI 솔루션으로 시작하세요
        </h1>
        <div className="subscribe_button">
          <RadiusButton
            padding="8px 30px"
            fontSize="18px"
            color="#9dc3c1"
            text="구독하기"
            borderRadius="30px"
            onClick={() => router.push("/payment")}
          />
        </div>
      </div>
    </>
  );
});

export default MainComponent;
