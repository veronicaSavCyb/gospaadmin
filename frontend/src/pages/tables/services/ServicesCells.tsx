import React from 'react';
import axios from 'axios';
import { Popover, Whisper, Table, CellProps, Button } from 'rsuite';

const { Cell } = Table;

interface Service {
  id?: number;
  name: string;
  short_descriptor: string;
  detailed_description: string;
  category: string;
}

export const NameCell = ({ rowData, dataKey, ...props }: CellProps<Service>) => {
  if (!rowData) return <Cell {...props}>N/A</Cell>; // Handle undefined rowData

  const speaker = (
    <Popover title="Service Details">
      <p><b>Service Name:</b> {rowData.name ?? 'N/A'}</p>
      <p><b>Short Descriptor:</b> {rowData.short_descriptor ?? 'N/A'}</p>
      <p><b>Category:</b> {rowData.category ?? 'N/A'}</p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{rowData.name ?? 'N/A'}</a>
      </Whisper>
    </Cell>
  );
};

interface ActionCellProps extends CellProps<Service> {
  onEdit: (service: Service) => void;
}

export const ActionCell = ({ rowData, dataKey, onEdit, ...props }: ActionCellProps) => {
  if (!rowData) return <Cell {...props}>N/A</Cell>;

  const handleDelete = () => {
    const serviceId = rowData[dataKey as keyof Service];
    if (!serviceId) return;

    axios.delete(`/api/services/${serviceId}/`)
      .then(() => {
        window.location.reload();
      })
      .catch(error => console.error('Error deleting service:', error));
  };

  return (
    <Cell {...props}>
      <Button color="blue" size="xs" onClick={() => onEdit(rowData)}>
        Edit
      </Button>
      <Button color="red" size="xs" onClick={handleDelete} style={{ marginLeft: 8 }}>
        Delete
      </Button>
    </Cell>
  );
};


