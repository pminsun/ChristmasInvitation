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
  );
}

function Auth({ children }: PropsWithChildren) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      const location = router.pathname;
      router.push(`${location}/login`);
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
