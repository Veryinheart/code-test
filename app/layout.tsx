import './globals.css';
import Header from './Header';

export const metadata = {
  title: '5th DND Spells',
  description: 'The 5th Edition Dungeons and Dragons Spells',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
