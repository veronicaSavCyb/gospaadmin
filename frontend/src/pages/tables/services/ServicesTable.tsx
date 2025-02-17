import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Stack, IconButton } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import ServicesDrawer from './ServicesDrawer';
import { NameCell } from './ServicesCells';

const { Column, HeaderCell, Cell } = Table;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Service {
  id?: number;
  name: string;
  short_descriptor: string;
  detailed_description: string;
  category: string;
}

const ServicesTable: React.FC = () => {
  const [data, setData] = useState<Service[]>([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState<Service | null>(null);

  useEffect(() => {
    axios.get<Service[]>(`${API_BASE_URL}/api/services/`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleEdit = (service: Service) => {
    setServiceToEdit(service);
    setShowDrawer(true);
  };

  const handleDelete = (id: number | undefined) => {
    if (!id) return;
    axios.delete(`${API_BASE_URL}/api/services/${id}/`)
      .then(() => {
        setData(prevData => prevData.filter(service => service.id !== id));
      })
      .catch(error => console.error('Error deleting service:', error));
  };

  return (
    <>
      <Stack className="table-toolbar" justifyContent="space-between">
        <Button
          appearance="primary"
          onClick={() => {
            setServiceToEdit(null);
            setShowDrawer(true);
          }}
        >
          Add Service
        </Button>
      </Stack>

      <Table height={400} data={data}>
        <Column width={50} align="center">
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>Service Name</HeaderCell>
          <NameCell dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Short Descriptor</HeaderCell>
          <Cell dataKey="short_descriptor" />
        </Column>

        <Column width={300}>
          <HeaderCell>Detailed Description</HeaderCell>
          <Cell dataKey="detailed_description" />
        </Column>

        <Column width={160}>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="category" />
        </Column>

        {/* More Column with Edit and Delete Buttons */}
        <Column width={120} align="center">
          <HeaderCell>
            <MoreIcon />
          </HeaderCell>
          <Cell>
            {(rowData: Service) => (
              <Stack spacing={8}>
                <IconButton
                  icon={<EditIcon />}
                  appearance="subtle"
                  size="xs"
                  onClick={() => handleEdit(rowData)}
                />
                <IconButton
                  icon={<TrashIcon />}
                  appearance="ghost"
                  color="red"
                  size="xs"
                  onClick={() => handleDelete(rowData.id)}
                />
              </Stack>
            )}
          </Cell>
        </Column>
      </Table>

      <ServicesDrawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        serviceToEdit={serviceToEdit}
      />
    </>
  );
};

export default ServicesTable;
