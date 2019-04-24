import React from 'react';

const AppContext = React.createContext({
    folders: [],
    notes: [],
    delete: () => {},
});

export default AppContext;