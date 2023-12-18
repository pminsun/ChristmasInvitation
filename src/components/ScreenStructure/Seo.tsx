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
      <meta property="og:site_name" content="MinSun's Blog" />
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
          "https://images.unsplash.com/photo-1595424377378-a253ca4a7486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFRCU4MSVBQyVFQiVBNiVBQyVFQyU4QSVBNCVFQiVBNyU4OCVFQyU4QSVBNCUyMCVFRCU4QSVCOCVFQiVBNiVBQ3xlbnwwfHwwfHx8MA%3D%3D"
        }
      />
    </Head>
  );
}
