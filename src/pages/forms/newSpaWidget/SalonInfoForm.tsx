import React from 'react';
import { Form, Stack, InputGroup } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { VscLock, VscWorkspaceTrusted } from 'react-icons/vsc';
import RadioTile from '@/components/RadioTile';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';

const SalonInfoForm = () => {
  const [level, setLevel] = React.useState('Private');

  return (
    <Form fluid>
      <FormHeader
        title="Salon Info"
        description="Create a blank project to house information about your employees, services, customers and their bookings."
      />

      <Form.Group controlId="name">
        <Form.ControlLabel>Salon Name</Form.ControlLabel>
        <Form.Control name="name" />
        <Form.HelpText>Salon names must be unique.</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="url">
        <Form.ControlLabel>Salon website</Form.ControlLabel>

        <InputGroup style={{ width: '100%' }}>
          <InputGroup.Addon>https://example.com/</InputGroup.Addon>
          <Form.Control name="url" />
        </InputGroup>
        <Form.HelpText>
          Want to house several dependent salons branches under the same namespace? <a>Create a group.</a>
        </Form.HelpText>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.ControlLabel>Salon description (optional)</Form.ControlLabel>
        <Form.Control name="description" accepter={Textarea} />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.ControlLabel>Salon Location</Form.ControlLabel>
        <Form.Control name="location" />
        <Form.HelpText>Please provide link to you Spa salon location from Google Maps.</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="plan">
        <Form.ControlLabel>Visibility Level</Form.ControlLabel>
        <Stack spacing={10} direction="column" alignItems={'stretch'}>
          <RadioTile
            icon={<Icon as={VscLock} />}
            title="Private"
            value={level}
            name="Private"
            onChange={setLevel}
          >
            Salon management access must be granted explicitly to each user. If this project is part of a
            group, access will be granted to members of the group.
          </RadioTile>
          <RadioTile
            icon={<Icon as={VscWorkspaceTrusted} />}
            title="Internal"
            value={level}
            name="Internal"
            onChange={setLevel}
          >
            Salon management can be accessed by any logged in user except external users.
          </RadioTile>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default SalonInfoForm;
