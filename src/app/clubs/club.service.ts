import { Injectable } from '@angular/core'
import { IClub } from './club';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClubService {

 

getClubs(): IClub[] {
    return [
     
   {
    clubId: 1,
    clubName: 'The Club',
    clubAddress: 'Squashgatan 10',
    clubCourts: 7,
    clubOpen: 'From 10:00 a.m. To 10.00 p.m.',
    imageUrl: './assets/images/squash.jpg', 
    /*courts: [
      { id: 1,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 2,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 3,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 4,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 5,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 6,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 7,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      }
     
        ]*/
  },
   {
    clubId: 2,
    clubName: 'Bellevue',
    clubAddress: 'Stadionalle 3',
    clubCourts: 8,
    clubOpen: 'From 10:00 a.m. To 10.00 p.m.',
    imageUrl: './assets/images/squash1.jpeg', 
   /* courts: [
    { id: 1,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 2,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 3,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 4,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 5,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 6,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 7,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 8,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    }
      ]*/
    },
   {
    clubId: 3,
    clubName: 'Squash Malmö',
    clubAddress: 'Carl Gustafs väg 7',
    clubCourts: 6,
    clubOpen: 'From 10:00 a.m. To 10.00 p.m.',
    imageUrl: './assets/images/squash2.jpg',
   /* courts: [
      { id: 1,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 2,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 3,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 4,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 5,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 6,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      }
    
        ]*/
    },
    {
        clubId: 4,
        clubName: 'Sport Club Oasen',
        clubAddress: 'Midesvägen 3',
        clubCourts: 6,
        clubOpen: 'From 10:00 a.m. To 10.00 p.m.',
        imageUrl: './assets/images/squash3.jpg',
    }
    ]

}

}


