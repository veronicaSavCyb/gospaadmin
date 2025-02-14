import React, { useRef } from 'react';
import { Dropdown, Popover, Whisper, Stack, Badge, Avatar, IconButton, List, Button } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import NoticeIcon from '@rsuite/icons/Notice';
import GearIcon from '@rsuite/icons/Gear';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import PeoplesCostomizeIcon from '@rsuite/icons/PeoplesCostomize';
const renderAdminSpeaker = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
        onClose();
        console.log(eventKey);
    };
    return (React.createElement(Popover, { ref: ref, className: className, style: { left, top }, full: true },
        React.createElement(Dropdown.Menu, { onSelect: handleSelect },
            React.createElement(Dropdown.Item, { panel: true, style: { padding: 10, width: 160 } },
                React.createElement("p", null, "Signed in as"),
                React.createElement("strong", null, "Administrator")),
            React.createElement(Dropdown.Item, { divider: true }),
            React.createElement(Dropdown.Item, null, "Set status"),
            React.createElement(Dropdown.Item, null, "Profile & account"),
            React.createElement(Dropdown.Item, null, "Feedback"),
            React.createElement(Dropdown.Item, { divider: true }),
            React.createElement(Dropdown.Item, null, "Settings"),
            React.createElement(Dropdown.Item, null, "Sign out"),
            React.createElement(Dropdown.Item, { icon: React.createElement(HelpOutlineIcon, null), href: "https://rsuitejs.com", target: "_blank", as: "a" },
                "Help",
                ' '))));
};
const renderSettingSpeaker = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
        onClose();
        console.log(eventKey);
    };
    return (React.createElement(Popover, { ref: ref, className: className, style: { left, top }, full: true },
        React.createElement(Dropdown.Menu, { onSelect: handleSelect },
            React.createElement(Dropdown.Item, { panel: true, style: { padding: 10, width: 160 } },
                React.createElement("strong", null, "Settings")),
            React.createElement(Dropdown.Item, null, "Applications"),
            React.createElement(Dropdown.Item, null, "Projects"),
            React.createElement(Dropdown.Item, { divider: true }),
            React.createElement(Dropdown.Item, null, "Members"),
            React.createElement(Dropdown.Item, null, "Teams"),
            React.createElement(Dropdown.Item, null, "Channels"),
            React.createElement(Dropdown.Item, { divider: true }),
            React.createElement(Dropdown.Item, null, "Integrations"),
            React.createElement(Dropdown.Item, null, "Customize"))));
};
const renderNoticeSpeaker = ({ onClose, left, top, className }, ref) => {
    const notifications = [
        [
            '7 hours ago',
            'The charts of the dashboard have been fully upgraded and are more visually pleasing.'
        ],
        [
            '13 hours ago',
            'The function of virtualizing large lists has been added, and the style of the list can be customized as required.'
        ],
        ['2 days ago', 'Upgraded React 18 and Webpack 5.'],
        [
            '3 days ago',
            'Upgraded React Suite 5 to support TypeScript, which is more concise and efficient.'
        ]
    ];
    return (React.createElement(Popover, { ref: ref, className: className, style: { left, top, width: 300 }, title: "Last updates" },
        React.createElement(List, null, notifications.map((item, index) => {
            const [time, content] = item;
            return (React.createElement(List.Item, { key: index },
                React.createElement(Stack, { spacing: 4 },
                    React.createElement(Badge, null),
                    " ",
                    React.createElement("span", { style: { color: '#57606a' } }, time)),
                React.createElement("p", null, content)));
        })),
        React.createElement("div", { style: { textAlign: 'center', marginTop: 20 } },
            React.createElement(Button, { onClick: onClose }, "More notifications"))));
};
const Header = () => {
    const trigger = useRef(null);
    const navigate = useNavigate();
    return (React.createElement(Stack, { className: "header", spacing: 8 },
        React.createElement(IconButton, { icon: React.createElement(PeoplesCostomizeIcon, { style: { fontSize: 20 } }), onClick: () => navigate('/spa-salon-wizard') }),
        React.createElement(Whisper, { placement: "bottomEnd", trigger: "click", ref: trigger, speaker: renderNoticeSpeaker },
            React.createElement(IconButton, { icon: React.createElement(Badge, { content: 5 },
                    React.createElement(NoticeIcon, { style: { fontSize: 20 } })) })),
        React.createElement(Whisper, { placement: "bottomEnd", trigger: "click", ref: trigger, speaker: renderSettingSpeaker },
            React.createElement(IconButton, { icon: React.createElement(GearIcon, { style: { fontSize: 20 } }) })),
        React.createElement(Whisper, { placement: "bottomEnd", trigger: "click", ref: trigger, speaker: renderAdminSpeaker },
            React.createElement(Avatar, { size: "sm", circle: true, src: "https://avatars.githubusercontent.com/u/1203827", alt: "@simonguo", style: { marginLeft: 8 } }))));
};
export default Header;
//# sourceMappingURL=Header.js.map