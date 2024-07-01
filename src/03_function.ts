// Function & any
function render(document: any) {
  console.log(document);
}
render(3);

function calculateTax(income: number, taxYear = 2024): number {
  if (taxYear < 2024) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000);
