import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import Seo from "./ScreenStructure/Seo";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div css={layout}>
      <Seo />
      <section className="screen-area">{children}</section>
    </div>
  );
}

const layout = css`
  overflow-x: hidden !important;

  .screen-area {
    width: 100%;
    height: 100%;
  }
`;
