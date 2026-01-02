export interface PadelClub {
  name: string;
  courts: number;
  price: string;
  google_maps: string;
  type?: 'INDOOR' | 'OUTDOOR';
  featured?: string;
  city?: string;
  coachHere?: boolean;
}

export interface LocationGroup {
  location: string;
  clubs: PadelClub[];
}

export interface PadelClubsData {
  padel_clubs: {
    las_palmas_city: LocationGroup;
    telde_area: LocationGroup;
    south_tourist_areas: LocationGroup;
    arucas: LocationGroup;
  };
}

export const padelClubsData: PadelClubsData = {
  "padel_clubs": {
    "las_palmas_city": {
      "location": "Las Palmas City",
      "clubs": [
        {
          "name": "Dreamfit Las Palmas",
          "courts": 3,
          "price": "€15.60",
          "google_maps": "https://www.google.com/maps/search/Dreamfit+Las+Palmas+Gran+Canaria",
          "coachHere": true
        },
        {
          "name": "El Drago Padel Club",
          "courts": 11,
          "price": "€16.64",
          "google_maps": "https://www.google.com/maps/search/El+Drago+Padel+Club+Las+Palmas+Gran+Canaria"
        },
        {
          "name": "MF Padel 7 Palmas",
          "courts": 6,
          "price": "€18.05",
          "google_maps": "https://www.google.com/maps/search/MF+Padel+7+Palmas+Las+Palmas+Gran+Canaria"
        },
        {
          "name": "Centro Deportivo La Galera",
          "courts": 13,
          "price": "€21.00-€24.00",
          "google_maps": "https://www.google.com/maps/search/Centro+Deportivo+La+Galera+Las+Palmas+Gran+Canaria"
        },
        {
          "name": "La Azotea Padel Center",
          "courts": 7,
          "price": "€21.00-€24.00",
          "google_maps": "https://www.google.com/maps/search/La+Azotea+Padel+Center+Las+Palmas+Gran+Canaria"
        },
        {
          "name": "Gran Canaria Tennis & Padel Center",
          "courts": 14,
          "price": "€18.72-€21.00",
          "google_maps": "https://www.google.com/maps/search/Gran+Canaria+Tennis+Padel+Center+Las+Palmas+Gran+Canaria"
        },
        {
          "name": "Club Tamarasit",
          "courts": 8,
          "price": "€17.16",
          "google_maps": "https://www.google.com/maps/search/Club+Tamarasit+Las+Palmas+Gran+Canaria",
          "coachHere": true
        },
        {
          "name": "Codema Claret",
          "courts": 2,
          "price": "€18.00-€21.00",
          "google_maps": "https://www.google.com/maps/search/Codema+Claret+Las+Palmas+Gran+Canaria"
        }
      ]
    },
    "telde_area": {
      "location": "Telde Area",
      "clubs": [
        {
          "name": "Gran Canaria Padel Indoor",
          "courts": 8,
          "type": "INDOOR",
          "price": "€5.25-€6.00",
          "google_maps": "https://www.google.com/maps/search/Gran+Canaria+Padel+Indoor+Telde+Gran+Canaria"
        },
        {
          "name": "SB Padel Center La Pardilla",
          "courts": 5,
          "price": "€20.81",
          "google_maps": "https://www.google.com/maps/search/SB+Padel+Center+La+Pardilla+Telde+Gran+Canaria"
        }
      ]
    },
    "south_tourist_areas": {
      "location": "South (Tourist Areas)",
      "clubs": [
        {
          "name": "Las Grutas Padel",
          "city": "Santa Brígida",
          "courts": 6,
          "price": "€21.00-€24.00",
          "google_maps": "https://www.google.com/maps/search/Las+Grutas+Padel+Santa+Brigida+Gran+Canaria"
        },
        {
          "name": "Padel Hotel Gloria Palace",
          "city": "San Agustín",
          "courts": 5,
          "price": "€27.00-€33.00",
          "google_maps": "https://www.google.com/maps/search/Padel+Hotel+Gloria+Palace+San+Agustin+Gran+Canaria"
        },
        {
          "name": "Club de Padel Bida",
          "city": "Maspalomas",
          "courts": 5,
          "price": "€24.00-€30.00",
          "google_maps": "https://www.google.com/maps/search/Club+de+Padel+Bida+Maspalomas+Gran+Canaria"
        }
      ]
    },
    "arucas": {
      "location": "Arucas",
      "clubs": [
        {
          "name": "Magic Padel Indoor Arucas",
          "courts": 2,
          "type": "INDOOR",
          "price": "€22.50-€27.00",
          "google_maps": "https://www.google.com/maps/search/Magic+Padel+Indoor+Arucas+Gran+Canaria"
        }
      ]
    }
  }
};

