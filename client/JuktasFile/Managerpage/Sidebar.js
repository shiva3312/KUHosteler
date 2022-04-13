import { useState } from "react";

const Sidebar2 = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: "fa fa-dashboard fa-lg"},
    { title: "Payment", icon: "fa fa-dollar fa-lg" },
    { title: "Student Manage", icon: "fa fa-user-circle fa-lg"},
    { title: "Staff ", icon: "fa fa-user-circle fa-lg" },
    { title: "Meal Manage", icon: "fa fa-glass fa-lg" },
    { title: "Notice", icon: "fa fa-file fa-lg" },
   { title: "Setting", icon: "fa fa-gear fa-lg" },
   { title: "Log out", icon: "fa fa-arrow-left fa-lg",gap:"true" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-30"
        }  h-screen p-3  pt-8 relative duration-400 gradiant`}
      >
        <i className={`ps-2 fa fa-bars cursor-pointer fa-lg text-light 
             ${!open}`}
          onClick={() => setOpen(!open)}></i>
          
              <span className={`${!open && "hidden"}  text-light fs-3 ps-3 origin-left duration-200`}>
                Menu
              </span>
        
        <ul className="ps-0 pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-4 
              ${Menu.gap ? "mt-8" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <i className={`${Menu.icon}`} > </i>
              <span className={`${!open && "hidden"} ps-2 origin-left duration-200`}>
                {Menu.title}
              </span>
             
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
          Homepage
      </div>
    </div>
  );
};
export default Sidebar2;