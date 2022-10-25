import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface MetaProps {
  title: string;
  desc: string;
  children?: React.ReactNode;
}

const Layout: React.FC<MetaProps> = ({ children, title, desc }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
