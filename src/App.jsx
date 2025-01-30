import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import { Home, About, Skills, Contact } from './pages';
import { listMenu } from './constants';

const components = { Home, About, Skills, Contact };

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          {listMenu.map((v, i) => {
            const Component = components[v.element.split('/').pop()];
            return <Route key={i} path={v.path} element={<Component />} />;
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
