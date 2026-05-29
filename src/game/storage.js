import { DEFAULT_SAVE, STORAGE_KEY } from "./config.js";

const LEADERBOARD_KEY = `${STORAGE_KEY}-leaderboard`;
const MAX_LEADERBOARD_ENTRIES = 100;

function deepMerge(base, source) {
  const output = structuredClone(base);

  for (const key of Object.keys(source || {})) {
    const sourceValue = source[key];
    const baseValue = output[key];
    if (sourceValue && typeof sourceValue === "object" && !Array.isArray(sourceValue)) {
      output[key] = deepMerge(baseValue ?? {}, sourceValue);
    } else if (sourceValue !== undefined) {
      output[key] = sourceValue;
    }
  }

  return output;
}

export function loadSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_SAVE);
    const parsed = JSON.parse(raw);
    return deepMerge(DEFAULT_SAVE, parsed);
  } catch (error) {
    console.warn("Failed to load save data, restoring defaults.", error);
    return structuredClone(DEFAULT_SAVE);
  }
}

export function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetTuning(saveData) {
  const next = structuredClone(saveData);
  next.tuning = structuredClone(DEFAULT_SAVE.tuning);
  return next;
}

function normalizeLeaderboardEntry(entry) {
  return {
    id: String(entry.id ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`),
    nickname: String(entry.nickname ?? "Driver").trim().slice(0, 18) || "Driver",
    modeId: String(entry.modeId ?? "endless"),
    modeName: String(entry.modeName ?? "Endless Traffic"),
    score: Math.max(0, Math.round(Number(entry.score) || 0)),
    distanceKm: Math.max(0, Number(entry.distanceKm) || 0),
    topSpeed: Math.max(0, Math.round(Number(entry.topSpeed) || 0)),
    nearMisses: Math.max(0, Math.round(Number(entry.nearMisses) || 0)),
    bestCombo: Math.max(1, Number(entry.bestCombo) || 1),
    createdAt: String(entry.createdAt ?? new Date().toISOString())
  };
}

export function loadLeaderboard() {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(normalizeLeaderboardEntry)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_LEADERBOARD_ENTRIES);
  } catch (error) {
    console.warn("Failed to load leaderboard data.", error);
    return [];
  }
}

export function saveLeaderboard(entries) {
  const normalized = entries
    .map(normalizeLeaderboardEntry)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_LEADERBOARD_ENTRIES);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(normalized));
  return normalized;
}

export function addLeaderboardEntry(entry) {
  const id =
    globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const nextEntry = normalizeLeaderboardEntry({ ...entry, id });
  const entries = saveLeaderboard([...loadLeaderboard(), nextEntry]);
  return {
    entries,
    rank: entries.findIndex((item) => item.id === id) + 1
  };
}
