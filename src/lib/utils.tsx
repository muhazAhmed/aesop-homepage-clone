export function newSessionStorage<T>(key: string, value: T): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export const deleteSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export const fetchSessionStorage = (key: string) => {
  const items = sessionStorage.getItem(key);
  return items ? JSON.parse(items) : null;
};

export const fetchIfCookieShowed = ({
  setCookieModal,
}: {
  setCookieModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cookie = fetchSessionStorage("ABTastySessionHitHistory");
  if (cookie === "dismissed") {
    setCookieModal(false);
  } else {
    newSessionStorage("ABTastySessionHitHistory", "shown");
    setCookieModal(true);
  }
};

export const handleDismiss = ({
  setCookieModal,
}: {
  setCookieModal: React.Dispatch<React.SetStateAction<boolean>>;
}): void => {
  setCookieModal(false);
  newSessionStorage("ABTastySessionHitHistory", "dismissed");
};
