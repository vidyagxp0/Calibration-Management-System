import React, { useState } from "react";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  return (
    <div className="bg-white grid grid-cols-5 gap-4 p-4">
      <div>
        <img src="vidyalogo2.png" className="h-[40px]" alt="Logo" />
      </div>
      <div className="flex gap-4 items-center justify-center col-span-3">
        <div
          className="flex gap-3 hover:text-indigo-500 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <StackedLineChartIcon />
          <div className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer">
            Dashboard
          </div>
        </div>
        <div className="menu-container">
          <div className="flex gap-3 hover:text-indigo-500 cursor-pointer">
            <SummarizeIcon />

            <div
              className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer menu-item"
              onClick={toggleDropdown}
            >
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
        <div className="flex gap-3 hover:text-indigo-500 cursor-pointer">
          <SignalCellularAltIcon />
          <div
            className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer"
            onClick={() => navigate("/audit-trail")}
          >
            Audit Trail
          </div>
        </div>
        <div className="menu-container">
          <div
            className="flex gap-3 hover:text-indigo-500 cursor-pointer menu-item"
            onClick={() => setIsWorkOpen(!isWorkOpen)}
          >
            <ApartmentIcon />
            <div className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer">
              Work Place{" "}
              <span className="arrow">
                {isWorkOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </span>
            </div>
          </div>
          {isWorkOpen && (
            <div className="dropdown flex gap-4">
              <div className=" column">
                <div className="px-4 pt-4 font-semibold">Components</div>
                <div
                  className="dropdown-item "
                  onClick={() => navigate("/function-location")}
                >
                  Function Location
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/checklist-master")}
                >
                  Checklist Master
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/master-tools")}
                >
                  Master Tools
                </div>
              </div>
              <div className=" column">
                <div className="px-4 pt-4 font-semibold">Masters</div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/machine-creation")}
                >
                  Machine Creation
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/schedule-creation")}
                >
                  Schedule Creation
                </div>
              </div>
              <div className=" column">
                <div className="px-4 pt-4 font-semibold">Planers</div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/schedule-plan")}
                >
                  Schedule Plan
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/reschedule-plan")}
                >
                  Re-Schedule Plan
                </div>
              </div>
              <div className=" column">
                <div className="px-4 pt-4 font-semibold">Reports</div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/machine-report")}
                >
                  Machine Report
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/schedule-report")}
                >
                  Schedule Report
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/certificate-master")}
                >
                  Certificate Master
                </div>
                <div className="dropdown-item">Label Print</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="menu-container">
        <div className="flex items-center justify-end menu-item">
          <PersonIcon onClick={() => setIsLogoutOpen(!isLogoutOpen)} />
          {isLogoutOpen && (
            <div className="dropdown w-[280px]">
              <div className="dropdown-item text-center">Admin</div>
              <div className="p-2">
                <button
                  className="p-3 bg-red-500 text-white w-full"
                  onClick={() => navigate("/")}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
