export const defaultData = [
    {
        id: 1,
        name: 'HI San Francisco Downtown Hostel',
        image: 'https://www.hiusa.org/images/hostels/san-francisco-downtown/hi-san-francisco-downtown-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/san-francisco-downtown/hi-san-francisco-downtown-2.jpg',
          'https://www.hiusa.org/images/hostels/san-francisco-downtown/hi-san-francisco-downtown-3.jpg',
          'https://www.hiusa.org/images/hostels/san-francisco-downtown/hi-san-francisco-downtown-4.jpg'
        ],
        description: 'Modern hostel located near Union Square with vibrant communal spaces.',
        category: 'Deluxe',
        offer: '20% off',
        sharing: 'Two share',
        status: 'available',
        price: 120,
        address_line: '312 Mason St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94102',
        maps_link: 'https://www.google.com/maps/place/312+Mason+St,+San+Francisco,+CA+94102',
        rating: 4.7,
        reviewCount: 250,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Kitchen'],
        reviews: [
          { username: 'traveler01', review: 'Fantastic location and clean rooms.', rating: 5 },
          { username: 'backpacker22', review: 'Loved the communal kitchen!', rating: 4.5 },
          { username: 'nomadMike', review: 'Great value for money.', rating: 4.8 }
        ],
        nearby: [
          { place: 'Union Square', distance: 0.2 },
          { place: 'Cable Car Museum', distance: 0.5 },
          { place: 'Chinatown', distance: 0.7 }
        ]
      },
      {
        id: 2,
        name: 'HI San Francisco Fisherman’s Wharf Hostel',
        image: 'https://www.hiusa.org/images/hostels/san-francisco-fishermans-wharf/hi-san-francisco-fishermans-wharf-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/san-francisco-fishermans-wharf/hi-san-francisco-fishermans-wharf-2.jpg',
          'https://www.hiusa.org/images/hostels/san-francisco-fishermans-wharf/hi-san-francisco-fishermans-wharf-3.jpg',
          'https://www.hiusa.org/images/hostels/san-francisco-fishermans-wharf/hi-san-francisco-fishermans-wharf-4.jpg'
        ],
        description: 'Hostel with stunning views over San Francisco Bay, located in historic Fort Mason.',
        category: 'Standard',
        offer: '15% off',
        sharing: 'Four share',
        status: 'available',
        price: 90,
        address_line: '240 Fort Mason',
        city: 'San Francisco',
        state: 'CA',
        zip: '94123',
        maps_link: 'https://www.google.com/maps/place/240+Fort+Mason,+San+Francisco,+CA+94123',
        rating: 4.6,
        reviewCount: 180,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Kitchen'],
        reviews: [
          { username: 'seaviewlover', review: 'Amazing bay views and friendly staff.', rating: 4.8 },
          { username: 'historybuff', review: 'Loved staying in a historic building.', rating: 4.5 },
          { username: 'naturefan', review: 'Great access to parks and trails.', rating: 4.7 }
        ],
        nearby: [
          { place: 'Fisherman’s Wharf', distance: 0.5 },
          { place: 'Ghirardelli Square', distance: 0.7 },
          { place: 'Marina Green', distance: 1.0 }
        ]
      },
      {
        id: 3,
        name: 'HI Los Angeles Santa Monica Hostel',
        image: 'https://www.hiusa.org/images/hostels/santa-monica/hi-santa-monica-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/santa-monica/hi-santa-monica-2.jpg',
          'https://www.hiusa.org/images/hostels/santa-monica/hi-santa-monica-3.jpg',
          'https://www.hiusa.org/images/hostels/santa-monica/hi-santa-monica-4.jpg'
        ],
        description: 'Oceanfront location in Santa Monica with easy access to the beach and shopping.',
        category: 'Standard',
        offer: '10% off',
        sharing: 'Two share',
        status: 'available',
        price: 130,
        address_line: '1436 2nd St',
        city: 'Santa Monica',
        state: 'CA',
        zip: '90401',
        maps_link: 'https://www.google.com/maps/place/1436+2nd+St,+Santa+Monica,+CA+90401',
        rating: 4.5,
        reviewCount: 150,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Beach Access'],
        reviews: [
          { username: 'beachlover89', review: 'Great beach access, perfect for vacation.', rating: 4.7 },
          { username: 'shopper2010', review: 'Steps away from shopping and dining.', rating: 4.5 },
          { username: 'adventurist23', review: 'Perfect place for a beach getaway.', rating: 4.8 }
        ],
        nearby: [
          { place: 'Santa Monica Pier', distance: 0.3 },
          { place: 'Third Street Promenade', distance: 0.5 },
          { place: 'Venice Beach', distance: 2.0 }
        ]
      },
      {
        id: 4,
        name: 'HI New York City Hostel',
        image: 'https://www.hiusa.org/images/hostels/new-york-city/hi-new-york-city-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/new-york-city/hi-new-york-city-2.jpg',
          'https://www.hiusa.org/images/hostels/new-york-city/hi-new-york-city-3.jpg',
          'https://www.hiusa.org/images/hostels/new-york-city/hi-new-york-city-4.jpg'
        ],
        description: 'A classic hostel in Manhattan, offering easy access to NYC’s iconic landmarks.',
        category: 'Deluxe',
        offer: '25% off',
        sharing: 'Four share',
        status: 'available',
        price: 95,
        address_line: '891 Amsterdam Ave',
        city: 'New York',
        state: 'NY',
        zip: '10025',
        maps_link: 'https://www.google.com/maps/place/891+Amsterdam+Ave,+New+York,+NY+10025',
        rating: 4.3,
        reviewCount: 200,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Kitchen'],
        reviews: [
          { username: 'newyorkfan', review: 'Perfect location for sightseeing in NYC.', rating: 4.5 },
          { username: 'culturebuff', review: 'Easy access to museums and theaters.', rating: 4.2 },
          { username: 'citytraveler', review: 'Affordable stay in a prime location.', rating: 4.4 }
        ],
        nearby: [
          { place: 'Central Park', distance: 0.6 },
          { place: 'Metropolitan Museum of Art', distance: 1.0 },
          { place: 'Times Square', distance: 1.5 }
        ]
      },
      {
        id: 5,
        name: 'HI Chicago Hostel',
        image: 'https://www.hiusa.org/images/hostels/chicago/hi-chicago-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/chicago/hi-chicago-2.jpg',
          'https://www.hiusa.org/images/hostels/chicago/hi-chicago-3.jpg',
          'https://www.hiusa.org/images/hostels/chicago/hi-chicago-4.jpg'
        ],
        description: 'Convenient hostel located in downtown Chicago, close to major attractions.',
        category: 'Standard',
        offer: '20% off',
        sharing: 'Two share',
        status: 'available',
        price: 85,
        address_line: '24 E Congress Pkwy',
        city: 'Chicago',
        state: 'IL',
        zip: '60605',
        maps_link: 'https://www.google.com/maps/place/24+E+Congress+Pkwy,+Chicago,+IL+60605',
        rating: 4.4,
        reviewCount: 180,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Kitchen'],
        reviews: [
          { username: 'chicagotravel', review: 'Great base for exploring Chicago.', rating: 4.6 },
          { username: 'foodie123', review: 'Close to some fantastic eateries!', rating: 4.3 },
          { username: 'cityslicker', review: 'Convenient and affordable in downtown.', rating: 4.5 }
        ],
        nearby: [
          { place: 'Millennium Park', distance: 0.5 },
          { place: 'Navy Pier', distance: 1.2 },
          { place: 'Art Institute of Chicago', distance: 0.7 }
        ]
      },
      {
        id: 6,
        name: 'HI Washington DC Hostel',
        image: 'https://www.hiusa.org/images/hostels/washington-dc/hi-washington-dc-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/washington-dc/hi-washington-dc-2.jpg',
          'https://www.hiusa.org/images/hostels/washington-dc/hi-washington-dc-3.jpg',
          'https://www.hiusa.org/images/hostels/washington-dc/hi-washington-dc-4.jpg'
        ],
        description: 'Modern hostel with historic charm, close to the National Mall and major museums.',
        category: 'Deluxe',
        offer: '15% off',
        sharing: 'Four share',
        status: 'available',
        price: 100,
        address_line: '1009 11th St NW',
        city: 'Washington DC',
        state: 'DC',
        zip: '20001',
        maps_link: 'https://www.google.com/maps/place/1009+11th+St+NW,+Washington,+DC+20001',
        rating: 4.6,
        reviewCount: 220,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Kitchen'],
        reviews: [
          { username: 'historybuff', review: 'Perfect location to visit the Smithsonian!', rating: 4.7 },
          { username: 'explorer01', review: 'Great hostel with friendly staff.', rating: 4.5 },
          { username: 'museumlover', review: 'Ideal place for museum-goers.', rating: 4.6 }
        ],
        nearby: [
          { place: 'National Museum of American History', distance: 0.4 },
          { place: 'Lincoln Memorial', distance: 1.0 },
          { place: 'White House', distance: 1.2 }
        ]
      },
      // Continue with rooms 7 to 25
      {
        id: 7,
        name: 'HI Boston Hostel',
        image: 'https://www.hiusa.org/images/hostels/boston/hi-boston-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/boston/hi-boston-2.jpg',
          'https://www.hiusa.org/images/hostels/boston/hi-boston-3.jpg',
          'https://www.hiusa.org/images/hostels/boston/hi-boston-4.jpg'
        ],
        description: 'Historic building near Boston Common with a lively atmosphere and easy access to sightseeing.',
        category: 'Deluxe',
        offer: '15% off',
        sharing: 'Four share',
        status: 'available',
        price: 115,
        address_line: '19 Stuart St',
        city: 'Boston',
        state: 'MA',
        zip: '02116',
        maps_link: 'https://www.google.com/maps/place/19+Stuart+St,+Boston,+MA+02116',
        rating: 4.7,
        reviewCount: 230,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Kitchen'],
        reviews: [
          { username: 'bostontraveler', review: 'Perfect location for exploring Boston!', rating: 4.8 },
          { username: 'cityhopper', review: 'Convenient and affordable in downtown Boston.', rating: 4.5 },
          { username: 'historicfan', review: 'Amazing place with lots of history.', rating: 4.7 }
        ],
        nearby: [
          { place: 'Boston Common', distance: 0.3 },
          { place: 'Freedom Trail', distance: 0.5 },
          { place: 'Faneuil Hall', distance: 0.8 }
        ]
      },
      {
        id: 8,
        name: 'HI Austin Hostel',
        image: 'https://www.hiusa.org/images/hostels/austin/hi-austin-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/austin/hi-austin-2.jpg',
          'https://www.hiusa.org/images/hostels/austin/hi-austin-3.jpg',
          'https://www.hiusa.org/images/hostels/austin/hi-austin-4.jpg'
        ],
        description: 'Charming hostel in the heart of Austin with a vibrant, artsy vibe.',
        category: 'Standard',
        offer: '10% off',
        sharing: 'Six share',
        status: 'available',
        price: 90,
        address_line: '2200 N Interstate 35',
        city: 'Austin',
        state: 'TX',
        zip: '78705',
        maps_link: 'https://www.google.com/maps/place/2200+N+Interstate+35,+Austin,+TX+78705',
        rating: 4.6,
        reviewCount: 180,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'BBQ'],
        reviews: [
          { username: 'austinfan', review: 'Great place with an awesome community.', rating: 4.7 },
          { username: 'liveinthecity', review: 'Perfect base to explore Austin.', rating: 4.5 },
          { username: 'musiclover', review: 'Great live music venues nearby.', rating: 4.6 }
        ],
        nearby: [
          { place: 'Texas State Capitol', distance: 0.6 },
          { place: 'Lady Bird Lake', distance: 1.2 },
          { place: 'Zilker Park', distance: 1.5 }
        ]
      },
      {
        id: 9,
        name: 'HI Montreal Hostel',
        image: 'https://www.hiusa.org/images/hostels/montreal/hi-montreal-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/montreal/hi-montreal-2.jpg',
          'https://www.hiusa.org/images/hostels/montreal/hi-montreal-3.jpg',
          'https://www.hiusa.org/images/hostels/montreal/hi-montreal-4.jpg'
        ],
        description: 'A colorful and fun place with a great atmosphere in Montreal’s vibrant Plateau neighborhood.',
        category: 'Standard',
        offer: '20% off',
        sharing: 'Two share',
        status: 'available',
        price: 75,
        address_line: '1030 Mackay St',
        city: 'Montreal',
        state: 'QC',
        zip: 'H3G 2H1',
        maps_link: 'https://www.google.com/maps/place/1030+Mackay+St,+Montreal,+QC+H3G+2H1',
        rating: 4.8,
        reviewCount: 250,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Games Room'],
        reviews: [
          { username: 'montrealtourist', review: 'Amazing vibe, and close to everything in Montreal!', rating: 5 },
          { username: 'culturaltraveler', review: 'Great for meeting fellow travelers.', rating: 4.6 },
          { username: 'urbanexplorer', review: 'A fun place to stay with a great atmosphere.', rating: 4.7 }
        ],
        nearby: [
          { place: 'Mont Royal', distance: 0.8 },
          { place: 'Biodome de Montreal', distance: 1.0 },
          { place: 'Old Montreal', distance: 1.5 }
        ]
      },
      {
        id: 10,
        name: 'HI Vancouver Central Hostel',
        image: 'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-2.jpg',
          'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-3.jpg',
          'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-4.jpg'
        ],
        description: 'A modern and central hostel with great amenities and a welcoming atmosphere in the heart of Vancouver.',
        category: 'Deluxe',
        offer: '30% off',
        sharing: 'Four share',
        status: 'available',
        price: 125,
        address_line: '1025 Granville St',
        city: 'Vancouver',
        state: 'BC',
        zip: 'V6Z 1L5',
        maps_link: 'https://www.google.com/maps/place/1025+Granville+St,+Vancouver,+BC+V6Z+1L5',
        rating: 4.9,
        reviewCount: 280,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Bikes'],
        reviews: [
          { username: 'canadatravel', review: 'Great location and friendly staff!', rating: 5 },
          { username: 'outdoorenthusiast', review: 'Awesome bike rentals, loved exploring the city.', rating: 4.8 },
          { username: 'citytourist', review: 'Convenient, clean, and affordable.', rating: 4.7 }
        ],
        nearby: [
          { place: 'Stanley Park', distance: 1.2 },
          { place: 'Granville Island', distance: 1.5 },
          { place: 'Vancouver Art Gallery', distance: 0.6 }
        ]
      },
      {
        id: 11,
        name: 'HI Cape Cod Hostel',
        image: 'https://www.hiusa.org/images/hostels/cape-cod/hi-cape-cod-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/cape-cod/hi-cape-cod-2.jpg',
          'https://www.hiusa.org/images/hostels/cape-cod/hi-cape-cod-3.jpg',
          'https://www.hiusa.org/images/hostels/cape-cod/hi-cape-cod-4.jpg'
        ],
        description: 'Seaside hostel in Cape Cod with close proximity to beaches and nature reserves.',
        category: 'Standard',
        offer: '15% off',
        sharing: 'Two share',
        status: 'available',
        price: 100,
        address_line: '2650 State Hwy',
        city: 'Eastham',
        state: 'MA',
        zip: '02642',
        maps_link: 'https://www.google.com/maps/place/2650+State+Hwy,+Eastham,+MA+02642',
        rating: 4.5,
        reviewCount: 170,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Beach Access'],
        reviews: [
          { username: 'seabeachlover', review: 'Loved the beach access and peaceful location.', rating: 4.7 },
          { username: 'naturelover', review: 'Perfect for nature lovers and quiet retreats.', rating: 4.6 },
          { username: 'sunseeker', review: 'Wonderful location for a summer vacation.', rating: 4.8 }
        ],
        nearby: [
          { place: 'Nauset Beach', distance: 0.5 },
          { place: 'Cape Cod National Seashore', distance: 1.0 },
          { place: 'Salt Pond Visitor Center', distance: 1.2 }
        ]
      },
      {
        id: 12,
        name: 'HI Dallas Hostel',
        image: 'https://www.hiusa.org/images/hostels/dallas/hi-dallas-1.jpg',
        moreImages: [
          'https://www.hiusa.org/images/hostels/dallas/hi-dallas-2.jpg',
          'https://www.hiusa.org/images/hostels/dallas/hi-dallas-3.jpg',
          'https://www.hiusa.org/images/hostels/dallas/hi-dallas-4.jpg'
        ],
        description: 'Cozy and affordable hostel in the heart of Dallas, ideal for exploring the city’s culture.',
        category: 'Standard',
        offer: '10% off',
        sharing: 'Four share',
        status: 'available',
        price: 85,
        address_line: '2400 Main St',
        city: 'Dallas',
        state: 'TX',
        zip: '75201',
        maps_link: 'https://www.google.com/maps/place/2400+Main+St,+Dallas,+TX+75201',
        rating: 4.4,
        reviewCount: 210,
        amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Kitchen'],
        reviews: [
          { username: 'dallasvisitor', review: 'Great value for money in downtown Dallas.', rating: 4.5 },
          { username: 'historybuff', review: 'Close to museums and historic sites.', rating: 4.4 },
          { username: 'cityadventurer', review: 'Perfect for city exploration.', rating: 4.3 }
        ],
        nearby: [
          { place: 'Dallas Museum of Art', distance: 0.5 },
          { place: 'Dealey Plaza', distance: 0.8 },
          { place: 'Klyde Warren Park', distance: 1.0 }
        ]
      },{
      id: 13,
    name: 'HI New York City Hostel',
    image: 'https://www.hiusa.org/images/hostels/new-york/hi-new-york-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/new-york/hi-new-york-2.jpg',
      'https://www.hiusa.org/images/hostels/new-york/hi-new-york-3.jpg',
      'https://www.hiusa.org/images/hostels/new-york/hi-new-york-4.jpg'
    ],
    description: 'Large, friendly hostel with a great location in Manhattan near Central Park and Times Square.',
    category: 'Deluxe',
    offer: '25% off',
    sharing: 'Eight share',
    status: 'available',
    price: 145,
    address_line: '891 Amsterdam Ave',
    city: 'New York',
    state: 'NY',
    zip: '10025',
    maps_link: 'https://www.google.com/maps/place/891+Amsterdam+Ave,+New+York,+NY+10025',
    rating: 4.6,
    reviewCount: 320,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', '24/7 Reception'],
    reviews: [
      { username: 'bigapplelover', review: 'Great hostel for first-time visitors to NYC.', rating: 5 },
      { username: 'manhattanexplorer', review: 'Perfect location, close to everything.', rating: 4.7 },
      { username: 'traveler89', review: 'Affordable option in a prime location.', rating: 4.6 }
    ],
    nearby: [
      { place: 'Central Park', distance: 0.5 },
      { place: 'Times Square', distance: 1.0 },
      { place: 'Broadway', distance: 1.2 }
    ]
  },
  {
    id: 14,
    name: 'HI San Diego Downtown Hostel',
    image: 'https://www.hiusa.org/images/hostels/san-diego/hi-san-diego-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/san-diego/hi-san-diego-2.jpg',
      'https://www.hiusa.org/images/hostels/san-diego/hi-san-diego-3.jpg',
      'https://www.hiusa.org/images/hostels/san-diego/hi-san-diego-4.jpg'
    ],
    description: 'Located near Gaslamp Quarter, this hostel offers vibrant, affordable accommodations in downtown San Diego.',
    category: 'Standard',
    offer: '20% off',
    sharing: 'Four share',
    status: 'available',
    price: 110,
    address_line: '521 Market St',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    maps_link: 'https://www.google.com/maps/place/521+Market+St,+San+Diego,+CA+92101',
    rating: 4.5,
    reviewCount: 275,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Bar'],
    reviews: [
      { username: 'sandiegovibes', review: 'Great spot to explore the nightlife and beaches!', rating: 4.8 },
      { username: 'beachbum92', review: 'Awesome location for all the main attractions.', rating: 4.6 },
      { username: 'surferdude', review: 'Affordable and clean, perfect for a short stay.', rating: 4.5 }
    ],
    nearby: [
      { place: 'Gaslamp Quarter', distance: 0.3 },
      { place: 'Balboa Park', distance: 1.5 },
      { place: 'USS Midway Museum', distance: 1.2 }
    ]
  },
  {
    id: 15,
    name: 'HI Toronto Hostel',
    image: 'https://www.hiusa.org/images/hostels/toronto/hi-toronto-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/toronto/hi-toronto-2.jpg',
      'https://www.hiusa.org/images/hostels/toronto/hi-toronto-3.jpg',
      'https://www.hiusa.org/images/hostels/toronto/hi-toronto-4.jpg'
    ],
    description: 'Charming hostel located near the Entertainment District, perfect for exploring Toronto’s cultural scene.',
    category: 'Standard',
    offer: '15% off',
    sharing: 'Six share',
    status: 'available',
    price: 95,
    address_line: '76 Church St',
    city: 'Toronto',
    state: 'ON',
    zip: 'M5C 2G1',
    maps_link: 'https://www.google.com/maps/place/76+Church+St,+Toronto,+ON+M5C+2G1',
    rating: 4.4,
    reviewCount: 210,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Games Room'],
    reviews: [
      { username: 'torontovibes', review: 'Great location, close to everything in downtown Toronto.', rating: 4.7 },
      { username: 'canadianexplorer', review: 'Friendly staff and great amenities.', rating: 4.5 },
      { username: 'culturaltourist', review: 'Ideal for culture lovers looking to explore the city.', rating: 4.6 }
    ],
    nearby: [
      { place: 'CN Tower', distance: 0.8 },
      { place: 'Royal Ontario Museum', distance: 1.0 },
      { place: 'Kensington Market', distance: 1.2 }
    ]
  },
  {
    id: 16,
    name: 'HI Nashville Hostel',
    image: 'https://www.hiusa.org/images/hostels/nashville/hi-nashville-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/nashville/hi-nashville-2.jpg',
      'https://www.hiusa.org/images/hostels/nashville/hi-nashville-3.jpg',
      'https://www.hiusa.org/images/hostels/nashville/hi-nashville-4.jpg'
    ],
    description: 'A fun and lively hostel in the heart of Nashville, ideal for music lovers and festival goers.',
    category: 'Standard',
    offer: '10% off',
    sharing: 'Four share',
    status: 'available',
    price: 105,
    address_line: '1000 Broadway',
    city: 'Nashville',
    state: 'TN',
    zip: '37203',
    maps_link: 'https://www.google.com/maps/place/1000+Broadway,+Nashville,+TN+37203',
    rating: 4.5,
    reviewCount: 190,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Live Music'],
    reviews: [
      { username: 'musicfan', review: 'Great place to stay if you’re into country music.', rating: 5 },
      { username: 'southerntraveler', review: 'Perfect location for a Nashville experience!', rating: 4.6 },
      { username: 'blueslovers', review: 'The live music was incredible!', rating: 4.7 }
    ],
    nearby: [
      { place: 'Ryman Auditorium', distance: 0.5 },
      { place: 'Country Music Hall of Fame', distance: 0.8 },
      { place: 'Broadway Street', distance: 0.2 }
    ]
  },
  {
    id: 17,
    name: 'HI Portland Hostel',
    image: 'https://www.hiusa.org/images/hostels/portland/hi-portland-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/portland/hi-portland-2.jpg',
      'https://www.hiusa.org/images/hostels/portland/hi-portland-3.jpg',
      'https://www.hiusa.org/images/hostels/portland/hi-portland-4.jpg'
    ],
    description: 'Cozy hostel in Portland’s Pearl District, close to cafes, galleries, and beautiful parks.',
    category: 'Standard',
    offer: '15% off',
    sharing: 'Two share',
    status: 'available',
    price: 95,
    address_line: '429 SW 11th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97205',
    maps_link: 'https://www.google.com/maps/place/429+SW+11th+Ave,+Portland,+OR+97205',
    rating: 4.6,
    reviewCount: 220,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Bike Rentals'],
    reviews: [
      { username: 'portlandlocal', review: 'Love the location! So close to great places to eat.', rating: 4.8 },
      { username: 'westcoastwanderer', review: 'Friendly staff and a great base to explore the city.', rating: 4.7 },
      { username: 'culturebuff', review: 'Ideal spot for arts and culture lovers.', rating: 4.6 }
    ],
    nearby: [
      { place: 'Powell’s Books', distance: 0.3 },
      { place: 'Washington Park', distance: 1.0 },
      { place: 'Portland Art Museum', distance: 0.5 }
    ]
  },
  {
    id: 18,
    name: 'HI Seattle Hostel',
    image: 'https://www.hiusa.org/images/hostels/seattle/hi-seattle-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/seattle/hi-seattle-2.jpg',
      'https://www.hiusa.org/images/hostels/seattle/hi-seattle-3.jpg',
      'https://www.hiusa.org/images/hostels/seattle/hi-seattle-4.jpg'
    ],
    description: 'Located near Pike Place Market, this hostel offers comfortable and affordable accommodations in the heart of Seattle.',
    category: 'Deluxe',
    offer: '20% off',
    sharing: 'Six share',
    status: 'available',
    price: 120,
    address_line: '311 9th Ave',
    city: 'Seattle',
    state: 'WA',
    zip: '98104',
    maps_link: 'https://www.google.com/maps/place/311+9th+Ave,+Seattle,+WA+98104',
    rating: 4.7,
    reviewCount: 250,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Bike Rentals'],
    reviews: [
      { username: 'seattleshopper', review: 'Perfect place to stay for city sightseeing.', rating: 4.9 },
      { username: 'coffeelover', review: 'Super close to Pike Place and coffee shops.', rating: 4.7 },
      { username: 'natureexplorer', review: 'Great place to stay while exploring the outdoors.', rating: 4.6 }
    ],
    nearby: [
      { place: 'Pike Place Market', distance: 0.2 },
      { place: 'Space Needle', distance: 1.0 },
      { place: 'Chihuly Garden and Glass', distance: 1.2 }
    ]
  },    {
    id: 19,
    name: 'HI Cleveland Hostel',
    image: 'https://www.hiusa.org/images/hostels/cleveland/hi-cleveland-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/cleveland/hi-cleveland-2.jpg',
      'https://www.hiusa.org/images/hostels/cleveland/hi-cleveland-3.jpg',
      'https://www.hiusa.org/images/hostels/cleveland/hi-cleveland-4.jpg'
    ],
    description: 'Located near downtown Cleveland, this hostel provides affordable and friendly accommodations close to local attractions.',
    category: 'Standard',
    offer: '15% off',
    sharing: 'Four share',
    status: 'available',
    price: 95,
    address_line: '1370 W 9th St',
    city: 'Cleveland',
    state: 'OH',
    zip: '44113',
    maps_link: 'https://www.google.com/maps/place/1370+W+9th+St,+Cleveland,+OH+44113',
    rating: 4.5,
    reviewCount: 190,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Game Room'],
    reviews: [
      { username: 'clevelandtraveller', review: 'Clean, safe, and budget-friendly hostel.', rating: 4.6 },
      { username: 'cityexplorer', review: 'Great location and very affordable.', rating: 4.5 },
      { username: 'budgetbackpacker', review: 'Ideal for solo travelers and groups alike.', rating: 4.7 }
    ],
    nearby: [
      { place: 'Rock & Roll Hall of Fame', distance: 0.5 },
      { place: 'Cleveland Museum of Art', distance: 1.2 },
      { place: 'Cleveland Botanical Garden', distance: 2.0 }
    ]
  },
  {
    id: 20,
    name: 'HI Austin Hostel',
    image: 'https://www.hiusa.org/images/hostels/austin/hi-austin-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/austin/hi-austin-2.jpg',
      'https://www.hiusa.org/images/hostels/austin/hi-austin-3.jpg',
      'https://www.hiusa.org/images/hostels/austin/hi-austin-4.jpg'
    ],
    description: 'A modern and vibrant hostel in downtown Austin, perfect for music lovers and festival goers.',
    category: 'Deluxe',
    offer: '20% off',
    sharing: 'Eight share',
    status: 'available',
    price: 130,
    address_line: '1210 E 6th St',
    city: 'Austin',
    state: 'TX',
    zip: '78702',
    maps_link: 'https://www.google.com/maps/place/1210+E+6th+St,+Austin,+TX+78702',
    rating: 4.8,
    reviewCount: 300,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Music Events'],
    reviews: [
      { username: 'austinfest', review: 'Best place for music lovers. Super cool vibe.', rating: 5 },
      { username: 'southwesttraveller', review: 'Great location and fantastic atmosphere.', rating: 4.7 },
      { username: 'backpackerfan', review: 'Clean and friendly, highly recommended!', rating: 4.8 }
    ],
    nearby: [
      { place: 'Texas State Capitol', distance: 1.0 },
      { place: 'Zilker Park', distance: 2.5 },
      { place: 'Lady Bird Lake', distance: 1.5 }
    ]
  },
  {
    id: 21,
    name: 'HI Boston Hostel',
    image: 'https://www.hiusa.org/images/hostels/boston/hi-boston-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/boston/hi-boston-2.jpg',
      'https://www.hiusa.org/images/hostels/boston/hi-boston-3.jpg',
      'https://www.hiusa.org/images/hostels/boston/hi-boston-4.jpg'
    ],
    description: 'Located in Boston’s historic downtown area, this hostel offers a prime location for exploring the city.',
    category: 'Standard',
    offer: '10% off',
    sharing: 'Six share',
    status: 'available',
    price: 120,
    address_line: '19 Stuart St',
    city: 'Boston',
    state: 'MA',
    zip: '02116',
    maps_link: 'https://www.google.com/maps/place/19+Stuart+St,+Boston,+MA+02116',
    rating: 4.6,
    reviewCount: 225,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Bar'],
    reviews: [
      { username: 'bostonfanatic', review: 'Fantastic location, right near the best sights!', rating: 5 },
      { username: 'historybuff', review: 'Great spot to explore Boston’s history.', rating: 4.6 },
      { username: 'explorer5', review: 'Clean and friendly, would definitely stay again.', rating: 4.7 }
    ],
    nearby: [
      { place: 'Boston Common', distance: 0.4 },
      { place: 'Freedom Trail', distance: 0.8 },
      { place: 'Fenway Park', distance: 1.5 }
    ]
  },
  {
    id: 22,
    name: 'HI Philadelphia Hostel',
    image: 'https://www.hiusa.org/images/hostels/philadelphia/hi-philadelphia-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/philadelphia/hi-philadelphia-2.jpg',
      'https://www.hiusa.org/images/hostels/philadelphia/hi-philadelphia-3.jpg',
      'https://www.hiusa.org/images/hostels/philadelphia/hi-philadelphia-4.jpg'
    ],
    description: 'Affordable and friendly hostel located near Philadelphia’s historic sites and cultural attractions.',
    category: 'Deluxe',
    offer: '15% off',
    sharing: 'Four share',
    status: 'available',
    price: 105,
    address_line: '4000 Ridge Ave',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19129',
    maps_link: 'https://www.google.com/maps/place/4000+Ridge+Ave,+Philadelphia,+PA+19129',
    rating: 4.4,
    reviewCount: 160,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Games Room'],
    reviews: [
      { username: 'phillyfan', review: 'Great spot to visit Philadelphia’s history.', rating: 4.7 },
      { username: 'citywanderer', review: 'Nice location and very affordable.', rating: 4.5 },
      { username: 'historylover', review: 'Ideal location for exploring the historic district.', rating: 4.6 }
    ],
    nearby: [
      { place: 'Philadelphia Museum of Art', distance: 1.5 },
      { place: 'Independence Hall', distance: 2.0 },
      { place: 'Liberty Bell', distance: 2.2 }
    ]
  },
  {
    id: 23,
    name: 'HI Chicago Hostel',
    image: 'https://www.hiusa.org/images/hostels/chicago/hi-chicago-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/chicago/hi-chicago-2.jpg',
      'https://www.hiusa.org/images/hostels/chicago/hi-chicago-3.jpg',
      'https://www.hiusa.org/images/hostels/chicago/hi-chicago-4.jpg'
    ],
    description: 'Located in Chicago’s Loop, this hostel is close to theaters, restaurants, and museums, offering both comfort and convenience.',
    category: 'Standard',
    offer: '10% off',
    sharing: 'Six share',
    status: 'available',
    price: 100,
    address_line: '24 E Congress Pkwy',
    city: 'Chicago',
    state: 'IL',
    zip: '60605',
    maps_link: 'https://www.google.com/maps/place/24+E+Congress+Pkwy,+Chicago,+IL+60605',
    rating: 4.7,
    reviewCount: 280,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Event Space'],
    reviews: [
      { username: 'chicagovibes', review: 'Great location in the heart of the city.', rating: 4.8 },
      { username: 'theaterlover', review: 'Close to all the major attractions.', rating: 4.7 },
      { username: 'citytourist', review: 'Perfect for exploring Chicago’s downtown area.', rating: 4.6 }
    ],
    nearby: [
      { place: 'Millennium Park', distance: 0.8 },
      { place: 'The Art Institute of Chicago', distance: 0.5 },
      { place: 'Navy Pier', distance: 1.5 }
    ]
  },
  {
    id: 24,
    name: 'HI Vancouver Hostel',
    image: 'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-1.jpg',
    moreImages: [
      'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-2.jpg',
      'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-3.jpg',
      'https://www.hiusa.org/images/hostels/vancouver/hi-vancouver-4.jpg'
    ],
    description: 'A centrally located hostel in Vancouver with easy access to downtown, Stanley Park, and the beautiful waterfront.',
    category: 'Deluxe',
    offer: '20% off',
    sharing: 'Eight share',
    status: 'available',
    price: 135,
    address_line: '1114 Burnaby St',
    city: 'Vancouver',
    state: 'BC',
    zip: 'V6E 1P2',
    maps_link: 'https://www.google.com/maps/place/1114+Burnaby+St,+Vancouver,+BC+V6E+1P2',
    rating: 4.6,
    reviewCount: 350,
    amenities: ['Wifi', 'Breakfast', 'Laundry', 'Lounge', 'Outdoor Terrace'],
    reviews: [
      { username: 'vancouverfan', review: 'Awesome location near Stanley Park.', rating: 4.9 },
      { username: 'canadiantraveller', review: 'Great staff and well-kept facilities.', rating: 4.7 },
      { username: 'naturelover', review: 'Perfect for exploring the outdoors in Vancouver.', rating: 4.8 }
    ],
    nearby: [
      { place: 'Stanley Park', distance: 1.0 },
      { place: 'Granville Island', distance: 1.2 },
      { place: 'Vancouver Aquarium', distance: 1.5 }
    ]
  }
]

  ;