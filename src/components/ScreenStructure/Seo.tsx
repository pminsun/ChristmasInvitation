import Head from "next/head";

export default function Seo() {
  return (
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
  );
}
