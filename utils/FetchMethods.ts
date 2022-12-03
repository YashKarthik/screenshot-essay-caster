import { CastsResponse } from './interfaces';

export async function getAllEssays(): Promise<CastsResponse> {
  const query = 'https://searchcaster.xyz/api/search?regex=screenshotessay|screenshot essay'
  const res = await fetch(query, { next: { revalidate: 1800 }});
  return res.json();
}

export async function getEssayThread(merkleRoot: string): Promise<CastsResponse> {
  const res = await fetch(`https://searchcaster.xyz/api/search?merkleRoot=${merkleRoot}`, { next: { revalidate: 1800 }});
  return res.json();
}
