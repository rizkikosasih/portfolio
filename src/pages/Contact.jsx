import { useRef, useState, useEffect } from 'react';
import Alert from './../components/Alert';
import ContactForm from '../components/contact/ContactForm';
import ContactCatCanvas from '../components/contact/ContactCatCanvas';
import Bubbles from '../components/contact/Bubbles';
import useAlert from '../hooks/useAlert';

const Contact = () => {
  const formRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState('Sleeping');
  const [currentSize, setCurrentSize] = useState('xlMax');
  const { alert, showAlert, hideAlert } = useAlert();

  // Responsif untuk ukuran kucing
  useEffect(() => {
    if (window.innerWidth <= 480) setCurrentSize('smMax');
    else if (window.innerWidth <= 768) setCurrentSize('mdMax');
    else if (window.innerWidth <= 1024) setCurrentSize('lgMax');
    else setCurrentSize('xlMax');
  }, []);

  return (
    <section className="max-container relative" style={{ paddingBottom: '1rem' }}>
      {alert.show && <Alert {...alert} />}
      <h1 className="head-text mt-5">Hubungi Saya</h1>
      <div className="flex md:flex-row flex-col-reverse items-center pb-6">
        <div className="flex flex-col w-full md:flex-shrink-0 md:flex-grow-0 md:w-1/2">
          <ContactForm
            formRef={formRef}
            setCurrentAnimation={setCurrentAnimation}
            showAlert={showAlert}
            hideAlert={hideAlert}
          />
        </div>
        <div className="flex flex-col w-full md:flex-shrink-0 md:flex-grow-0 md:w-1/2 absolute top-1/3 -z-10 md:relative md:z-[1]">
          <ContactCatCanvas
            currentAnimation={currentAnimation}
            currentSize={currentSize}
          />
        </div>
      </div>
      <div className="absolute -bottom-[5%] left-0 right-0 z-[1]">
        <Bubbles />
      </div>
    </section>
  );
};

export default Contact;
