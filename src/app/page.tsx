import Image from "next/image";
import { Hero } from "../../components/Index";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}

// import Image from "next/image";
// import { Hero } from "../../components/Index";

// import type { AppProps } from "next/app";

// // export default function Home() {
// //   return (
// //     <main className="overflow-hidden">
// //       import type {AppProps} from "next/app";
// //     </main>
// //   );
// // }
// export default function Home({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
