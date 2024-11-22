import React, { useState, useEffect, useRef } from "react";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const workDropdownRef = useRef(null);
  const logoutDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      workDropdownRef.current &&
      !workDropdownRef.current.contains(event.target) &&
      logoutDropdownRef.current &&
      !logoutDropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setIsWorkOpen(false);
      setIsLogoutOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/vidyalogo2.png"
          className="h-14 cursor-pointer"
          alt="Logo"
          onClick={() => navigate("/dashboard")}
        />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-500 focus:outline-none"
        >
          {isMobileMenuOpen ? <MenuIcon /> : <MenuIcon />}
        </button>
      </div>
      <div
        className={`md:flex ${
          isMobileMenuOpen ? "block" : "hidden"
        } mt-4 md:mt-0  flex justify-end  `}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <div
            className={`flex gap-2 hover:text-indigo-500 cursor-pointer ${
              activeMenu === "dashboard" ? "active" : ""
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <StackedLineChartIcon />
            <div className="text-sm md:text-base font-medium">Dashboard</div>
          </div>
          <div className="menu-container relative" ref={dropdownRef}>
            <div
              className="flex gap-2 hover:text-indigo-500 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <SummarizeIcon />
              <div className="text-sm md:text-base font-medium menu-item">
                Masters{" "}
                <span className="arrow">
                  {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
              </div>
            </div>
            {isOpen && (
              <div className="dropdown">
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/department")}
                >
                  Department
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/designation")}
                >
                  Designation
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/access-role")}
                >
                  Access Role
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/employee")}
                >
                  Employee
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/work-flow")}
                >
                  Work Flow
                </div>
              </div>
            )}
          </div>
          <div
            className={`flex gap-2 hover:text-indigo-500 cursor-pointer ${
              activeMenu === "auditTrail" ? "active" : ""
            }`}
            onClick={() => {
              setActiveMenu("auditTrail");
              navigate("/audit-trail");
            }}
          >
            <SignalCellularAltIcon />
            <div className="text-sm md:text-base font-medium">Audit Trail</div>
          </div>
          <div className="menu-container relative" ref={workDropdownRef}>
            <div
              className={`flex gap-2 hover:text-indigo-500 cursor-pointer menu-item ${
                activeMenu === "workPlace" ? "active" : ""
              }`}
              onClick={() => {
                setIsWorkOpen(!isWorkOpen);
                setActiveMenu("workPlace");
                setIsOpen(false);
              }}
            >
              <ApartmentIcon />
              <div className="text-sm md:text-base font-medium">
                Work Place{" "}
                <span className="arrow">
                  {isWorkOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
              </div>
            </div>
            {isWorkOpen && (
              <div className="dropdown flex flex-wrap gap-4">
                <div className="column">
                  <div className="px-4 pt-4 font-semibold">Components</div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/function-location");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Function Location
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setIsWorkOpen(!isWorkOpen);
                      navigate("/checklist-master");
                    }}
                  >
                    Checklist Master
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/master-tools");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Master Tools
                  </div>
                </div>
                <div className="column">
                  <div className="px-4 pt-4 font-semibold">Masters</div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setIsWorkOpen(!isWorkOpen);
                      navigate("/machine-creation");
                    }}
                  >
                    Machine Creation
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/schedule-creation");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Schedule Creation
                  </div>
                </div>
                <div className="column">
                  <div className="px-4 pt-4 font-semibold">Planers</div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/schedule-plan");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Schedule Plan
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/reschedule-plan");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Re-Schedule Plan
                  </div>
                </div>
                <div className="column">
                  <div className="px-4 pt-4 font-semibold">Reports</div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/machine-report");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Machine Report
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/schedule-report");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Schedule Report
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/certificate-master");
                      setIsWorkOpen(!isWorkOpen);
                    }}
                  >
                    Certificate Master
                  </div>
                  <div className="dropdown-item">Label Print</div>
                </div>
              </div>
            )}
          </div>
          <div className="menu-container relative" ref={logoutDropdownRef}>
            <div className="flex items-center justify-end menu-item">
              <PersonIcon
                onClick={() => {
                  setIsLogoutOpen(!isLogoutOpen);
                  setActiveMenu("login");
                }}
                className={activeMenu === "login" ? "active" : ""}
              />
              {isLogoutOpen && (
                <div className="dropdown w-64">
                  <div className="dropdown-item text-center">Pankaj</div>
                  <div className="p-2">
                    <button
                      className="p-3 bg-red-500 text-white w-full flex items-center justify-center"
                      onClick={() => navigate("/")}
                    >
                      <LogoutIcon className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
