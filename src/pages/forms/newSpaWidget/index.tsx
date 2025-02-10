import React from 'react';
import SpaSalonWizardForm from './SpaSalonWizardForm';
import { Breadcrumb, Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Spa Salon Wizard</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Forms</Breadcrumb.Item>
            <Breadcrumb.Item active>Spa Salon Wizard</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <SpaSalonWizardForm />
    </Panel>
  );
};

export default Page;
