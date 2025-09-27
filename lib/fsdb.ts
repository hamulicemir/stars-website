import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

export function readCollection<T>(name: string): T[] {
  ensureDir(DATA_DIR);
  const file = path.join(DATA_DIR, `${name}.json`);
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, "utf-8");
  try { return JSON.parse(raw) as T[]; } catch { return []; }
}

export function writeCollection<T>(name: string, items: T[]) {
  ensureDir(DATA_DIR);
  const file = path.join(DATA_DIR, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify(items, null, 2), "utf-8");
}

/** Speichert ein <input type="file"> in /public/uploads und gibt die Web-URL zurück. */
export async function saveUpload(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  ensureDir(UPLOAD_DIR);
  const ext = (file.name.split(".").pop() || "bin").toLowerCase();
  const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const filePath = path.join(UPLOAD_DIR, name);
  fs.writeFileSync(filePath, buffer);
  return `/uploads/${name}`;
}

export function uid(prefix = "") {
  return `${prefix}${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
