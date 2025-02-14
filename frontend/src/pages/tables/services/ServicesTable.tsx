import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Stack } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
import ServicesDrawer from './ServicesDrawer';
import { NameCell, ActionCell } from './ServicesCells';

const { Column, HeaderCell, Cell } = Table;

// ✅ Define the TypeScript interface for services
interface Service {
  id?: number;
  name: string;
  shortDescriptor: string;
  detailedDescription: string;
  category: string;
}

const ServicesTable: React.FC = () => {
  const [data, setData] = useState<Service[]>([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState<Service | null>(null);

  // ✅ Fix: Explicitly define the response type
  useEffect(() => {
    axios.get<Service[]>('/api/services/')
      .then(response => setData(response.data)) // ✅ Type now matches useState<Service[]>
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleEdit = (service: Service) => {
    setServiceToEdit(service);
    setShowDrawer(true);
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
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>Service Name</HeaderCell>
          <NameCell dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Short Descriptor</HeaderCell>
          <Cell dataKey="shortDescriptor" />
        </Column>

        <Column width={300}>
          <HeaderCell>Detailed Description</HeaderCell>
          <Cell dataKey="detailedDescription" />
        </Column>

        <Column width={160}>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="category" />
        </Column>

        <Column width={120}>
          <HeaderCell>
            <MoreIcon />
          </HeaderCell>
          <ActionCell rowData={data} dataKey="id" onEdit={handleEdit} />
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
