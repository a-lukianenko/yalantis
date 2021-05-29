export const formatDate = (d: string | Date) => {
  return new Date(d).toLocaleDateString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
