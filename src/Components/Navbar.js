import React,{useState} from 'react'
import Form from './Form';


function Navbar() {
    const[title , setTitle] = useState("Borrower Company Info");
    const[selected, setSelected] = useState("")

    function pageHandler(index,title){
        setTitle(title)
        setSelected(index);
    }


    const pages = ["Borrower Company Info","Director Info","Financial Info","Past Performance Details","Document Upload"]
    return (
    <React.Fragment>
    <div className="container">
    {pages.map((title,index)=>{
        return (<div key={index}>
            <h6 className="navbar_number" style={{color:selected===index?"white":"",backgroundColor:selected===index?"#1882FF":""}} onClick={()=>pageHandler(index,title)}>{index+1}</h6>
            <h6 style={{color:selected===index?"#1882FF":""}} onClick={()=>pageHandler(index)}>{title}</h6>
        </div>)
    })}
    </div>
    <Form title={title}/>
    </React.Fragment>
  )
}

export default Navbar