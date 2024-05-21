import React from "react";
import Header from "../../Header/Header";

const CertificateMaster = () => {
  const data = [
    {
      machineId: "M001",
      machineName: "Test Machine",
      calibrationType: "Calibration",
      installationDate: "23-10-2023",
      doneDate: "23-11-2024",
      dueDate: "23-11-2023",
      planningDate: "23-11-2023",
      frequency: "1 Month",
      createdBy: "Admin",
    },
    {
      machineId: "M002",
      machineName: "Test Machine",
      calibrationType: "Calibration",
      installationDate: "23-10-2023",
      doneDate: "23-11-2024",
      dueDate: "23-11-2023",
      planningDate: "23-11-2023",
      frequency: "1 Month",
      createdBy: "Admin",
    },
    {
      machineId: "M003",
      machineName: "Test Machine",
      calibrationType: "Calibration",
      installationDate: "23-10-2023",
      doneDate: "23-11-2024",
      dueDate: "23-11-2023",
      planningDate: "23-11-2023",
      frequency: "1 Month",
      createdBy: "Admin",
    },
    {
      machineId: "M004",
      machineName: "Test Machine",
      calibrationType: "Calibration",
      installationDate: "23-10-2023",
      doneDate: "23-11-2024",
      dueDate: "23-11-2023",
      planningDate: "23-11-2023",
      frequency: "1 Month",
      createdBy: "Admin",
    },
    {
      machineId: "M005",
      machineName: "Test Machine",
      calibrationType: "Calibration",
      installationDate: "23-10-2023",
      doneDate: "23-11-2024",
      dueDate: "23-11-2023",
      planningDate: "23-11-2023",
      frequency: "1 Month",
      createdBy: "Admin",
    },
    {
      machineId: "M006",
      machineName: "Test Machine",
      calibrationType: "Calibration",
      installationDate: "23-10-2023",
      doneDate: "23-11-2024",
      dueDate: "23-11-2023",
      planningDate: "23-11-2023",
      frequency: "1 Month",
      createdBy: "Admin",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="px-4 py-3">
        <div className="text-[24px] font-semibold">Certificate Master</div>
      </div>
      <div className="p-3 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">S.No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MACHINE ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MACHINE NAME</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">CALIBRATION TYPE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">INSTALLATION DATE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DONE DATE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DUE DATE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">PLANNING DATE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">FREQUENCY</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">CREATED BY</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item.machineId}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.machineId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.machineName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.calibrationType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.installationDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.doneDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.planningDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.frequency}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.createdBy}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-yellow-500 text-white p-2 rounded">Get Certificate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificateMaster;
