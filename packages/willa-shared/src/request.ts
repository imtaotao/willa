const pendingJsonRequests = new Map<string, Promise<unknown>>();

export type RequestJsonOptions = RequestInit & {
  dedupeKey?: string;
  createError?: (response: Response) => Error | Promise<Error>;
};

export function isAbortError(error: unknown) {
  return (
    error !== null &&
    typeof error === "object" &&
    "name" in error &&
    error.name === "AbortError"
  );
}

export async function requestJson<T = unknown>(
  input: RequestInfo | URL,
  options: RequestJsonOptions = {},
) {
  const { createError, dedupeKey, ...requestInit } = options;
  const cachedRequest = dedupeKey ? pendingJsonRequests.get(dedupeKey) : null;

  if (cachedRequest) {
    return cachedRequest as Promise<T>;
  }

  const request = fetch(input, requestInit).then(async (response) => {
    if (!response.ok) {
      throw createError
        ? await createError(response)
        : new Error(`Request failed with status ${response.status}.`);
    }
    return response.json() as Promise<T>;
  });

  if (dedupeKey) {
    pendingJsonRequests.set(dedupeKey, request);
    request.then(
      () => pendingJsonRequests.delete(dedupeKey),
      () => pendingJsonRequests.delete(dedupeKey),
    );
  }

  return request;
}
