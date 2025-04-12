export const data = [
    {
        id: 1,
        name: 'Room 1',
        image: 'https://th.bing.com/th/id/OIP.thpuHupvT19YNUyPvtHuvQHaE7?rs=1&pid=ImgDetMain',
        moreImages: ['https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1620923464746-9P9CHDE3GWWYHK2WWALV/hostel-dorm-bedroom-two.jpg', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/049b7e66877077.5b25eed7779a7.jpg', 'https://hostelos.hr/wp-content/uploads/2022/04/10.jpg'],
        description: 'This is room 1',
        category: 'Deluxe',
        offer: '20% off',
        sharing: 'Two share',
        status: 'available',
        price: 100,
        address_line: '1234 Main St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94111',
        maps_link: 'https://www.google.com',
        rating: 4.5,
        reviewCount: 200,
        amenities: ['Wifi', 'Parking', 'Breakfast', 'Pool', 'Gym'],
        reviews: [
            { username: 'user1', review: 'Great room!', rating: 5 },
            { username: 'user2', review: 'Very comfortable.', rating: 4 },
            { username: 'user3', review: 'Good value for money.', rating: 4.5 }
        ],
        nearby: [
            { place: 'Golden Gate Bridge', distance: 2 },
            { place: 'Fisherman\'s Wharf', distance: 3 },
            { place: 'Alcatraz Island', distance: 4 }
        ]
    },
    ...Array.from({ length: 9 }, (_, i) => ({
        id: i + 2,
        name: `Room ${i + 2}`,
        image: 'https://via.placeholder.com/150',
        moreImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        description: `This is room ${i + 2}`,
        category: i % 2 === 0 ? 'Standard' : 'Deluxe',
        offer: i % 3 === 0 ? '15% off' : '10% off',
        sharing: i % 2 === 0 ? 'Single' : 'Two share',
        status: i % 4 === 0 ? 'unavailable' : 'available',
        price: 80 + (i * 5),
        address_line: `${1000 + i} Main St`,
        city: 'San Francisco',
        state: 'CA',
        zip: `941${10 + i}`,
        maps_link: 'https://www.google.com',
        rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
        reviewCount: Math.floor(Math.random() * (300 - 50) + 50),
        amenities: ['Wifi', 'Parking', 'Breakfast', 'Pool', 'Gym'].slice(0, (i % 5) + 2),
        reviews: Array.from({ length: 3 }, (_, j) => ({
            username: `user${j + 1}`,
            review: ['Great place!', 'Very cozy.', 'Would stay again!'][j % 3],
            rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1)
        })),
        nearby: [
            { place: 'Museum of Modern Art', distance: i + 1 },
            { place: 'City Park', distance: i + 2 },
            { place: 'Local Market', distance: i + 3 }
        ]
    }))
];
