export const isSessionExpired = (expirationDate) => {
    const now = new Date();
    const expireDate = new Date(expirationDate);
    return now > expireDate;
  };