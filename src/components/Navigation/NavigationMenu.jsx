import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import Verified from "@mui/icons-material/Verified";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";

export const navigationMenu = [
  {
    title: "Home",
    icon: <HomeIcon />, // Directly use the JSX
    path: "/home",
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    path: "/explore",
  },
  {
    title: "Notifications",
    icon: <NotificationsIcon />,
    path: "/notifications",
  },
  {
    title: "Messages",
    icon: <MessageIcon />,
    path: "/messages",
  },
  {
    title: "Lists",
    icon: <ListAltIcon />,
    path: "/lists",
  },
  {
    title: "Communities",
    icon: <GroupIcon />,
    path: "/communities",
  },
  {
    title: "Verified",
    icon: <Verified />,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: <AccountCircle />,
    path: "/profile",
  },
  {
    title: "More",
    icon: <PendingIcon />,
    path: "/more",
  },
];
