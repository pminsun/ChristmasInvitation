import React, { useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Global } from "@emotion/react";
import { loadingReset, loginReset, reset } from "@/styles/Global";
import Loading from "@/components/ScreenStructure/Loading";
import type { NextComponentType } from "next";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SCoreDreamFont } from "@/styles/Fonts";
import Head from "next/head";

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean }; // add auth type
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  ...appProps
}: CustomAppProps) {
  const withoutLayout = appProps.router.pathname === "/login";

  const LayoutComponent = withoutLayout ? React.Fragment : Layout;

  const [queryClient] = React.useState(() => new QueryClient());

  //mobile 100vh
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <Head>
        <title>크리스마스 파티 초대장</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Minsun" />
        <meta
          name="description"
          content="12/23-24 크리스마스 파티 초대장 입니다."
        />
        <meta property="og:title" content={"크리스마스 파티 초대장"} />
        <meta property="og:site_name" content="크리스마스 파티" />
        <meta
          property="og:description"
          content={"12/23-24 크리스마스 파티 초대장 입니다."}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://christmas-invitation-pminsun.vercel.app/"}
        />
        <meta
          property="og:image"
          content={
            "https://images.unsplash.com/photo-1576995083066-f7bf549dc771?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:article:author" content="MinSun" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <LayoutComponent>
                <Hydrate state={pageProps.dehydratedState}>
                  <Global styles={[reset, SCoreDreamFont]} />
                  <Component {...pageProps} />
                </Hydrate>
              </LayoutComponent>
            </Auth>
          ) : (
            <LayoutComponent>
              <Global styles={[loginReset, SCoreDreamFont]} />
              <Component {...pageProps} />
            </LayoutComponent>
          )}
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}

function Auth({ children }: PropsWithChildren) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      const location = router.pathname;
      router.push(`/login`);
    },
  });

  if (status === "loading") {
    return (
      <>
        <Global styles={loadingReset} />
        <Loading />
      </>
    );
  }

  return <>{children}</>;
}
