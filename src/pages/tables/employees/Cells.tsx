import React from 'react';
import { Popover, Whisper, Checkbox, Dropdown, IconButton, Table, CellProps } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';

const { Cell } = Table;

export const NameCell = ({ rowData, dataKey, ...props }: CellProps) => {
  const speaker = (
    <Popover title="Employee Details">
      <p>
        <b>First Name:</b> {rowData.firstName}
      </p>
      <p>
        <b>Last Name:</b> {rowData.lastName}
      </p>
      <p>
        <b>Contact Number:</b> {rowData.contactNumber}
      </p>
      <p>
        <b>Assigned Services:</b> {rowData.assignedServices}
      </p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{rowData.firstName} {rowData.lastName}</a>
      </Whisper>
    </Cell>
  );
};

export const ImageCell = ({ rowData, dataKey, ...props }: CellProps) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 40,
        height: 40,
        background: '#f5f5f5',
        borderRadius: 6,
        marginTop: 2,
        overflow: 'hidden',
        display: 'inline-block'
      }}
    >
      <img src={rowData[dataKey!]} width="40" />
    </div>
  </Cell>
);

export const CheckCell = ({
  rowData,
  onChange,
  checkedKeys,
  dataKey,
  ...props
}: CellProps & {
  checkedKeys: number[];
  onChange: (value: any, checked: boolean) => void;
}) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: '46px' }}>
      <Checkbox
        value={rowData[dataKey!]}
        inline
        onChange={onChange}
        checked={checkedKeys.some(item => item === rowData[dataKey!])}
      />
    </div>
  </Cell>
);

export const ActionCell = props => {
  return (
    <Cell {...props} className="link-group">
      <Whisper placement="autoVerticalEnd" trigger="click" speaker={<Popover><Dropdown.Menu><Dropdown.Item>View Profile</Dropdown.Item></Dropdown.Menu></Popover>}>
        <IconButton appearance="subtle" icon={<MoreIcon />} />
      </Whisper>
    </Cell>
  );
};
