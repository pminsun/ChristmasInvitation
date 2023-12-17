import Seo from "@/components/ScreenStructure/Seo";
import { colors } from "@/styles/Color";
import { css } from "@emotion/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function NotFound() {
  const { data: session, status } = useSession();

  return (
    <>
      <Seo />
      <div css={notFound}>
        <div>
          <p>주소를 확인해주세요.</p>
          <p>요청하신 페이지가 존재하지 않습니다.</p>
        </div>
        <Link href={"/gateway"}>홈으로 돌아가기</Link>
      </div>
    </>
  );
}

NotFound.auth = true || false;

const notFound = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  border-radius: 8px;
  padding: 10px;
  background: ${colors.chartBackground};

  @media (max-width: 1023px) {
    width: calc(100% - 32px);
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
`;
