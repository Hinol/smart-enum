export abstract class SmartEnum<TValue> {
    private static readonly registry = new WeakMap<
      Function,
      SmartEnum<any>[]
    >();
  
    readonly name: string;
    readonly value: TValue;
  
    protected constructor(name: string, value: TValue) {
      this.name = name;
      this.value = value;
  
      const ctor = this.constructor as Function;
      let list = SmartEnum.registry.get(ctor);
      if (!list) {
        list = [];
        SmartEnum.registry.set(ctor, list);
      }
  

      if (list.some(e => e.name === name)) {
        throw new Error(
          `Duplicate enum name '${name}' in ${ctor.name}`
        );
      }
  
   
      if (list.some(e => e.value === value)) {
        throw new Error(
          `Duplicate enum value '${value}' in ${ctor.name}`
        );
      }
  
      list.push(this);
    }
  
    static values<T extends SmartEnum<any>>(this: Function): T[] {
      return (SmartEnum.registry.get(this) ?? []) as T[];
    }
  
    static fromValue<T extends SmartEnum<any>>(this: Function, value: any): T | undefined {
      const values = SmartEnum.registry.get(this) ?? [];
      return values.find(e => e.value === value) as T | undefined;
    }
  
    static fromName<T extends SmartEnum<any>>(this: Function, name: string): T | undefined {
      const values = SmartEnum.registry.get(this) ?? [];
      return values.find(e => e.name === name) as T | undefined;
    }

    static tryFromValue(value : any) {
        return this.fromValue(value) ?? undefined;
      }
      
    static [Symbol.iterator]() {
        return this.values()[Symbol.iterator]();
    }
      
    static hasValue(value : any) {
        return !!this.fromValue(value);
      }
      
      static hasName(name : any) {
        return !!this.fromName(name);
      }
      
    toString(): string {
      return this.name;
    }
  }
  