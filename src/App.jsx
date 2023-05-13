import './styles/App.scss';
import MyNavbar from './components/navbar/MyNavbar';
import MyBanner from './components/banner/MyBanner';
import MySkills from './components/Skills/MySkills';
import About from './components/about/About';
import MyProjects from './components/projects/MyProjects';
import MyForm from './components/form/MyForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='flex'>
      <MyNavbar />
      <MyBanner />
      <MyProjects />
      <MySkills />
      <About />
      <MyForm />
      <Footer />
    </div>
  );
}

export default App;
