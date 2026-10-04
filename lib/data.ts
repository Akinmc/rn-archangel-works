import { promises as fs } from 'fs';
import path from 'path';

export type Service = {
  id: string;
  code: string;
  category: string;
  title: string;
  priceLabel: string;
  description: string;
  notes: string;
};

export type QuoteRequest = {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  details: string;
  createdAt: string;
};

const serviceFile = path.join(process.cwd(), 'data/services.json');
const quoteFile = path.join(process.cwd(), 'data/quote-requests.json');

export async function getServices() {
  const file = await fs.readFile(serviceFile, 'utf8');
  return JSON.parse(file) as Service[];
}

export async function saveServices(services: Service[]) {
  await fs.writeFile(serviceFile, JSON.stringify(services, null, 2), 'utf8');
}

export async function getQuoteRequests() {
  const file = await fs.readFile(quoteFile, 'utf8');
  return JSON.parse(file) as QuoteRequest[];
}

export async function saveQuoteRequests(requests: QuoteRequest[]) {
  await fs.writeFile(quoteFile, JSON.stringify(requests, null, 2), 'utf8');
}
