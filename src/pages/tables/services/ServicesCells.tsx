import React from 'react';
import axios from 'axios';
import { Popover, Whisper, Table, CellProps, Button } from 'rsuite';

const { Cell } = Table;

export const NameCell = ({ rowData, dataKey, ...props }: CellProps) => {
  const speaker = (
    <Popover title="Service Details">
      <p><b>Service Name:</b> {rowData.name}</p>
      <p><b>Short Descriptor:</b> {rowData.shortDescriptor}</p>
      <p><b>Category:</b> {rowData.category}</p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{rowData.name}</a>
      </Whisper>
    </Cell>
  );
};

export const ActionCell = ({ rowData, dataKey, ...props }) => {
  const handleDelete = () => {
    axios.delete(`/api/services/${rowData[dataKey]}/`)
      .then(() => {
        window.location.reload();  // Refresh the table after deletion
      })
      .catch(error => console.error('Error deleting service:', error));
  };

  return (
    <Cell {...props}>
      <Button color="red" size="xs" onClick={handleDelete}>
        Delete
      </Button>
    </Cell>
  );
};
