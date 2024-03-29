import { ChangeEvent, useState } from "react";
import useDashboard from "../../../../hooks/useDashboard";
import useRole1 from "../../../../hooks/useRole1";
import useRole2 from "../../../../hooks/useRole2";
import Report from "./Report";
import useUserMetricService from "../../../../hooks/services/useUserMetricService";

type FilteredCycle = {
  cycleId: number;
  startDate: string;
};

const Reports = () => {
  const { cycles } = useRole1();
  const { users } = useRole2();
  const { selectedCycle, setSelectedCycle, selectedUser, setSelectedUser } =
    useDashboard();
  const [search, setSearch] = useState(false);
  const { getUserCycles } = useUserMetricService();
  const [filteredCycles, setFilteredCycles] = useState<FilteredCycle[]>(cycles);

  async function updateCycles(userId: number) {
    const userCyclesData = await getUserCycles(userId);
    setFilteredCycles(userCyclesData);
  }

  function reset(): boolean {
    setSelectedCycle((_) => 0);
    setSelectedUser((_) => 0);
    setFilteredCycles((_) => []);
    return true;
  }

  const checkFilters = (userId: number, cycleId: number) => {
    setSearch(false);

    if (userId === 0 && cycleId === 0) return reset();
    return false;
  };

  const handleSearch = () => {
    if (!selectedCycle || !selectedUser) return;
    setSearch(true);
  };

  const handleCycle = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    let newCycle = parseInt(value);
    if (!newCycle) newCycle = 0;

    const didReset = checkFilters(selectedUser, newCycle);
    if (didReset) return;

    setSelectedCycle((_) => newCycle);

    if (newCycle === 0) return updateCycles(selectedUser);
    return;
  };

  const handleUser = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    let newUser = parseInt(value);
    if (!newUser) newUser = 0;

    const didReset = checkFilters(newUser, selectedCycle);
    if (didReset) return;

    setSelectedUser((_) => newUser);
    updateCycles(newUser);
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Reports</h2>
          <button className="btn add-color btn-search" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="d-flex px-2">
          <select
            className="form-select form-select-md mb-3 me-2"
            aria-label=".form-select-md example"
            onChange={handleCycle}
          >
            <option value={"0"}>Cycles</option>
            {filteredCycles.map((cycle) => {
              const { cycleId, startDate } = cycle;
              return (
                <option key={cycleId} value={cycleId}>
                  {startDate}
                </option>
              );
            })}
          </select>

          <select
            className="form-select form-select-md mb-3"
            aria-label=".form-select-md example"
            onChange={handleUser}
          >
            <option value={"0"}>Users</option>
            {users.length
              ? users.map((user) => {
                  const { userId, email } = user;
                  return (
                    <option key={userId} value={userId}>
                      {email}
                    </option>
                  );
                })
              : users.map((user) => {
                  const { userId, email } = user;
                  return (
                    <option key={userId} value={userId}>
                      {email}
                    </option>
                  );
                })}
          </select>
        </div>
      </div>
      {search && <Report />}
    </>
  );
};

export default Reports;
