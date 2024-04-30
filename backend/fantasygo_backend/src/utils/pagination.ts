export function paginate(items: any[], page: number, limit: number): any[] {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return items.slice(startIndex, endIndex);
}
