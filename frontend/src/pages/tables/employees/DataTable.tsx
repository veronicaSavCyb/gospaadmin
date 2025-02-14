import React, { useState } from 'react';
import {
  Table,
  Button,
  DOMHelper,
  Stack,
} from 'rsuite';

import MoreIcon from '@rsuite/icons/legacy/More';
import DrawerView from './DrawerView';
import { mockUsers } from '@/data/mock';
import { NameCell, ImageCell, ActionCell } from './Cells';

const data = mockUsers(20);

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const DataTable = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  
  return (
    <>
      <Stack className="table-toolbar" justifyContent="space-between">
        <Button appearance="primary" onClick={() => setShowDrawer(true)}>
          Add Employee
        </Button>
      </Stack>

      <Table
        height={Math.max(getHeight(window) - 200, 400)}
        data={data}
      >
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={80} align="center">
          <HeaderCell>Avatar</HeaderCell>
          <ImageCell dataKey="avatar" />
        </Column>

        <Column minWidth={160} flexGrow={1}>
          <HeaderCell>First Name</HeaderCell>
          <NameCell dataKey="firstName" />
        </Column>

        <Column minWidth={160} flexGrow={1}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={160}>
          <HeaderCell>Contact Number</HeaderCell>
          <Cell dataKey="contactNumber" />
        </Column>

        <Column width={200}>
          <HeaderCell>Assigned Services</HeaderCell>
          <Cell dataKey="assignedServices" />
        </Column>

        <Column width={100}>
          <HeaderCell>Rating</HeaderCell>
          <Cell dataKey="rating">
            {rowData => Array.from({ length: rowData.rating }).map((_, i) => <span key={i}>⭐️</span>)}
          </Cell>
        </Column>

        <Column width={120}>
          <HeaderCell>
            <MoreIcon />
          </HeaderCell>
          <ActionCell dataKey="id" />
        </Column>
      </Table>

      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default DataTable;
