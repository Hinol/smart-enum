
# smart-enum

A lightweight TypeScript library for creating **smart enums** — enhanced enumerations with custom names, values, and utility methods like `fromValue()`, `fromName()`, and duplicate checking.

---

## Features

- Strongly typed enum classes with arbitrary values
- Automatic prevention of duplicate names and values
- Retrieve enum instances by name or value
- Iterable enum collections
- Works with both ES Modules and CommonJS

---

## Installation

```bash
npm install @h1n0l/smart-enum
````

---

## Usage

```ts
import { SmartEnum } from '@h1n0l/smart-enum';

class Status extends SmartEnum<string> {
  static readonly Active = new Status('Active', 'active');
  static readonly Inactive = new Status('Inactive', 'inactive');

  protected constructor(name: string, value: string) {
    super(name, value);
  }
}

console.log(Status.values());
// [
//   Status { name: 'Active', value: 'active' },
//   Status { name: 'Inactive', value: 'inactive' }
// ]

console.log(Status.fromValue('active'));   // Status { name: 'Active', value: 'active' }
console.log(Status.fromName('Inactive'));  // Status { name: 'Inactive', value: 'inactive' }
console.log(Status.fromValue('missing'));  // undefined

console.log(Status.hasValue('active'));    // true
console.log(Status.hasName('Missing'));    // false
```

---

## API

### `SmartEnum<TValue>`

Abstract base class. Extend this to define your smart enum types.

#### Static methods:

* `values()` — returns an array of all enum instances
* `fromValue(value: TValue)` — returns enum instance matching the value, or `undefined`
* `fromName(name: string)` — returns enum instance matching the name, or `undefined`
* `hasValue(value: TValue)` — boolean check if value exists
* `hasName(name: string)` — boolean check if name exists

#### Instance properties:

* `name` — enum item name (string)
* `value` — enum item value (`TValue`)

---



## Any questions?
dm me on discord: h1n0l

