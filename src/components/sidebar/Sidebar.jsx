import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";

import { links } from "./../../data/config";
import { useStateContext } from "../../context/ContextProvider";
import { IconButton, Tooltip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const useStyles = makeStyles((theme) => ({
  sidebar: {},
  items: {
    height: "100vh",
    // backgroundColor: "aqua",
    padding: 10,
    listStyle: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
}));

const Sidebar = () => {
  const { currentColor, setActiveMenu } = useStateContext();

  const activeLink = `flex items-center capitalize rounded-lg gap-3 p-2 text-sm text-white font-bold active`;
  const normalLink = `flex items-center capitalize rounded-lg gap-3 p-2 text-sm hover:bg-gray-100`;

  function removeActiveClass() {
    document
      .querySelectorAll("a")
      .forEach((element) => element.classList.remove("active"));
  }

  function handleActiveLink(e) {
    const el = e.target;
    removeActiveClass();
    el.closest("a").classList.add("active");
  }

  const classes = useStyles();

  return (
    <div className=" bg-white dark:bg-main-dark-bg w-full overflow-auto">
      <div
        className="flex justify-between items-center p-4"
        style={{ color: currentColor }}
      >
        <Link to="/" className="text-lg font-bold capitalize">
          Admin dashboard
        </Link>

        <Tooltip title="Menu" className="p-1 ml-4">
          <IconButton
            className=" text-slate-400"
            onClick={() => setActiveMenu(false)}
          >
            <ClearIcon style={{ fontSize: "1.2rem" }} />
          </IconButton>
        </Tooltip>
      </div>

      <div className="flex flex-col ml-4 pr-3">
        {links.map((item) => {
          return (
            <div key={item.title}>
              <p className="text-gray-400 text-sm capitalize mt-2 mb-1">
                {item.title}
              </p>
              <ul className="flex flex-col gap-2">
                {item.links.map((link) => {
                  return (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      style={({ isActive }) => {
                        return {
                          background: isActive ? currentColor : "",
                        };
                      }}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <span
                        className={`icon text-[${currentColor}] dark:text-white`}
                      >
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </NavLink>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="sidebar">
    //   <Box sx={{ flexGrow: 1 }}>
    //     <Grid container direction="column">
    //       <ul className={classes.items}>
    //         <span className="title">main</span>
    //         <Grid item>
    //           <Link to="/" className="active" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <DashboardIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>dashboard</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         <Grid item>
    //           <Link to="/" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <AssessmentOutlinedIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>stats</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         <Grid item>
    //           <Link to="/users" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <PersonOutlineIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>users</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         <Grid item>
    //           <Link to="/orders" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <PaymentOutlinedIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>orders</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         <span className="title">services</span>
    //         <Grid item>
    //           <Link to="/admins" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <SupervisorAccountOutlinedIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>admins</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         <Grid item>
    //           <Link to="/config" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <SettingsOutlinedIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>config</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         <span className="title">user</span>
    //         <Grid item>
    //           <Link to="/profile" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <AccountCircleOutlinedIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>profile</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         <Grid item>
    //           <Link to="/logout" onClick={handleActiveLink}>
    //             <li className="item">
    //               <Grid item>
    //                 <ExitToAppOutlinedIcon className="icon" />
    //               </Grid>

    //               <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
    //                 <span>logout</span>
    //               </Grid>
    //             </li>
    //           </Link>
    //         </Grid>

    //         {/* <Link to="/" className="active" onClick={handleActiveLink}>
    //         <li className="item">
    //           <DashboardIcon className="icon" />
    //           <span>dashboard</span>
    //         </li>
    //       </Link>

    //       <li className="item">
    //         <AssessmentOutlinedIcon className="icon" />
    //         <span>stats</span>
    //         </li>

    //         <span className="title">list</span>
    //         <Link to="/users" onClick={handleActiveLink}>
    //         <li className="item">
    //         <PersonOutlineIcon className="icon" />
    //         <span>users</span>
    //         </li>
    //         </Link>

    //         <Link to="/products" onClick={handleActiveLink}>
    //         <li className="item">
    //         <StoreOutlinedIcon className="icon" />
    //         <span>products</span>
    //         </li>
    //         </Link>

    //         <Link to="/orders" onClick={handleActiveLink}>
    //         <li className="item">
    //         <PaymentOutlinedIcon className="icon" />
    //         <span>orders</span>
    //         </li>
    //         </Link>

    //         <span className="title">services</span>

    //       <Link to="/admins" onClick={handleActiveLink}>
    //         <li className="item">
    //           <SupervisorAccountOutlinedIcon className="icon" />
    //           <span>admins</span>
    //           </li>
    //           </Link>

    //           <Link to="/config" onClick={handleActiveLink}>
    //         <li className="item">
    //         <SettingsOutlinedIcon className="icon" />
    //         <span>config</span>
    //         </li>
    //         </Link>

    //       <span className="title">user</span>

    //       <Link to="/profile" onClick={handleActiveLink}>
    //       <li className="item">
    //       <AccountCircleOutlinedIcon className="icon" />
    //       <span>profile</span>
    //         </li>
    //         </Link>

    //         <Link to="/logout" onClick={handleActiveLink}>
    //         <li className="item">
    //         <ExitToAppOutlinedIcon className="icon" />
    //         <span>logout</span>
    //         </li>
    //       </Link> */}
    //       </ul>

    //       {/* <div className="colorOptions">
    //     <span className="title">color options</span>
    //     <div className="options">
    //     <span className="colorOption"></span>
    //     <span className="colorOption"></span>
    //     </div>
    //   </div> */}
    //     </Grid>
    //   </Box>
    // </div>
  );
};

export default Sidebar;
