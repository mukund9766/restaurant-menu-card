import React,{useState} from 'react'
import "./style.css"
import Menu from "./MenuApi.js"
import MenuCard from "./MenuCard"
import Navbar from "./Navbarr.js"

const uniqueList = ["All",
    ...new Set(Menu.map((curElem)=>{
        return curElem.category;
    })), 
];


const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItems = (category) =>{
        if (category === "All"){
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return(
        <>
        <Navbar filterItems={filterItems} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
        </>
    );
};

export default Resturant;