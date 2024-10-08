import Footer from '@/components/ui/footer/Footer';
import Navbar from '@/components/ui/navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col min-h-screen bg-gray-800/50 '>
      {/*bg-gray-600*/}
      <Navbar />
      <div className='px-0 sm:px-10 mt-24 flex-1'>{children}</div>
      <Footer />
    </main>
  );
}
