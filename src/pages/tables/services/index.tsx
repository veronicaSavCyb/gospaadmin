import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import ServicesTable from './ServicesTable';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title"> My Services</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Services</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <ServicesTable />
    </Panel>
  );
};

export default Page;
