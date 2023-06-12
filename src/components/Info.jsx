  
import {personalInfo} from '../data';

const Info = () => {
  return (
    <>
    {personalInfo.map(({id, title, description}) => {
        return (
            <li key={id} className='info_item' >
                <span className="info_title">{title}</span>
                <span className="info_description">{description}</span>    
            </li>
        )
    })}
      
    </>
  )
}

export default Info
