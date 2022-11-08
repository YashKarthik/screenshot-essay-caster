import { CastsResponse } from './interfaces';

export async function getAllEssays(username?: string): Promise<CastsResponse> {
  const query = 'https://searchcaster.xyz/api/search?text=screenshotessay&'
  if (username) {
    const res = await fetch(query + `username=${username}`, { next: { revalidate: 1800 }});
    return res.json();
  }
  const res = await fetch(query, { next: { revalidate: 1800 }});
  return res.json();
}

export async function getEssayThread(merkleRoot: string): Promise<CastsResponse> {
  const res = await fetch(`https://searchcaster.xyz/api/search?merkleRoot=${merkleRoot}`, { next: { revalidate: 1800 }});
  return res.json();
}
