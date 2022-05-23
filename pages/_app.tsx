import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}


//https://nomadcoders.co/carrot-market/lectures/3524
//8.4 withHandler (12:58)

//prisma 연결 : pscale connect carrot-market


export default MyApp;