/** @jsxImportSource @emotion/react */
import { ModalDefaultType, VariantObjType } from "@/InterfaceGather";
import { colors } from "@/styles/Color";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

export default function Modal({
  onClickToggleModal,
  children,
  title,
  closeBtn,
  width,
  height,
}: PropsWithChildren<ModalDefaultType>) {
  const router = useRouter();

  const innerWidth = window.innerWidth;

  return (
    <div css={modalContainer}>
      <dialog
        css={{
          width: innerWidth < 1024 ? "100%" : width,
          height: height,
          padding: closeBtn ? "10px 20px 20px 20px" : "20px",
        }}
      >
        {closeBtn && (
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginLeft: "auto",
            }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              if (onClickToggleModal) {
                onClickToggleModal();
              }
            }}
          >
            <IoIosClose css={{ fontSize: "32px" }} />
          </div>
        )}
        {title && <div className="title">{title}</div>}
        {children}
      </dialog>
      <div className="backdrop"></div>
    </div>
  );
}

const modalContainer = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: ${colors.chartBackground};
    color: ${colors.text};
    z-index: 10000;

    .title {
      padding: 5px 0 15px;
      font-size: 16px;
    }

    @media (max-width: 1280px) {
      transform: translate(-50%, -50%) scale(0.85);
    }
  }

  .backdrop {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
