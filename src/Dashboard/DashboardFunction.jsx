export const DrawerList = () => (
    <Box sx={{ width: "800px" }}>
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className="flex justify-between p-2 border border-gray-500">
          <div>INSTRUMENT UNDER REVIEWER / APPROVER</div>
          <div
            className=" cursor-pointer hover:text-red-700"
            onClick={() => toggleDrawer(false)}
          >
            X
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>MACHINE ID</th> <th>MACHINE NAME</th> <th>LOCATION</th>{" "}
                <th>DEPARTMENT</th> <th>WORKFLOW</th>
                <th> ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );