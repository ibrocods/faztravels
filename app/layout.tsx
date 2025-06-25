// app/layout.tsx
import '/styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export const metadata = {
  title: 'FazTravels',
  description: 'Hajj & Umrah Pilgrimage Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>
          {children}
          < Footer />
        </main>
      </body>
    </html>
  );
}
