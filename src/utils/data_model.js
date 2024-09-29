// Ticket interface
const Ticket = {
    id: '',
    title: '',
    tag: [],
    userId: '',
    status: '',
    priority: 0
};

// User interface
const User = {
    id: '',
    name: '',
    available: false
};

// Col interface
const Col = {
    col: []
};

// UserIdToData interface
const UserIdToData = {
    userData: {}
};

// Export Ticket, User, Col, UserIdToData
module.exports = { Ticket, User, Col, UserIdToData };