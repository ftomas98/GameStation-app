import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Slavko',
            email: 'slavko.ramljak@fsre.sum.ba',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Frano',
            email: 'frano.tomas@fsre.sum.ba',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            name:'Grand Theft Auto V',
            genre:'action-adventure',
            image:'/images/igrica-1.jpg',
            price:'30.00',
            countInStock:'10',
            year:'2013',
        },
        {
            name:'Grand Theft Auto IV',
            genre:'action-adventure',
            image:'/images/igrica-2.jpg',
            price:'20.00',
            countInStock:'20',
            year:'2008',
        },
        {
            name:'Max Payne 3',
            genre:'action-adventure',
            image:'/images/igrica-3.jpg',
            price:'20.00',
            countInStock:'0',
            year:'2012',
        },
        {
            name:'Far Cry 3',
            genre:'first-person shooter',
            image:'/images/igrica-4.jpg',
            price:'12.00',
            countInStock:'15',
            year:'2012',
        },
        {
            name:'Far Cry 4',
            genre:'first-person shooter',
            image:'/images/igrica-5.jpg',
            price:'15.00',
            countInStock:'5',
            year:'2014',
        },
        {
            name:'FIFA 21',
            genre:'sports',
            image:'/images/igrica-6.jpg',
            price:'25.00',
            countInStock:'10',
            year:'2020',
        },
        {
            name:'Cyberpunk 2077',
            genre:'action role-playing',
            image:'/images/igrica-7.jpg',
            price:'45.00',
            countInStock:'12',
            year:'2020',
        },
        {
            name:'Red Dead Redemption 2',
            genre:'action-adventure',
            image:'/images/igrica-8.jpg',
            price:'40.00',
            countInStock:'7',
            year:'2018',
        },
    ]
}
export default data;