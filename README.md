# What are some differences between interfaces and types in TypeScript?

| Feature                     | `interface`                                      | `type`                                   |
| --------------------------- | ------------------------------------------------ | ---------------------------------------- |
| **Declaration Merging**     | ✅ Supported (same interface name can be merged) | ❌ Not supported                         |
| **Extending**               | Uses `extends` keyword                           | Uses intersection (`&`)                  |
| **Use with Primitives**     | ❌ Cannot define primitives                      | ✅ Can define primitives, unions, tuples |
| **Object Shape Focus**      | Best for object/class structure                  | More flexible for complex types          |
| **Implementation by Class** | ✅ Can be implemented by classes                 | ❌ Cannot be implemented directly        |

# What is the use of the keyof keyword in TypeScript? Provide an example.

    # The keyof keyword in TypeScript is used to obtain a union type of the keys of an object type. It’s very useful for creating type-safe code that works with object properties. Essentially, it allows you to reference the keys of an interface or type as types themselves.

# Example

interface Person {
name: string;
age: number;
email: string;
}

type PersonKeys = keyof Person;
let key: PersonKeys;
key = "name";
key = "age";
key = "email";

# Explain the difference between any, unknown, and never types in TypeScript.

    # Answer:

    Type >>>> Can Assign Anything? >>>> Can Assign to Other Types? >>>> Use Case


    `any` >>>>  Yes >>>>  Yes (unsafe) >>>> Disable type checking
    `unknown` >>>>  Yes >>>>  No (without checks) >>>> Safe unknown values
    `never`  >>>> No >>>>  No >>>> Impossible values, functions that never return

# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

    # Answer :
    In TypeScript, enum is used to define a set of named constants. Enums make my code more readable and maintainable by giving meaningful names to values instead of using raw numbers or strings.

    Example :

enum Role {
Admin = "ADMIN",
User = "USER",
Guest = "GUEST"
}

let userRole: Role = Role.Admin;
console.log(userRole);

# Provide an example of using union and intersection types in TypeScript.

    # Answer :

## Union Types (|)

    A union type allows a variable, parameter, or property to hold more than one type. You define a union type using the pipe (|) symbol.

function printId(id: string | number) {
if (typeof id === "string") {
console.log(`ID (string): ${id.toUpperCase()}`);
} else {
console.log(`ID (number): ${id}`);
}
}

printId("abc");
printId(101);

# Intersection Types (&)

    An intersection type is a type that combines multiple types into one.
    It is defined using the ampersand (&) symbol.

    A value of an intersection type must satisfy all the types combined — it will have all properties and methods from each type.

interface Person {
name: string;
age: number;
}

interface Employee {
employeeId: number;
role: string;
}

// Intersection type
type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
name: "Alice",
age: 30,
employeeId: 101,
role: "Developer",
};
