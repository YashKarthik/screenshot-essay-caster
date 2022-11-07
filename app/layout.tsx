import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">

      <head />
      <body>
        <nav>
          <div className="navbar bg-base-300">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Essay Caster</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li><a>Github</a></li>
                <li><a>About/FAQ</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
