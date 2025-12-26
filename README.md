# What are some differences between interfaces and types in TypeScript?

| Feature                     | `interface`                                      | `type`                                   |
| --------------------------- | ------------------------------------------------ | ---------------------------------------- |
| **Declaration Merging**     | ✅ Supported (same interface name can be merged) | ❌ Not supported                         |
| **Extending**               | Uses `extends` keyword                           | Uses intersection (`&`)                  |
| **Use with Primitives**     | ❌ Cannot define primitives                      | ✅ Can define primitives, unions, tuples |
| **Object Shape Focus**      | Best for object/class structure                  | More flexible for complex types          |
| **Implementation by Class** | ✅ Can be implemented by classes                 | ❌ Cannot be implemented directly        |

# What is the use of the keyof keyword in TypeScript? Provide an example.

# Explain the difference between any, unknown, and never types in TypeScript.

# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

# Provide an example of using union and intersection types in TypeScript.
