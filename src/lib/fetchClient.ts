const fetchClient = async (url: string, options: RequestInit = {}) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const mergedOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  const response = await fetch(url, mergedOptions);
  // 통신 에러
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  } else {
    const data = await response.json();
    return data;
  }
};

export default fetchClient;
