import Modal from "@/components/ScreenStructure/Modal";
import Seo from "@/components/ScreenStructure/Seo";
import { colors } from "@/styles/Color";
import {
  flexCenterStyle,
  flexStyle,
  modalBottomBtnArea,
  modalContentText,
  modalTitle,
} from "@/styles/Global";
import { css, keyframes } from "@emotion/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import Snowfall from "@/components/snowFall";

export default function Home() {
  const { data: session, status } = useSession();

  const url =
    process.env.NODE_ENV === "production"
      ? `https://esg.veloga.co.kr`
      : `http://localhost:3000`;

  //logoutModal
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const handleLogoutOpen = () => {
    setLogoutModal(true);
  };
  const handleLogoutClose = () => {
    setLogoutModal(false);
  };

  return (
    <>
      <Seo />
      <section css={HomePage}>
        <div css={flexCenterStyle} className="logOut">
          <button onClick={handleLogoutOpen}>로그아웃</button>
        </div>
        <div className="patyImage">
          <div className="topImage">
            <div className="leftImage">
              <div className="light">
                <Image
                  src={"/light.png"}
                  alt="light"
                  width={130}
                  height={124}
                />
              </div>
              <div className="heater">
                <Image
                  src={"/heater.svg"}
                  alt="heater"
                  width={170}
                  height={204}
                />
              </div>
            </div>
            <div className="centerTree">
              <div className="star">
                <Image src={"/star.png"} alt="star" width={50} height={60} />
              </div>
              <div className="tree">
                <Image src={"/tree.png"} alt="tree" width={150} height={229} />
              </div>
            </div>
            <div className="rightImage">
              <div className="window">
                <div className="windowBg">
                  <Snowfall />
                </div>
                <div className="windowImage">
                  <Image
                    src={"/window.png"}
                    alt="window"
                    width={100}
                    height={200}
                  />
                </div>
              </div>
              <div className="box">
                <Image src={"/box.png"} alt="box" width={90} height={60} />
              </div>
            </div>
          </div>
          <div className="bottomImage">
            <div className="lineBg">
              {[1, 2, 3, 4, 5, 6, 7].map((x, index) => (
                <div
                  key={x}
                  className="line"
                  css={{ opacity: (index + 1) / 7 }}
                />
              ))}
            </div>
            <div className="merry">
              <div className="twinkleSmall">
                <Image
                  src={"/twinkleSmall.png"}
                  alt="twinkleSmall"
                  width={30}
                  height={33}
                />
              </div>
              <Image src={"/merry.svg"} alt="merry" width={288} height={86} />
            </div>
          </div>
        </div>
        <div className="partyIntro">
          <div className="intro">
            <Image src={"/intro.png"} alt="intro" width={100} height={55} />
          </div>
          <p>축하드립니다!</p>
          <div className="user">
            <p className="name">{session.user.name}</p>
            <span>님,</span>
          </div>
          <div>
            <p>
              당신은 크리스마스 파티에 <br />
              초대되셨습니다.
            </p>
            <p>
              파티 안내를 위해 <br />
              초대장을 발송 드리오니 <br />
              파티 참가에 <br />
              참고 부탁드립니다.
            </p>
          </div>
        </div>
        <div className="partyInfo">
          <div className="line">
            <div>
              <p className="title">일시</p>
              <p className="info">2023. 12. 23 19:30</p>
            </div>
            <div>
              <p className="title">드레스코드</p>
              <p className="info">빨강, 초록</p>
            </div>
            <div>
              <p className="title">참가비</p>
              <p className="info">
                35000원 <br /> (카카오뱅크 3333-20-0573174)
              </p>
              <p className="detailInfo">* 12.21(목) 까지 입금바랍니다.</p>
            </div>
            <div>
              <p className="title">장소</p>
              <p className="info">
                유랩 파티룸 <br /> (서울 서초구 서초대로77길 45 실버타운 <br />
                오피스텔 604호)
              </p>
            </div>
          </div>
        </div>
        <div className="partyEnd">
          <div>
            <p>그럼 파티장에서 뵙기를 고대하겠습니다.</p>
            <p>감사합니다</p>
          </div>
        </div>
        {/* Logout Modal */}
        {logoutModal && (
          <Modal
            width="400px"
            height="150px"
            title={
              <div css={[flexStyle, modalTitle]}>
                <IoIosLogOut />
                <span>계정 로그아웃</span>
              </div>
            }
          >
            <p css={modalContentText}>로그아웃 하시겠습니까?</p>
            <div css={modalBottomBtnArea}>
              <button onClick={handleLogoutClose} css={{ marginRight: 6 }}>
                취소
              </button>
              <button
                onClick={() => signOut({ callbackUrl: `${url}/login` })}
                css={{ backgroundColor: "#4072ee" }}
              >
                확인
              </button>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
}

Home.auth = true;

const HomePage = css`
  position: relative;
  width: 100vw;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  background: #fff;

  .logOut {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 50;
    color: #000;
  }

  .patyImage {
    width: 100%;
    height: 100vh;

    .topImage {
      position: relative;
      width: 100%;
      height: 60%;
      overflow: hidden;
      background: linear-gradient(#1a1723, #312783);

      .leftImage {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 170px;
        height: 377px;

        .light {
          position: absolute;
          left: 0;
          top: 0;
          width: 130px;
          height: 124px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .heater {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 170px;
          height: 204px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .centerTree {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%) scale(1);
        width: 180px;
        height: 306px;
        z-index: 20;

        .star {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 50px;
          height: 60px;
          z-index: 10;
          animation: light 2.5s infinite;
          opacity: 0.4;

          img {
            width: 100%;
            height: 100%;
          }
        }

        @keyframes light {
          0%,
          30% {
            opacity: 1;
          }

          34%,
          39%,
          42%,
          47%,
          55%,
          60%,
          67% {
            opacity: 0.4;
          }

          35%,
          38%,
          46%,
          51%,
          54%,
          68% {
            opacity: 0.6;
          }

          70% {
            opacity: 0.8;
          }

          100% {
            opacity: 1;
          }
        }

        .tree {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(100% - 50px);

          img {
            width: 100%;
            height: 100%;
            margin-bottom: -5px;
          }
        }
      }

      .rightImage {
        position: absolute;
        right: 30px;
        bottom: 0;
        width: 100px;
        height: 310px;

        .window {
          position: absolute;
          right: 0;
          top: 0;
          height: 200px;

          .windowBg {
            position: absolute;
            right: 0;
            width: 100px;
            height: 100%;
            border-radius: 50px 50px 0 0;
            border: 1px solid red;
            overflow: hidden;
            background-color: #1a1721;
          }

          .windowImage {
            position: absolute;
            right: 0;
            z-index: 10;
          }
        }

        .box {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 90px;
          height: 60px;
        }
      }
    }

    .bottomImage {
      width: 100%;
      height: 40%;
      background: linear-gradient(#1a1721, #fff);
      position: relative;

      .lineBg {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
          width: 100%;
          height: 1px;
          background-color: #fff;
          margin-top: 20px;
        }
      }

      .merry {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 288px;
        height: 86px;

        .twinkleSmall {
          position: absolute;
          right: 0;
          width: 30px;
          height: 33px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .partyIntro,
  .partyEnd,
  .partyInfo {
    width: 100%;
    text-align: center;
    padding: 0 16px;
  }

  .partyIntro {
    height: 540px;
    color: #000;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 600;

    .intro {
      width: 100px;
      height: 55px;
      margin-bottom: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .user {
      margin: 20px 0;

      .name {
        width: 150px;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        border-radius: 10px;
        margin-right: 10px;
        background-color: #f2f2f2;
        display: inline-block;
      }
      span:last-of-type {
        font-weight: 600;
      }
    }

    p {
      font-weight: 600;
    }

    p:first-of-type {
      margin-bottom: 20px;
    }
  }

  .partyInfo {
    height: 580px;
    padding-top: 16px;
    padding-bottom: 16px;

    .line {
      height: 100%;
      padding: 16px;
      border: 1px solid #fff;

      div {
        margin-top: 25px;
      }

      .title {
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 10px;
        position: relative;

        &::after {
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          content: "";
          height: 1px;
          width: 25px;
          background-color: #fff;
        }
      }

      .info {
        padding: 16px 0 0;
        line-height: 1.6;
      }

      .detailInfo {
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }

  .partyEnd {
    color: #000;
    background: #fff;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: 600;
    }

    p:first-of-type {
      margin-bottom: 20px;
    }
  }
`;
