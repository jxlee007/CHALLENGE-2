import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="inter">{children}</body>
    </html>
  );
}
