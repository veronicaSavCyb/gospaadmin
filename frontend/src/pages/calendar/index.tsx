import React from 'react';
import { Panel, Breadcrumb } from 'rsuite';
import Calendar from './Calendar';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Booking Calendar</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Booking Calendar</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <Calendar />
    </Panel>
  );
};

export default Page;
