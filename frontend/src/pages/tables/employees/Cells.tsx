import React from 'react';
import { Popover, Whisper, Checkbox, Dropdown, IconButton, Table, CellProps } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';

const { Cell } = Table;

// Define the expected row data type
interface EmployeeRow {
  id: number;
  first_name: string;
  last_name: string;
  contact_number: string;
  assigned_services: { name: string }[]; // Removed service ID
  avatar?: string;
  border_color?: string; 
}

export const NameCell = ({ rowData, dataKey, ...props }: CellProps<EmployeeRow>) => {
  if (!rowData) return null; // ✅ Prevents undefined error

  const speaker = (
    <Popover title="Employee Details">
      <p><b>First Name:</b> {rowData?.first_name || "N/A"}</p> {/* ✅ Use first_name */}
      <p><b>Last Name:</b> {rowData?.last_name || "N/A"}</p>
      <p><b>Contact Number:</b> {rowData?.contact_number || "N/A"}</p>
      <p>
        <b>Assigned Services:</b> 
        {rowData?.assigned_services?.length > 0
          ? rowData.assigned_services.map((service, index) => (
              <span key={index} style={{ marginLeft: 5 }}>{service.name}</span>
            ))
          : "No services assigned"}
      </p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{rowData?.first_name || "Unknown"} {rowData?.last_name || ""}</a> {/* ✅ Use first_name */}
      </Whisper>
    </Cell>
  );
};


export const ImageCell = ({ rowData, dataKey, ...props }: CellProps<EmployeeRow>) => {
  if (!rowData) return null; // ✅ Prevents undefined error

  return (
    <Cell {...props} style={{ padding: 0 }}>
      <div
        style={{
          width: 30,
          height: 30,
          background: '#f5f5f5',
          borderRadius: 6,
          marginTop: 2,
          overflow: 'hidden',
          display: 'inline-block',
          border: `3px solid ${rowData.border_color || "#ccc"}`,
        }}
      >
        <img src={rowData?.avatar || ""} width="30" style={{ borderRadius: "50%" }} />
      </div>
    </Cell>
  );
};

export const CheckCell = ({
  rowData,
  onChange,
  checkedKeys,
  dataKey,
  ...props
}: CellProps<EmployeeRow> & {
  checkedKeys: number[];
  onChange: (value: any, checked: boolean) => void;
}) => {
  if (!rowData) return null; // ✅ Prevents undefined error

  return (
    <Cell {...props} style={{ padding: 0 }}>
      <div style={{ lineHeight: '46px' }}>
        <Checkbox
          value={rowData?.id}
          inline
          onChange={onChange}
          checked={checkedKeys?.includes(rowData?.id)}
        />
      </div>
    </Cell>
  );
};

export const ActionCell = (props: CellProps<EmployeeRow>) => {
  if (!props.rowData) return null; // ✅ Prevents undefined error

  return (
    <Cell {...props} className="link-group">
      <Whisper 
        placement="autoVerticalEnd" 
        trigger="click" 
        speaker={
          <Popover>
            <Dropdown.Menu>
              <Dropdown.Item>View Profile</Dropdown.Item>
            </Dropdown.Menu>
          </Popover>
        }>
        <IconButton appearance="subtle" icon={<MoreIcon />} />
      </Whisper>
    </Cell>
  );
};
