// Components
import { CONTACT } from '../Config/contact.js'

//imagens
import whatsappIcon from '../assets/icons/whatsapp.svg';

//style
import '/src/Styles/ButtonWhats.scss';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`} // coloque o número correto
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default FloatingWhatsAppButton;
