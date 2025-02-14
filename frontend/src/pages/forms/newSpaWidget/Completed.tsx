import React from 'react';
import { ButtonToolbar, Button, Stack } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import CheckRoundIcon from '@rsuite/icons/CheckRound';

const Completed = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ margin: '40px 0' }}>
        <Stack spacing={10}>
          <CheckRoundIcon style={{ fontSize: 50 }} color="#4caf50" />
          <div>
            <h5>Your Are Done!</h5>
            <p className="text-muted">You successfully added infromation about your salon, employees and services!.</p>
          </div>
        </Stack>
      </div>

      <p>
        Once you have created salon, you can alway return to editing details about your salon, services and employees using left 
        navigation menu.
      </p>
      <p>You can also click the button below to start adding bookings.</p>

      <ButtonToolbar style={{ marginTop: 20 }}>
      <Button appearance="primary" onClick={() => navigate('/calendar')}> {/* ✅ Navigate to /calendar */}
          Booking Calendar
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Completed;
