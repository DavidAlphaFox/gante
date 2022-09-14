import Head from 'next/head';
import Link from 'next/link';
import User from 'components/user';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Gante! 高效的项目管理，流程图在线工具</title>
        <meta name="description" content="Gante是一款稳定高效的项目管理工具, 可靠，稳定，高效，免费！" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-signin-client_id" content="499253238732-j69pk534uht0ce1h8vg1ts8epak5rgm8.apps.googleusercontent.com" />
      </Head>

      <main className="fixed left-0 right-0 bottom-0 top-0">
        <header className="z-10 absolute right-0 pr-2 pt-2">
          <User />
        </header>
        <div className="w-full h-full bg-[url('/gante-first.png')] bg-cover " >
        </div>
        <div className="text-black h-[300px] flex items-center text-blod text-[30px] absolute top-0 shadow-lg shadow-blue/50 shadow px-10 bg-[#003f5c] w-full">
          <div className="flex font-mono text-white justify-center items-center">
            打开我的
            <Link href="/editor">
              <a className="ml-4 bg-blue-500/50 p-4 border-box text-[20px] block box-border rounded-lg hover:ring ring-[#d6e6ff] ring-offset-black hover:ring-offset-2">Gante工具</a>
            </Link>
          </div>
        </div>
      </main>

    </div>
  )
}
