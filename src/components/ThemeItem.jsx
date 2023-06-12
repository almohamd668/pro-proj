import parse from 'html-react-parser';
const ThemeItem = ({color, img, changeColor}) => {
    return (
    
     <span style={{backgroundColor:color}} className="theme_img" 
     onClick={() => {changeColor(color)}}
     >{parse(img)}</span>  
    
    )
}

export default ThemeItem;
