"use client"
export const metadata = {
  title: 'Second route',
  description: 'Author Ajeet jha',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
