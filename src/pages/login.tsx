/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Ilogin } from "@/InterfaceGather";
import { colors } from "@/styles/Color";
import Seo from "@/components/ScreenStructure/Seo";
import Image from "next/image";
import { FiLock, FiEyeOff, FiEye, FiUser, FiArrowLeft } from "react-icons/fi";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Ilogin>();

  // 계정정보 저장
  const [rememberId, setRememberId] = useState("");

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberId(e.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const clickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onValid = async (data: Ilogin) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!result?.error) {
      router.replace("/");
    } else {
      setError("loginError", {
        message: "성함과 시크릿코드를 다시 확인해주세요.",
      });
    }
  };

  return (
    <>
      <Seo />
      {mounted && (
        <div css={loginPage}>
          <div>
            <div className="loginTop">
              <div className="keyImage">
                <Image
                  src={"/key.svg"}
                  alt="key"
                  width={250}
                  height={325}
                  priority
                />
                <div className="twinkleImage">
                  <Image
                    src={"/twinkle.svg"}
                    alt="twinkle"
                    width={280}
                    height={257}
                  />
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onValid)} css={loginForm}>
              <div>
                <div className="inputArea">
                  <FiUser />
                  <input
                    type="text"
                    value={rememberId || ""}
                    placeholder="성함"
                    {...register("email", {
                      required: "성함은 필수 입력입니다.",
                    })}
                    onChange={onIdChange}
                  />
                </div>
              </div>
              <div>
                <div className="inputArea">
                  <FiLock />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="시크릿코드"
                    {...register("password", {
                      required: "시크릿코드는 필수 입력입니다.",
                      minLength: {
                        value: 8,
                        message: "시크릿코드를 입력하세요.",
                      },
                    })}
                  />
                  <div className="passwordShow" onClick={clickShowPassword}>
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>
              </div>
              <p {...register("loginError")}>
                {errors.loginError && (
                  <span className="errorLogin">
                    {errors.loginError.message}
                  </span>
                )}
              </p>
              <button type="submit" disabled={isSubmitting}>
                입장하기
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

Login.auth = false;

const loginPage = css`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.chartBackground};

  @media (max-width: 1023px) {
    height: 100%;
    padding: 0 16px;
  }

  > div:first-of-type {
    position: relative;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    height: 80%;
    border-radius: 8px;
    color: ${colors.white};

    .keyImage {
      position: relative;
      height: 325px;

      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scale(1.1);
      }
    }

    .twinkleImage {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 280px;
      height: 257px;

      img {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }
`;

const loginForm = css`
  > div {
    display: flex;
    flex-direction: column;
    height: 60px;
    .inputArea {
      position: relative;
      width: 100%;

      > svg {
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translateY(-50%);
      }

      .passwordShow {
        position: absolute;
        top: 50%;
        right: 14px;
        transform: translateY(-45%);
        width: 20px;
        cursor: pointer;
      }
    }

    input {
      width: 100%;
      padding: 16px 40px;
      border-radius: 8px;
      color: ${colors.white};
      background-color: ${colors.chartBackground};
      border: 2px solid ${colors.opacityWhite};

      &:focus {
        border: 2px solid #0f7040;
      }
    }
    .errorTxt {
      font-size: 8px;
      padding: 5px 0 6px 12px;
      color: ${colors.red};
    }
  }

  p {
    height: 20px;
    line-height: 20px;

    .errorLogin {
      font-size: 10px;
      color: #cf3f22;
    }
  }

  button {
    position: absolute;
    padding: 14px 16px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    border-radius: 8px;
    background-color: #0f7040;
    cursor: pointer;
    color: ${colors.white};
    font-size: 16px;
  }
`;
