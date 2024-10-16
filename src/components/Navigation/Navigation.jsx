import React from "react";
// import '../../index.css';

import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Avatar, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Auth/Action";

const Navigation = () => {

  const {auth}=useSelector((Store)=>Store)

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch=useDispatch();



  const open = Boolean(anchorEl);

  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogout=()=>{
  console.log("logout");
    handleClose();

    dispatch(logout())
  }



  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            src="https://i.pinimg.com/564x/1a/29/48/1a2948de262e9fe7023ff74a05ee3d54.jpg"
            height={50}
            width={50}
            alt="Logo"
          />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${auth.user?.id}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>

        {/*Tweet button */}
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1d9bf0",
            }}
            variant="contained"
            >
            Tweet
          </Button>
        </div>
      </div>

      {/* profile handle username section*/}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="user name"
            src="https://i.pinimg.com/564x/1a/29/48/1a2948de"
          />

          <div>
            <span> {auth.user?.fullName} </span>
            <span className="opacity-70"> @{auth.user.fullName.split(" ").join("_").toLowerCase()}</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
          <MoreHorizIcon />     
            
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
