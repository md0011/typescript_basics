// Objects & Type Aliases (custom 'type', can reused)

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mayur Dev",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee);
