export const newSessionStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const deleteSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export const useSessionStorage = (key: string) => {
  const items = sessionStorage.getItem(key);
  return items ? JSON.parse(items) : null;
};

export const fetchIfCookieShowed = ({
  setCookieModal,
}: {
  setCookieModal: any;
}) => {
  const cookie = useSessionStorage("ABTastySessionHitHistory");
  if (cookie === "dismissed") {
    setCookieModal(false);
  } else {
    newSessionStorage("ABTastySessionHitHistory", "shown");
    setCookieModal(true);
  }
};

export const handleDismiss = ({ setCookieModal }: { setCookieModal: any }) => {
  setCookieModal(false);
  newSessionStorage("ABTastySessionHitHistory", "dismissed");
};
