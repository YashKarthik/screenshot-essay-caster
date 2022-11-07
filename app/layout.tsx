import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dracula">

      <head />
      <body>
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
      </body>
    </html>
  )
}
