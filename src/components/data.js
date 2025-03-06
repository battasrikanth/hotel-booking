export const data = [
    {
        id: 1,
        name: 'Room 1',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/601928731.jpg?k=f2bd0de38dba9c0a5dcf674dffb5059d7333b2ec9334bcf09ee423e56e6a3aec&o=',
        moreImages: ['https://cf.bstatic.com/xdata/images/hotel/max1280x900/601928813.jpg?k=293ed07d2102bfc31024b4c7becbb1a6f64f9a810905f28ea49280f8e7c52abc&o=&hp=1', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/601928784.jpg?k=fdb93000f91ebcfa9ca2d3b9b3604ff6f9b5c94eede13167d958d814d8062585&o=&hp=1', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/601928790.jpg?k=7ec46b3c2e21bb6083f4c101c8858396e08bfda48f21bd092992eae23674c233&o=&hp=1'],
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
