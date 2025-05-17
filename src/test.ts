import { SmartEnum } from './enumBuilder';

class Status extends SmartEnum<string> {
  static readonly Active = new Status('Active', 'active');
  static readonly Inactive = new Status('Inactive', 'inactive');

  protected constructor(name: string, value: string) {
    super(name, value);
  }
}

console.log(Status.values()); // [Status.Active, Status.Inactive]

console.log(Status.fromValue('active'));    // Status { name: 'Active', value: 'active' }
console.log(Status.tryFromValue('active')); // to samo, instancja Active
console.log(Status.tryFromValue('missing')); // undefined

console.log(Status.hasValue('active'));   // true
console.log(Status.hasValue('missing'));  // false

console.log(Status.hasName('Active'));    // true
console.log(Status.hasName('Missing'));   // false

for (const status of Status) {
  console.log(status.name, status.value);
}
