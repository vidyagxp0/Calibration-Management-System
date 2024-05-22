import React, { useState } from "react";
import Header from "../../Header/Header";

const WorkFlow = () => {
  const [workFlows, setWorkFlows] = useState([
    {
      id: 1,
      groupName: "WorkFlow 02",
      createdBy: "Admin",
      createdDate: "07-12-2022",
      status: true,
    },
  ]);

  const [flowStep, setFlowStep] = useState("Creator");
  const [employee, setEmployee] = useState("Admin");
  const [role, setRole] = useState("Admin");
  const [workflowName, setWorkflowName] = useState("");
  const [workflowSteps, setWorkflowSteps] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingWorkflowId, setEditingWorkflowId] = useState(null);

  const addStep = () => {
    const newStep = {
      flowStep,
      employee,
      role,
    };
    setWorkflowSteps([...workflowSteps, newStep]);
  };

  const addWorkflow = () => {
    const newWorkflow = {
      id: workFlows.length + 1,
      groupName: workflowName,
      createdBy: employee,
      createdDate: new Date().toLocaleDateString(),
      status: true,
    };
    setWorkFlows([...workFlows, newWorkflow]);
    setWorkflowName("");
    setWorkflowSteps([]);
  };

  const updateWorkflow = () => {
    const updatedWorkflows = workFlows.map((workflow) =>
      workflow.id === editingWorkflowId
        ? { ...workflow, groupName: workflowName, createdBy: employee }
        : workflow
    );
    setWorkFlows(updatedWorkflows);
    setIsEditing(false);
    setEditingWorkflowId(null);
    setWorkflowName("");
    setWorkflowSteps([]);
  };

  const handleEditClick = (workflow) => {
    setIsEditing(true);
    setEditingWorkflowId(workflow.id);
    setWorkflowName(workflow.groupName);
    setEmployee(workflow.createdBy);
    
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-2 flex flex-col md:flex-row justify-between border-b border-gray-400">
        <div className="text-[20px] font-medium">WorkFlow Master</div>
        <div className="text-[20px] font-medium">Action Area</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-2">
        <div className="col-span-3">
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="p-2 border border-gray-300">S.No.</th>
                  <th className="p-2 border border-gray-300">GROUP NAME</th>           
                  <th className="p-2 border border-gray-300">CREATED BY</th>           
                  <th className="p-2 border border-gray-300">CREATED DATE</th>
                  <th className="p-2 border border-gray-300">STATUS</th>
                  <th className="p-2 border border-gray-300">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {workFlows.map((workflow, index) => (
                  <tr key={index}>
                    <td className="p-2 border border-gray-300">
                      {workflow.id}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {workflow.groupName}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {workflow.createdBy}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {workflow.createdDate}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {workflow.status.toString()}
                    </td>
                    <td className="p-2 border border-gray-300">
                      <div className="flex gap-2">
                        <button
                          className="p-1 bg-yellow-500 text-white"
                          onClick={() => handleEditClick(workflow)}
                        >
                          Edit
                        </button>
                        <button
                          className="p-1 bg-red-500 text-white"
                          onClick={() =>
                            alert("Are You Sure You Want To Delete?")
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-2">
          <div className="p-2 border-l border-gray-400">
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">WorkFlow Name</label>
              <input
                type="text"
                value={workflowName}
                onChange={(e) => setWorkflowName(e.target.value)}
                className="border border-gray-500 rounded p-2 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-around border-b border-gray-400">
              <div className="flex flex-col py-3">
                <label className="text-[14px] font-medium pb-2">FlowStep</label>
                <select
                  className="p-[10px] text-center border border-gray-500 rounded"
                  value={flowStep}
                  onChange={(e) => setFlowStep(e.target.value)}
                >
                  <option value="Creator">Creator</option>
                  <option value="Approver">Approver</option>
                  <option value="Reviewer">Reviewer</option>
                </select>
              </div>
              <div className="flex flex-col py-3">
                <label className="text-[14px] font-medium pb-2">Employee</label>
                <select
                  className="p-[10px] text-center border border-gray-500 rounded"
                  value={employee}
                  onChange={(e) => setEmployee(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Test User">Test User</option>
                  <option value="Test User 01">Test User 01</option>
                </select>
              </div>
              <div className="flex flex-col py-3">
                <label className="text-[14px] font-medium pb-2">Role</label>
                <select
                  className="p-[10px] text-center border border-gray-500 rounded"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Admin group">Admin group</option>
                  <option value="End User">End User</option>
                </select>
              </div>
              <div className="flex items-center pt-6 md:pt-0">
                <button
                  className="p-2 bg-green-600 text-white"
                  onClick={addStep}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="overflow-x-auto h-48 overflow-y-auto">
              <table className="min-w-full bg-white border border-gray-300 mt-4">
                <thead>
                  <tr>
                    <th className="p-2 border border-gray-300">S.No.</th>
                    <th className="p-2 border border-gray-300">FLOW STEP</th>
                    <th className="p-2 border border-gray-300">EMPLOYEE</th>
                    <th className="p-2 border border-gray-300">ROLE</th>
                    <th className="p-2 border border-gray-300">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {workflowSteps.map((step, index) => (
                    <tr key={index}>
                      <td className="p-2 border border-gray-300">
                        {index + 1}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {step.flowStep}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {step.employee}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {step.role}
                      </td>
                      <td className="p-2 border border-gray-300">
                        <button
                          className="p-1 bg-red-500 text-white"
                          onClick={() => {
                            const updatedSteps = workflowSteps.filter(
                              (_, i) => i !== index
                            );
                            setWorkflowSteps(updatedSteps);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              className="bg-green-600 text-white w-full mt-3 py-2"
              onClick={isEditing ? updateWorkflow : addWorkflow}
            >
              {isEditing ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
