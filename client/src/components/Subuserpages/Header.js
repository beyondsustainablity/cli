import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"
import { LoginContext } from '../ContextProvider/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom"

const Header = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutuser = async () => {
        let token = localStorage.getItem("usersdatatoken");
        let stoken = localStorage.getItem("susersdatatoken");
        let atoken = localStorage.getItem("ausersdatatoken");


        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
       //subuser
       
       const sres = await fetch("/subuserlogout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": stoken,
            Accept: "application/json"
        },
        credentials: "include"
    });

    const sdata = await sres.json();
    //sadmin
    
    const ares = await fetch("/superlogout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": atoken,
            Accept: "application/json"
        },
        credentials: "include"
    });

    const adata = await ares.json();

        if (data.status === 201) {
            console.log("you logout");
            localStorage.removeItem("usersdatatoken");
            setLoginData(false)
            history("/");
        }
        else if(sdata.status === 201){
            console.log("you logout");
            localStorage.removeItem("susersdatatoken");
            setLoginData(false)
            history("/");
        } 
        else if(adata.status === 201){
            console.log("you logout");
            localStorage.removeItem("ausersdatatoken");
            setLoginData(false)
            history("/");
        }else {
            console.log("error");
        }
    }

    const goDash = () => {
        history("/profile")
    }

    const goError = () => {
        history("*")
    }
    const hello = () => {
        history("/rec")
    }
    const hello1 = () => {
        history("/companyadd")
    }

    return (
        <>
        
      
            
        {/* <NavLink to="/dash"><h1>LIVABL</h1></NavLink> */}
            <div className="avtar">
                {
                    logindata.ValidUserOne ? <Avatar style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }} 
                    onClick={handleClick}>{logindata.ValidUserOne.fname[0].toUpperCase()}</Avatar> :
                        <Avatar style={{ background: "blue" }} onClick={handleClick} />
                }
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    logindata.ValidUserOne ? (
                        <>
                          
                            <MenuItem onClick={() => {
                                logoutuser()
                                handleClose()
                            }}>Logout</MenuItem>
                           
                        </>
                    ) : (
                        <>
                           
                        </>
                    )
                }
            </Menu>
    

</>
    )
}

export default Header