import Seo from "@/components/ScreenStructure/Seo";
import { colors } from "@/styles/Color";
import { css } from "@emotion/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function NotFoundLogin() {
  const { data: session } = useSession();

  return (
    <>
      <Seo />
      <section css={notFound}>
        <div>
          <div>
            <p>주소를 확인해주세요.</p>
            <p>요청하신 페이지가 존재하지 않습니다.</p>
          </div>
          <Link href={"/gateway"}>홈으로 돌아가기</Link>
        </div>
      </section>
    </>
  );
}

NotFoundLogin.auth = false;

const notFound = css`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  color: ${colors.white};
  background-color: ${colors.chartBackground};

  @media (max-width: 1023px) {
    height: 100%;
    padding: 0 16px;
  }

  > div:first-of-type {
    position: relative;
    width: 450px;
    padding: 45px;
    border-radius: 8px;
    color: ${colors.white};
    background-color: ${colors.chartBackground};
    border: 1px solid ${colors.opacityWhite};

    @media (max-width: 1280px) {
      width: 350px;
      padding: 30px;
    }

    @media (max-width: 1023px) {
      width: 100%;
      padding: 20px;
    }

    > div:first-of-type {
      text-align: center;
      margin-top: 20px;
      p {
        padding: 2px 0;
      }
    }
    a {
      margin-top: 32px;
      display: block;
      width: 100%;
      background-color: #4c3cfb;
      color: ${colors.white};
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 16px;
      text-align: center;

      :hover {
        background-color: #4736fe;
      }
    }
  }
`;
