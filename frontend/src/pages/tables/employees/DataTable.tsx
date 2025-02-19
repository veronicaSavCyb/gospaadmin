import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  DOMHelper,
  Stack,
  Loader,
  IconButton,
} from 'rsuite';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import DrawerView from './DrawerView';
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
}

const DataTable: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Function to fetch employees
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

  // Fetch employees when component loads & listen for updates
  useEffect(() => {
    fetchEmployees(); // Initial fetch

    // Listen for employee updates from DrawerView
    const handleUpdate = () => fetchEmployees();
    window.addEventListener("employeeUpdated", handleUpdate);

    return () => {
      window.removeEventListener("employeeUpdated", handleUpdate);
    };
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
        fetchEmployees(); // Refresh employees after deletion
      })
      .catch(err => console.error("Error deleting employee:", err));
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
          <Column width={50} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={80} align="center">
            <HeaderCell>Avatar</HeaderCell>
            <ImageCell dataKey="avatar" />
          </Column>

          <Column minWidth={160} flexGrow={1}>
            <HeaderCell>Employee Name</HeaderCell>
            <NameCell dataKey="first_name" />
          </Column>

          <Column width={200}>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>

          <Column width={160}>
            <HeaderCell>Contact Number</HeaderCell>
            <Cell dataKey="contact_number" />
          </Column>

          {/* Assigned Services Column */}
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

          <Column width={120} align="center">
            <HeaderCell>Actions</HeaderCell>
            <Cell>
              {(rowData: Employee) => (
                <Stack spacing={10}>
                  <IconButton icon={<EditIcon />} appearance="subtle" onClick={() => handleEdit(rowData)} />
                  <IconButton icon={<TrashIcon />} appearance="subtle" color="red" onClick={() => handleDelete(rowData.id)} />
                </Stack>
              )}
            </Cell>
          </Column>
        </Table>
      )}

      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} employeeId={editingEmployee?.id ?? null} />
    </>
  );
};

export default DataTable;
