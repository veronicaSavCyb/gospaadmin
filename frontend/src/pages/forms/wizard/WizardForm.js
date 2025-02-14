import React, { useState } from 'react';
import { Steps, Divider, Stack, IconButton } from 'rsuite';
import PageContent from '@/components/PageContent';
import PageNextIcon from '@rsuite/icons/PageNext';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import ProjectTypeForm from './ProjectTypeForm';
import TeamSettingsForm from './TeamSettingsForm';
import BusinessDetailForm from './BusinessDetailForm';
import ProjectInfoForm from './ProjectInfoForm';
import Completed from './Completed';
const forms = [ProjectTypeForm, ProjectInfoForm, TeamSettingsForm, BusinessDetailForm, Completed];
const WizardForm = () => {
    const [step, setStep] = useState(0);
    const Form = forms[step];
    return (React.createElement(PageContent, null,
        React.createElement(Steps, { current: step },
            React.createElement(Steps.Item, { title: "Project Type" }),
            React.createElement(Steps.Item, { title: "Project Info" }),
            React.createElement(Steps.Item, { title: "Team settings" }),
            React.createElement(Steps.Item, { title: "Business Info" }),
            React.createElement(Steps.Item, { title: "Completed" })),
        React.createElement(Divider, null),
        React.createElement("div", { className: "wizard-form" },
            React.createElement(Form, null),
            React.createElement(Divider, null),
            React.createElement(Stack, { justifyContent: "space-between" },
                step !== 0 && (React.createElement(IconButton, { icon: React.createElement(PagePreviousIcon, null), onClick: () => setStep(Math.max(step - 1, 0)) }, "Back")),
                step !== forms.length - 1 && (React.createElement(IconButton, { icon: React.createElement(PageNextIcon, null), placement: "right", appearance: "primary", onClick: () => setStep(Math.min(step + 1, 4)) }, "Continue"))))));
};
export default WizardForm;
//# sourceMappingURL=WizardForm.js.map