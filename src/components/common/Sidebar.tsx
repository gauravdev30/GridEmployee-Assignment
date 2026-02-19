import { NavLink } from "react-router-dom";
import {
    Home,
    Users,
    BarChart3,
    Settings,
    ChevronRight,
    ChevronsLeft
} from "lucide-react";
import { useState } from "react";

type Props = {
    sidebarOpen: boolean;
    setSidebarOpen: (val: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const logoImg = new URL(
        "../../assets/images/logo.png",
        import.meta.url
    ).href;


    return (
        <>
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 lg:hidden z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`
    ${sidebarOpen ? "w-68 p-6" : "w-0 p-0"}
    fixed lg:relative
    h-[95vh]
    transition-all duration-300 ease-in-out
    bg-primary text-white
    rounded-2xl
    flex flex-col
    overflow-hidden
  `}
            >
                <div className="flex flex-col h-full">

                    <div className="flex items-center justify-between mb-8">
                        <img
                            src={logoImg}
                            alt="Logo"
                            className="h-8 object-contain"
                        />

                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-1 rounded-lg hover:bg-white/10 transition"
                        >
                            <ChevronsLeft size={18} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 text-sm pr-2">

                        <Item to="/" icon={<Home size={18} />} label="Home" />

                        <div>
                            <button
                                onClick={() => toggleMenu("myinfo")}
                                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-white/10"
                            >
                                <div className="flex items-center gap-3">
                                    <Users size={18} />
                                    <span>My Info</span>
                                </div>

                                <ChevronRight
                                    size={16}
                                    className={`transition-transform ${openMenu === "myinfo" ? "rotate-90" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        <Item to="/people" icon={<Users size={18} />} label="People" />

                        <div>
                            <button
                                onClick={() => toggleMenu("team")}
                                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-white/10"
                            >
                                <div className="flex items-center gap-3">
                                    <Users size={18} />
                                    <span>Team Management</span>
                                </div>

                                <ChevronRight
                                    size={16}
                                    className={`transition-transform ${openMenu === "team" ? "rotate-90" : ""
                                        }`}
                                />
                            </button>

                            {openMenu === "team" && (
                                <div className="ml-10 mt-2 space-y-2">
                                    <SubItem to="/time-management" label="Timesheet" />
                                    <SubItem to="/reimbursement" label="Reimbursement" />
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={() => toggleMenu("project")}
                                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-white/10"
                            >
                                <div className="flex items-center gap-3">
                                    <Users size={18} />
                                    <span>Project Setup</span>
                                </div>

                                <ChevronRight
                                    size={16}
                                    className={`transition-transform ${openMenu === "project" ? "rotate-90" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        <Item to="/hiring" icon={<BarChart3 size={18} />} label="Hiring" />
                        <Item to="/report" icon={<BarChart3 size={18} />} label="Report" />
                    </div>

                    <div className="pt-4 border-t border-white/10">
                        <NavLink
                            to="/settings"
                            className="flex items-center gap-3 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/10"
                        >
                            <Settings size={18} />
                            Settings
                        </NavLink>
                    </div>

                </div>
            </aside>


        </>
    );
};

export default Sidebar;


const Item = ({ to, icon, label }: any) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                ? "bg-white text-primary font-medium"
                : "hover:bg-white/10"
            }`
        }
    >
        {icon}
        <span>{label}</span>
    </NavLink>
);



const SubItem = ({ to, label }: any) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `relative flex items-center justify-between px-4 py-3 rounded-xl text-sm transition ${isActive
                ? "bg-white text-primary font-medium"
                : "hover:bg-white/10"
            }`
        }
    >

        <span className="absolute -left-6 top-0 bottom-0 w-[2px] bg-white/20"></span>

        <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 border-l-2 border-b-2 border-white/20 rounded-bl-xl"></span>

        {label}

        <ChevronRight size={14} className="opacity-70" />
    </NavLink>
);
