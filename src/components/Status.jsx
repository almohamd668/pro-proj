import {status} from '../data';
 import parse from 'html-react-parser';
const Status = () => {
  return (
    <>
      {status.map(({no ,id ,title}) => {
        return (
          <div className="status_box" key={id}>
            <h3 className="status_no">{no}</h3>
            <p className="status_title">{parse(title)}</p>
          </div>
        )
      })}
    </>
  )
}

export default Status
