export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>OffSync - Security First Calendar</title>
        <meta name="description" content="Navigate the Unpredictable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
