import useDashboard from "../../../../hooks/useDashboard";
import { ChangeEvent, useState } from "react";
import DashboardResultsWrapper from "./DashboardResultsWrapper";
import useRole2 from "../../../../hooks/useRole2";
import useRole1 from "../../../../hooks/useRole1";
import { CycleType } from "../../../../contexts/Role1Context";
import useUserMetricService from "../../../../hooks/services/useUserMetricService";

export type FilteredUser = {
  userId: number;
  email: string;
};

const Dashboard = () => {
  const { cycles } = useRole1();
  const { users } = useRole2();
  const { selectedCycle, setSelectedCycle, selectedUser, setSelectedUser } =
    useDashboard();
  const [search, setSearch] = useState(false);
  const { getCycleUsers, getUserCycles } = useUserMetricService();

  const [filteredUsers, setFilteredUsers] = useState<FilteredUser[]>([]);
  const [filteredCycles, setFilteredCycles] = useState<CycleType[]>([]);

  async function updateUsers(cycleId: number) {
    const cycleUsersData = await getCycleUsers(cycleId);
    if (!cycleUsersData.length) return reset();
    return setFilteredUsers(cycleUsersData);
  }

  async function updateCycles(userId: number) {
    const userCyclesData = await getUserCycles(userId);
    if (!userCyclesData.length) return reset();
    return setFilteredCycles(userCyclesData);
  }

  function reset(): boolean {
    setSelectedCycle((_) => 0);
    setSelectedUser((_) => 0);
    setFilteredUsers((_) => []);
    setFilteredCycles((_) => []);
    return true;
  }

  const checkFilters = (userId: number, cycleId: number) => {
    setSearch(false);

    if (userId === 0 && cycleId === 0) {
      return reset();
    }
    return false;
  };

  const handleSearch = () => {
    if (!selectedCycle || !selectedUser) return;
    setSearch(true);
  };

  const handleUser = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    let newUser = parseInt(value);
    if (!newUser) newUser = 0;

    const didReset = checkFilters(newUser, selectedCycle);
    if (didReset) return;

    setSelectedUser((_) => newUser);

    if (newUser === 0) return updateUsers(selectedCycle);

    return updateCycles(newUser);
  };

  const handleCycle = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    let newCycle = parseInt(value);
    if (!newCycle) newCycle = 0;

    const didReset = checkFilters(selectedUser, newCycle);
    if (didReset) return;

    setSelectedCycle((_) => newCycle);

    if (newCycle === 0) return updateCycles(selectedUser);
    return updateUsers(newCycle);
  };

  let sortedCycles = cycles.sort((cycleA, cycleB) => {
    return (
      new Date(cycleB.startDate).getTime() -
      new Date(cycleA.startDate).getTime()
    );
  });

  sortedCycles = sortedCycles.map((cycle) => {
    return {
      ...cycle,
      startDate: new Date(cycle.startDate).toDateString(),
    };
  });

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
          <button className="btn btn-green btn-search" onClick={handleSearch}>
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
            {filteredCycles.length
              ? filteredCycles.map((cycle) => {
                  const { cycleId, startDate } = cycle;
                  return (
                    <option key={cycleId} value={cycleId}>
                      {startDate}
                    </option>
                  );
                })
              : sortedCycles.map((cycle) => {
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
            {filteredUsers.length
              ? filteredUsers.map((user) => {
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
      {search && <DashboardResultsWrapper />}
    </>
  );
};

export default Dashboard;
