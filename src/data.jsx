/* eslint-disable no-unused-vars */

import {FaHome,
        FaUser, 
        FaFolderOpen,
        FaEnvelopeOpen,
         FaBriefcase,
         FaGraduationCap,
         FaCode,
} from 'react-icons/fa';

import {FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';
import Work1 from './assets/work2.jpg';
import Work2 from './assets/work3.jpg';
import Work3 from './assets/work4.jpg'; 
import Work4 from './assets/work5.jpg'; 

export const links = [
    {
        id: 1 ,
        name: "Home", 
        icon: <FaHome className= 'nav_icon' />,
        path: '#home',
    },
    {
        id: 2 ,
        name: "About", 
        icon: <FaUser className= 'nav_icon' />,
        path: '#about',
    },
    {
        id: 3 ,
        name: "Portfolio", 
        icon: <FaFolderOpen className= 'nav_icon' />,
        path: '#portfolio',
    },
    {
        id: 4 ,
        name: "Contact",  
        icon: <FaEnvelopeOpen className= 'nav_icon' />,
        path: '#contact',
    },
]

export const personalInfo = [
    
        {
            id: 1 ,
            title: "First Name : ", 
            description: 'Mohammed',
        },
        {
            id: 2 ,
            title: "Last Name : ",  
            description: 'El mahmoud',
        },{
            id: 3 ,
            title: "Age : ", 
            description: '22 Years',
        },
        {
            id: 4 ,
            title: "Nationality : ", 
            description: 'Syrian',
        },
        {
            id: 5 ,
            title: "Freelance : ",  
            description: 'Available',
        },
        {
            id: 6 ,
            title: "Address : ",  
            description: 'Damascus',
        },
        {
            id: 7 ,
            title: "Phone : ", 
            description: '+963 940-373-898',
        },
        {
            id: 8 ,
            title: "Languages : ", 
            description: 'Arabic, English',
        },
]

export const status = [

    {
        id: 1,
        no: '2+',
        title: 'Years of <br/> Experience',
    },
    {
        id: 2,
        no: '12+',
        title: 'Completed <br/> Projects',
    },
    {
        id: 3,
        no: '8+',
        title: 'Work Hours<br/>  per day',
    },
    {
        id: 4,
        no: '12+',
        title: 'Happy <br/> Clients',
    },
]

export const resume = [
    
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2020-2023',
        title: 'Frontend Development <span> Youtube </span>',
        desc: 'i am a self motivated person, I learned front-end from youtube individually',
    },
    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2020-2023',
        title: 'Backend Development <span> University </span>',
        desc: ' I learned back-end from the University especially php and mysql ',
    },
    {
        id: 3,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2020-2023',
        title: 'Diploma <span> Albath University</span>',
        desc: ' Diploma in software engineering with good rate 71% , and graduate project rate 83%,',
    },
    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2019',
        title: 'Bachelor Degree <span> High School </span>',
        desc: ' scientific Bachelor Degree with rate 65%',
    },
]

export const skills = [
    {
        id: 1,
        percentage: '80',
        title: 'Html',
    },  {
        id: 2,
        percentage: '85',
        title: 'Javascript',
    },  {
        id: 3,
        percentage: '75',
        title: 'Css',
    },  
    {
        id: 5,
        percentage: '75',
        title: 'React',
    },
    {
        id: 8,
        percentage: '50',
        title: 'Next',
    },
    
    {
        id: 6,
        percentage: '40',
        title: 'Typescript',
    },
    {
        id: 4,
        percentage: '65',
        title: 'Redux/toolkit',
    },
 
     {
        id: 7,
        percentage: '65',
        title: 'Php',
    }, 
]

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'Bootstrap Template',
        details: [
            {
                icon: <FiFileText />,
                title: ' Project : <a  target="_blank"  href="https://let0idhpcep9xwvgayizrq.on.drv.tw/elzero%20design%201/">Demo</a>',
                desc: '',
            },
            {
                icon: <FiUser />,
                title: 'Name :',
                desc: ' Bondi',
            }, 
        ]
    },
    {
        id: 2,
        img: Work2,
        title: 'E-commerce App',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : <a  target="_blank"  href="https://almohamd668.github.io/Simple-E-commence-App">Demo</a>',
                desc: '',
            },
            {
                icon: <FiUser />,
                title: 'Name : E-commerce App',
                desc: '',
            },  {
                icon: <FaCode />,
                title: 'Repo & code : <a  target="_blank"  href="https://github.com/almohamd668/Simple-E-commence-App">Repository</a>',
                desc: '',
            },
        ]
    },
    {
        id: 3,
        img: Work3,
        title: 'React Gaming App',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : <a  target="_blank"  href="https://almohamd668.github.io/react-Gaming-/">Demo</a>',
                desc: '',
            },
            {
                icon: <FiUser />,
                title: 'Name : React Gaming App',
                desc: '',
            },  {
                icon: <FaCode />,
                title: 'Repo & code : <a  target="_blank"  href="https://github.com/almohamd668/react-Gaming-">Repository</a>',
                desc: '',
            },
        ]
    },
    {
        id: 4,
        img: Work4,
        title: 'Crud Books App',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : Not published yet,',
                desc: ' I could not find books api',
            },
            {
                icon: <FiUser />,
                title: 'Project : Crud books app , to trining on Redux toolkit thunk middleware ',
                desc: '',
            },  {
                icon: <FaCode />,
                title: 'Repo & code : <a  target="_blank"  href="https://github.com/almohamd668/Thunk-reduxToolkit-">Repository</a>',
                desc: '',
            },
        ]
    }

]

export const themes = [ 
    {
        id: 1,
        img: '<span>1</span>',
        color: 'hsl(255, 45%, 51%)',
    },
    {
        id: 2,
        img: '<span>2</span>',
        color: 'hsl(4, 93%, 54%)',
    },
    {
        id: 3,
        img: '<span>3</span>',
        color: 'hsl(579, 85%, 51%)',
    },
    {
        id: 4,
        img: '<span>4</span>',
        color: 'hsl(255, 73%, 57%)',
    },
    {
        id: 5,
        img: '<span>5</span>',
        color: 'hsl(80, 61%, 50%)',
    },
    {
        id: 6,
        img: '<span>6</span>',
        color: 'hsl(19, 96%, 52%)',
    },
]