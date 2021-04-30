var emp = {
    'person1': {
        'firstName': 'Usha',
        'id': "a123",
        'age': 50

    },
    'person2': {
        'firstName': 'Henry',
        'id': "a345",
        'age': 23
    },
    'person3': {
        'firstName': 'Madhu',
        'id': "c456",
        'age': 43
    }
}

function pairs(id) {
    document.write(JSON.stringify(emp[id]));

}

pairs('person1')