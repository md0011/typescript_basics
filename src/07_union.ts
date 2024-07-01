// Union (OR)

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  return parseInt(weight);
}

kgToLbs(10);
kgToLbs("20kg");
