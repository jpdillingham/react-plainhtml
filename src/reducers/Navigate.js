
const Navigation = (state = { id: 'default', content: null }, action) => {
    switch (action.type) {
        case 'NAVIGATE':
            return { id: action.data.id, content: action.data.content };
        default: 
            return state;
    }
}

export default Navigation;