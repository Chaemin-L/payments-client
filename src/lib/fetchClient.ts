const fetchClient = async (url: string, options: RequestInit = {}) => {
  const mergedOptions: RequestInit = {
    ...options,
    headers: {
      ...(options.headers || {}),
    },
  };

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${BASE_URL}/v1/pay${url}`, mergedOptions);

  if (response.redirected) {
    window.location.href = response.url;
    return;
  }

  // 통신 에러
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  } else {
    const data = await response;
    return data.json();
  }
};

export default fetchClient;
