import type { Metadata } from "next"
import "./globals.css"
import { PropsWithChildren } from "react"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Habbit Tracker"
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  )
}
