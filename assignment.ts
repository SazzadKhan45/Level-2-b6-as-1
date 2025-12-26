// ## Problem-1
function formatValue(value: string | number | boolean) {
  //
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  //
  if (typeof value === "number") {
    return value * 10;
  }
  //
  if (typeof value === "boolean") {
    return value ? "false" : "true";
  }
}

// ## Problem-2
function getLength(value: string | any[]) {
  // Check string value
  if (typeof value === "string") {
    return value.length;
  }
  // Check the arry
  if (Array.isArray(value)) {
    return value.length;
  }
}

// ## Problem-3
class Person {
  name: string;
  age: number;

  // constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // Method
  getDetails(): string {
    return `Name: ${this.name} , Age: ${this.age}`;
  }
}

// ## Problem-4
// Type define
type Item = {
  title: string;
  rating: number;
};
// filter function
function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

// ## Problem-5
// type define
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

// Find active User function
function filterActiveUsers(users: User[]): User[] {
  const activeUser = users.filter((user) => user.isActive === true);
  return activeUser;
}

// ## Problem-6
// type define by interface
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

// printBookDetails function
function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  //
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

// ## Problem-7
function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];

  // Add values from first array
  for (let i = 0; i < arr1.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (arr1[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = arr1[i];
    }
  }

  // Add values from second array
  for (let i = 0; i < arr2.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (arr2[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}

// ######### Problem-8
// type define
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // 0–100
};

//
function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const total = products
    .map((product) => {
      const basePrice = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = (basePrice * product.discount) / 100;
        return basePrice - discountAmount;
      }

      return basePrice;
    })
    .reduce((sum, current) => sum + current, 0);

  return total;
}
