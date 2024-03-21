import { API_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const response: Response = await fetch(`${API_URL}/products`);
  const products = await response.json();
  return { products };
}) satisfies PageServerLoad;
