import type { Dispatch, SetStateAction } from "react";
import { Menu, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type Props = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Topbar = ({ setSidebarOpen }: Props) => {
  const location = useLocation();
  const [time, setTime] = useState("");

  const getTitle = () => {
    if (location.pathname.includes("time-management")) {
      return "Team Management > Timesheet";
    }
    if (location.pathname.includes("people")) {
      return "People";
    }
    return "Dashboard";
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour12: false,
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const profileImg = new URL(
    "../../assets/images/profile.png",
    import.meta.url
  ).href;

  const editImg = new URL(
    "../../assets/icons/edit.png",
    import.meta.url
  ).href;


  const notificationImg = new URL(
    "../../assets/icons/notification.png",
    import.meta.url
  ).href;


  return (
    <div className="flex justify-between items-center bg-white rounded-2xl px-4 sm:px-6 py-3 shadow-sm">

      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>

        <h2 className="text-lg font-semibold text-gray-800">
          {getTitle()}
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <div className="hidden sm:flex items-center gap-4 px-4 py-2">

          <span className="text-xs font-medium bg-white px-3 py-1.5 rounded-full border border-gray-200">
            MST
          </span>

          <div className="flex items-center gap-3 bg-white px-1 rounded-full border border-gray-200">

            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
              <Clock size={14} />
              <span>{time}</span>
            </div>

            <img
              src={editImg}
              alt="Edit"
              className="w-full h-8 object-contain"
            />
          </div>


          <img
            src={notificationImg}
            alt="Notification"
            className="w-9 h-9 object-contain"
          />

        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Topbar;
