export const isNavActive = (pathname: string, to: string) => {
  if (pathname === '/' && to === '/meetings') return true;

  const lastSlashIndex = pathname.slice(1).lastIndexOf('/');

  if (lastSlashIndex !== -1) {
    return pathname.substring(0, lastSlashIndex + 1) === to;
  }

  return pathname === to;
};