import React from 'react';

const AppContext = React.createContext({
    folders: [],
    // setFolders: () => {},
    notes: [],
    // setNotes: () => {},
});

export default AppContext;