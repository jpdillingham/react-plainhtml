const Greeting = (state = 'N/A', action) => {
    switch (action.type) {
        case 'HELLO_NAME':
            return 'Hello, ' + state + '!';
        case 'HOLA_NAME':
            return 'Hola, ' + state + '!';
        default:
            return 'Hello, stranger!';
    }
}

export default Greeting;