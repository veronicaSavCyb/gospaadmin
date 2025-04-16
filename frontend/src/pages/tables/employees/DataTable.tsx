import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  DOMHelper,
  Stack,
  Loader,
  IconButton,
  Checkbox
} from 'rsuite';
import CalendarIcon from '@rsuite/icons/Calendar';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import DrawerView from './DrawerView';
import ScheduleDrawer from './ScheduleDrawer';
import { NameCell, ImageCell } from './Cells';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Service {
  name: string;
}

interface Employee {
  id: number;
  first_name: string;
  email: string;
  contact_number?: string;
  avatar?: string;
  assigned_services?: Service[];
  border_color?: string; 
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const shortDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DataTable: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [showScheduleDrawer, setShowScheduleDrawer] = useState(false);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState<string | undefined>();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [workingDaysMap, setWorkingDaysMap] = useState<Record<number, Record<string, boolean>>>({});

  const fetchEmployees = () => {
    setLoading(true);
    fetch(`${API_BASE_URL}/api/employees/`)
      .then((res) => res.json())
      .then((data: Employee[]) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  };

  const fetchSchedules = () => {
    fetch(`${API_BASE_URL}/api/schedules/`)
      .then((res) => res.json())
      .then((data) => {
        const map: Record<number, Record<string, boolean>> = {};
        data.forEach((item: any) => {
          const empId = item.employee;
          const day = item.day;
          if (!map[empId]) map[empId] = {};
          map[empId][day] = true;
        });
        setWorkingDaysMap(map);
      })
      .catch(err => console.error("Error fetching schedules:", err));
  };

  useEffect(() => {
    fetchEmployees();
    fetchSchedules();

    const handleUpdate = () => {
      fetchEmployees();
      fetchSchedules();
    };

    window.addEventListener("employeeUpdated", handleUpdate);
    return () => window.removeEventListener("employeeUpdated", handleUpdate);
  }, []);

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowDrawer(true);
  };

  const handleDelete = (employeeId: number) => {
    fetch(`${API_BASE_URL}/api/employees/${employeeId}/`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchEmployees();
        fetchSchedules();
      })
      .catch(err => console.error("Error deleting employee:", err));
  };

  const handleScheduleDrawerClose = () => {
    setShowScheduleDrawer(false);
    fetchSchedules();
  };

  return (
    <>
      <Stack className="table-toolbar" justifyContent="space-between">
        <Button appearance="primary" onClick={() => { setEditingEmployee(null); setShowDrawer(true); }}>
          Add Employee
        </Button>
      </Stack>

      {loading ? (
        <Loader center content="Loading employees..." />
      ) : (
        <Table height={Math.max(getHeight(window) - 200, 400)} data={employees}>
          <Column width={40} align="center" fixed>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={80} align="center">
            <HeaderCell>Avatar</HeaderCell>
            <ImageCell dataKey="avatar" />
          </Column>

          <Column minWidth={140} flexGrow={1}>
            <HeaderCell>Employee Name</HeaderCell>
            <NameCell dataKey="first_name" />
          </Column>

          <Column width={140}>
            <HeaderCell>Contact Number</HeaderCell>
            <Cell dataKey="contact_number" />
          </Column>

          <Column width={250}>
            <HeaderCell>Assigned Services</HeaderCell>
            <Cell>
              {(rowData: Employee) => 
                rowData.assigned_services && rowData.assigned_services.length > 0 
                  ? rowData.assigned_services.map((service) => service.name).join(", ") 
                  : "No Services Assigned"
              }
            </Cell>
          </Column>

          <Column width={320} align="center">
            <HeaderCell>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontWeight: 500 }}>
                {shortDays.map(day => (
                  <div key={day} style={{ width: 32, textAlign: 'center' }}>{day}</div>
                ))}
              </div>
            </HeaderCell>
            <Cell>
              {(rowData: Employee) => (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  {daysOfWeek.map((day, index) => (
                    <div key={day} style={{ width: 32, display: 'flex', justifyContent: 'center' }}>
                      <Checkbox checked={workingDaysMap[rowData.id]?.[day] || false} disabled />
                    </div>
                  ))}
                </div>
              )}
            </Cell>
          </Column>

          <Column width={120} align="center">
            <HeaderCell>Actions</HeaderCell>
            <Cell>
              {(rowData: Employee) => (
                <Stack spacing={4}>
                  <IconButton icon={<CalendarIcon />} appearance="subtle" onClick={() => {
                    setSelectedEmployeeName(rowData.first_name);
                    setSelectedEmployeeId(rowData.id);
                    setShowScheduleDrawer(true);
                  }} />
                  <IconButton icon={<EditIcon />} appearance="subtle" onClick={() => handleEdit(rowData)} />
                  <IconButton icon={<TrashIcon />} appearance="subtle" color="red" onClick={() => handleDelete(rowData.id)} />
                </Stack>
              )}
            </Cell>
          </Column>
        </Table>
      )}

      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} employeeId={editingEmployee?.id ?? null} />
      <ScheduleDrawer
        key={selectedEmployeeId}
        open={showScheduleDrawer}
        onClose={handleScheduleDrawerClose}
        employeeName={selectedEmployeeName}
        employeeId={selectedEmployeeId ?? -1}
      />
    </>
  );
};

export default DataTable;
