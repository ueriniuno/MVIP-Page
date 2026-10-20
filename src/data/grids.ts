// Video grids shown on the page. Examples are selected by their label or edit instruction
// (from results.ts); a typo fails the build instead of silently dropping a row.
import {
  FEATURED_EDITS,
  FEATURED_RECONSTRUCTIONS,
  MVIP_CORE_RECONSTRUCTIONS,
  MVIP_EXTRA_EDITS,
  MVIP_EXTRA_RECONSTRUCTIONS,
} from "./results";
import { PROMPTS } from "./prompts";

export type GridColumn = {
  label: string;
  ours?: boolean;
  /** BibTeX key, shown as a numbered reference next to the label. */
  cite?: string;
};
export type GridRow = {
  /** Longer text shown above the row, e.g. the edit instruction. */
  caption?: string;
  /** One video path per column, relative to the site base URL. */
  videos: string[];
  /** One prompt per column (null = nothing to show), revealed by the row's toggle. */
  prompts?: (string | null)[];
};
export type VideoGridData = { columns: GridColumn[]; rows: GridRow[] };

function pick<T>(items: T[], matches: (item: T) => boolean, text: string): T {
  const hit = items.find(matches);
  if (!hit) throw new Error(`grids.ts: no example matches "${text}"`);
  return hit;
}

// --- Reconstruction: Reference | MVIP | FLF-only | PEZ | Captioning ----------------------------

type ReconstructionExample = {
  label: string;
  folder: string;
  suffix?: string;
  dataset?: string;
};

const ALL_RECONSTRUCTIONS: ReconstructionExample[] = [
  ...Object.values(FEATURED_RECONSTRUCTIONS),
  ...Object.values(MVIP_CORE_RECONSTRUCTIONS),
  ...Object.values(MVIP_EXTRA_RECONSTRUCTIONS),
];

/** Prompts aligned with the reconstruction columns: Reference | MVIP | FLF-only | PEZ | Captioning. */
function reconstructionPrompts(folder: string): (string | null)[] | undefined {
  const p = PROMPTS[folder];
  if (!p) return undefined;
  return ["Not applicable", p.mvip, "Empty prompt", p.pez, p.captioning];
}

function reconstructionRow(label: string): GridRow {
  const item = pick(ALL_RECONSTRUCTIONS, (it) => it.label === label, label);
  const suffix = item.suffix ?? "";
  return {
    videos: ["reference", "mvip", "flf_only", "pez", "captioning"].map(
      (name) => `assets/reconstruction/${item.folder}/${name}${suffix}.mp4`,
    ),
    prompts: reconstructionPrompts(item.folder),
  };
}

export const reconstructionGrid: VideoGridData = {
  columns: [
    { label: "Reference" },
    { label: "MVIP", ours: true },
    { label: "FLF-only" },
    { label: "PEZ", cite: "wen2023hard" },
    { label: "Captioning", cite: "bai2025qwen25vl" },
  ],
  rows: ["Horse jump", "Roundabout", "Interview", "Mist creature"].map(
    reconstructionRow,
  ),
};

// --- Editing: Source | MVIP | RF-Edit | Wan-Edit, instruction as the row caption --------------

type EditExample = { folder: string; instruction: string };

const ALL_EDITS: EditExample[] = [
  ...Object.values(FEATURED_EDITS),
  ...Object.values(MVIP_EXTRA_EDITS),
];

function editingRow(instruction: string): GridRow {
  const item = pick(
    ALL_EDITS,
    (it) => it.instruction === instruction,
    instruction,
  );
  return {
    caption: item.instruction,
    videos: [
      "source",
      "edited_mvip",
      "comparison_rf_edit",
      "comparison_flowedit",
    ].map((name) => `assets/editing/${item.folder}/${name}.mp4`),
  };
}

export const editingGrid: VideoGridData = {
  columns: [
    { label: "Source" },
    { label: "MVIP", ours: true },
    { label: "RF-Edit", cite: "wang2025taming" },
    { label: "Wan-Edit", cite: "li2025five" },
  ],
  rows: [
    "Make the man and the boy suddenly fall asleep.",
    "Make the soldier turn around on the ship.",
    "Make the man in the black shirt start doing push-ups.",
    "Let the swing stop.",
    "Show the drone taking off vertically from the landing pad.",
  ].map(editingRow),
};
