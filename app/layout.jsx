import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata={
  title: 'property pulse',
  keywords: 'property, rentals, real estate',
  description: 'find the perfect rental property ',
}
const ManLayout = ({children}) => {
  return ( <html>
    <body>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </body>
  </html> );
}
 
export default ManLayout;