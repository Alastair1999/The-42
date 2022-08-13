const {mockFirebase} = require("firestore-jest-mock")

//this test creates a fake databasese and checks that data can be submitted to a collection called aberdeen. 

mockFirebase({
    database: {
        users: [
            {id: 1234},
            {id: 5678}
        ],
        aberdeen: [
            {visit: 'visit 1', competition: 'Cinch Premiership', fixture: 'Aberdeen vs Hibs', result: 'Aberdeen 2-0 Hibs', date: '08/08/2022', scorers: 'Miovski x2'}
        ],
    },
});