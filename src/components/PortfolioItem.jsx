import {useState} from 'react'
import Close from '../assets/icons8-close-32.png';

import parse from 'html-react-parser'


const Portfolio = ({ img, title, details }) => {
     const [modal,setModal] = useState(false);
  
  const toggleModal = () => { 
    setModal(!modal);
  }
     return (
    <>
      <div className="portfolio_item">
        <img src={img} alt="" className="portfolio_img" />

        <div className="portfolio_hover" onClick={toggleModal}>
          <h3 className="portfolio_title">{title}</h3>
        </div>

        {modal && (
          <div className="portfolio_modal">
          <div className="portfolio_modal_content">
            <img src={Close} alt="" className="modal_close" onClick={toggleModal}/>

            <h3 className='modal_title'>{title}</h3>

              <ul className="modal_list grid">
            {details.map(({icon, title, desc},idx) => {
                return (
                    <li className="modal_item" key={idx}>
                        <span className="item_icon">{icon}</span>
                  
                     <div>
                      <span className="item_title">{parse(title)}</span>
                      <span className="item_details">{desc}</span>
                     </div>     
                    </li>
                )
            })}
              </ul>

              <img src={img} alt="" className="modal_img" />
          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
