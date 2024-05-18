import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ScheduleUnderExecution from "./Dashboard/ScheduleUnderExecution";
import ExecutionUnderReviewer from "./Dashboard/ExecutionUnderReviewer";
import AuditTrail from "./Audit Trail/AuditTrail";
import WorkFlow from "./Masters/Work Flow/WorkFlow";
import Department from "./Masters/Department/Department";
import Designation from "./Masters/Designation/Designation";
import Employee from "./Masters/Employee/Employee";
import AccessRole from "./Masters/Access Role/AccessRole";
import FunctionLocation from "./Work Place/Components/FunctionLocation";
import ChecklistMaster from "./Work Place/Components/ChecklistMaster";
import MasterTools from "./Work Place/Components/MasterTools";
import MachineCreation from "./Work Place/Masters/MachineCreation";
import ScheduleCreation from "./Work Place/Masters/ScheduleCreation";
import SchedulePlan from "./Work Place/Planners/SchedulePlan";
import ReSchedulePlan from "./Work Place/Planners/ReSchedulePlan";
import MachineReport from "./Work Place/Reports/MachineReport";
import ScheduleReport from "./Work Place/Reports/ScheduleReport";
import CertificateMaster from "./Work Place/Reports/CertificateMaster";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/schedule-under-executon"
            element={<ScheduleUnderExecution />}
          />
          <Route
            path="/execution-under-reviewer"
            element={<ExecutionUnderReviewer />}
          />
          <Route path="/audit-trail" element={<AuditTrail />} />
          <Route path="/work-flow" element={<WorkFlow />} />
          <Route path="/department" element={<Department />} />
          <Route path="/designation" element={<Designation />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/access-role" element={<AccessRole />} />
          <Route path="/function-location" element={<FunctionLocation />} />
          <Route path="/checklist-master" element={<ChecklistMaster />} />
          <Route path="/master-tools" element={<MasterTools />} />
          <Route path="/machine-creation" element={<MachineCreation />} />
          <Route path="/schedule-creation" element={<ScheduleCreation />} />
          <Route path="/schedule-plan" element={<SchedulePlan />} />
          <Route path="/reschedule-plan" element={<ReSchedulePlan />} />
          <Route path="/machine-report" element={<MachineReport />} />
          <Route path="/schedule-report" element={<ScheduleReport />} />
          <Route path="/certificate-master" element={<CertificateMaster />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
