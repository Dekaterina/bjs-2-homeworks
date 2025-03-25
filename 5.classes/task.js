class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this._state * 1.5;
    }
  
    get state() {
      return this._state;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "detective";
    }
  }



  

  class Book {
    constructor(name, releaseDate, pagesCount, author) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.author = author;
      this.state = 100;
    }
  
    fix() {
      this.state = 100;
    }
  }
  
  class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "fantastic";
    }
  }
  
  class Magazine extends Book {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
      this.author = null;
    }
  }
  
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find(book => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
      if (index !== -1) {
        return this.books.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  // Tests
  const library = new Library("Библиотека имени Ленина");
  
  const book1 = new NovelBook("Отцы и дети", 1862, 288, "Иван Тургенев");
  const book2 = new FantasticBook("Человек амфибия", 1928, 256, "Александр Беляев");
  const book3 = new DetectiveBook("Десять негритят", 1939, 256, "Агата Кристи");
  const magazine1 = new Magazine("Природа", 1919, 37);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  library.addBook(magazine1);
  
  // Ищем книгу 1919 года издания
  console.log("Поиск издания 1919 года:", library.findBookBy("releaseDate", 1919));
  
  // Выдаем книгу
  const givenBook = library.giveBookByName("1862");
  console.log("Выданная книга:", givenBook);
  
  // Повреждаем книгу
  givenBook.state = 25;
  console.log("Состояние после повреждения:", givenBook.state);
  
  // Восстонавливаем книгу
  givenBook.fix();
  console.log("Состояние после восстановления:", givenBook.state);
  
  // Добавляем восстановленную книгу в библиотеку
  library.addBook(givenBook);
  console.log("Количество книг в библиотеке:", library.books.length); 