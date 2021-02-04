import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Daesol',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products:[
        {
            name:'Nike Slim Shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price:1,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'
        },
        {
            name:'Adidas Slim Shirt',
            category: 'Shirts',
            image:'/images/p2.jpg',
            price:95,
            countInStock: 20,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 12,
            description: 'High quality product'
        },
        {
            name:'Lacoste Jacket',
            category: 'Jacket',
            image:'/images/p3.jpg',
            price:350,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'
        },
        {
            name:'Nike Coat',
            category: 'Coat',
            image:'/images/p4.jpg',
            price:280,
            countInStock: 5,
            brand: 'Nike',
            rating: 5.0,
            numReviews: 8,
            description: 'High quality product'
        },
        {
            name:'OG Red Jordan 1',
            category: 'Shoes',
            image:'/images/p5.jpg',
            price:175,
            countInStock: 5,
            brand: 'Jordan',
            rating: 5.0,
            numReviews: 21,
            description: 'High quality product'
        },
        {
            name:'Supreme Hoodie',
            category: 'Hoodie',
            image:'/images/p6.jpg',
            price:385,
            countInStock: 0,
            brand: 'Supreme',
            rating: 4.5,
            numReviews: 17,
            description: 'High quality product'
        },
    ]
};
export default data;