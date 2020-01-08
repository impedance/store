
export default class BookstoreService {

  getBooks() {
    return [
      { id: 1, 
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 32,
        coverImage: "https://www.ida.liu.se/~TDDB84/pictures/HeadFirstDesignPatterns.jpg"
      },
      { id: 2, 
        title: 'Release it!',
        author: 'Michael T. Nygard',
        price: 45,
        coverImage: "https://www.safaribooksonline.com/library/cover/9781491969540/360h/"
      },
    ];
  }
}