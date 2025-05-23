import type { Metadata } from 'next';

import Script from 'next/script';

import Providers from './Providers';
import './globals.css';

export const metadata: Metadata = {
  title: '코스팔레트',
  description:
    '지도 기반 사용자 참여형 코스 추천 및 공유 플랫폼 코스팔레트입니다.',
  openGraph: {
    title: '코스팔레트',
    description:
      '지도 기반 사용자 참여형 코스 추천 및 공유 플랫폼 코스팔레트입니다.',
    images: [
      {
        url: 'https://course-palette.com/images/logo.svg',
        width: 600,
        height: 700,
        alt: '코스팔레트 로고',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
};

const KAKAO_MAP_SRC = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_CLIENT_ID}&libraries=services,clusterer&autoload=false`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/* Preconnect 추가: 카카오 API 서버와 미리 연결하여 DNS 조회, TCP 핸드셰이크, TLS 협상 시간 절약 */}
        <link rel='preconnect' href='https://dapi.kakao.com' />
        <link rel='preconnect' href='https://*.kakaocdn.net' />{' '}
        {/* 지도 타일 및 기타 리소스용 */}
      </head>
      <body className='w-screen h-screen overflow-x-hidden'>
        <Script src={KAKAO_MAP_SRC} strategy='beforeInteractive' />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
