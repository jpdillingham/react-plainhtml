const Greeting = (state = 'N/A', action) => {
    switch (action.type) {
        case 'HELLO_NAME':
            return 'Hello, ' + action.name + '!';
        case 'HOLA_NAME':
            return 'Hola, ' + action.name + '!';
        default:
            return 'Hello, stranger!';
    }
}

export default Greeting;