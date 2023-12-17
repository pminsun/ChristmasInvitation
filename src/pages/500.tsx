import Seo from "@/components/ScreenStructure/Seo";
import { colors } from "@/styles/Color";
import { css } from "@emotion/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function NotFound() {
  const { data: session } = useSession();
  return (
    <>
      <Seo />
      <div css={notFound}>
        <p>서버 장애로 서비스를 할 수 없습니다.</p>
      </div>
    </>
  );
}

NotFound.auth = true;

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

  p {
    text-align: center;
    padding: 10px;
  }
`;
