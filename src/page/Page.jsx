import './styles.css'
import Header from '../components/Header/index';
import BodyPage from '../components/BodyPage';
import Footer from '../components/Footer';

function Page() {


  return (
    <div className="container_page">
      <Header />
      <BodyPage />
      <Footer />
    </div>
  )
}

export default Page;
