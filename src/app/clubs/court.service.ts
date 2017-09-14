import { Injectable } from '@angular/core'
import { ICourt } from './court';

@Injectable()
export class CourtService {
  
getCourts(): ICourt[] {
    return [
    
      { courtId: 1,
        courtAvailable: [10.00, 11.00, 16.00, 17.00],
        courtBooked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { courtId: 2,
        courtAvailable: [10.00, 11.00, 16.00, 17.00],
        courtBooked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { courtId: 3,
        courtAvailable: [10.00, 11.00, 16.00, 17.00],
        courtBooked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { courtId: 4,
        courtAvailable: [10.00, 11.00, 16.00, 17.00],
        courtBooked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { courtId: 5,
        courtAvailable: [10.00, 11.00, 16.00, 17.00],
        courtBooked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { courtId: 6,
        courtAvailable: [10.00, 11.00, 16.00, 17.00],
        courtBooked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { courtId: 7,
        courtAvailable: [10.00, 11.00, 16.00, 17.00],
        courtBooked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      }
     
        ]
  

}
}



