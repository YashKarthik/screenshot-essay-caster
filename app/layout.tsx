import Image from 'next/image'
import './globals.css'
import BuyMeACoffee from "../public/bmc-full-logo.png" ;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dracula">

      <head />
      <body className="flex flex-col justify-between min-h-[100vh]">
        <nav>
          <div className="navbar bg-base-100">
            <div className="m-2 flex-1 flex-col items-start">
              <a href="/" className="text-secondary link link-hover normal-case text-xl">Essay Caster</a>
              <p className="text-neutral-content">Latest screenshot essays from Farcaster</p>
            </div>
            <div className="flex-none">
              <ul className="menu-horizontal">

                <li className="p-1 link">
                  <a target="_blank" href="https://github.com/yashkarthik/screenshot-essay-caster">
                    Github
                  </a>
                </li>

                <li className="p-1 link">
                  <a href="/about">
                    About/FAQ
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        {children}

        <footer className="mb-0 footer items-center p-4 bg-base-300 text-neutral-content">
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

            <p className="text-secondary font-mono">
              yashkarthik.eth
            </p>

            <a
              href="https://www.buymeacoffee.com/yashkarthik" 
              target="_blank"
              className="link border-2 rounded-md bg-white"
            >
              <Image 
                src={BuyMeACoffee}
                alt="Buy me a coffee button" 
                width="100" 
                height="100"
              />
            </a>

          </div>
        </footer>

      </body>
    </html>
  )
}
