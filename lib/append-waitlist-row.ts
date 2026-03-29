import { google } from "googleapis"

export type WaitlistRole = "driver" | "mechanic"

function parseServiceAccountCredentials(): Record<string, unknown> {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim()
  if (b64) {
    try {
      const json = Buffer.from(b64, "base64").toString("utf8")
      return JSON.parse(json) as Record<string, unknown>
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.error(
          "[waitlist] GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 decode/parse failed:",
          e instanceof Error ? e.message : e,
        )
      }
      throw new Error("INVALID_CREDENTIALS")
    }
  }

  let raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim()
  if (!raw) {
    throw new Error("INVALID_CREDENTIALS")
  }

  raw = raw.replace(/^\uFEFF/, "")

  // If the whole value was wrapped in matching quotes (common in .env)
  if (
    (raw.startsWith("'") && raw.endsWith("'")) ||
    (raw.startsWith('"') && raw.endsWith('"'))
  ) {
    raw = raw.slice(1, -1)
  }

  try {
    return JSON.parse(raw) as Record<string, unknown>
  } catch (e) {
    if (process.env.NODE_ENV === "development" && e instanceof SyntaxError) {
      console.error("[waitlist] GOOGLE_SERVICE_ACCOUNT_JSON parse failed:", e.message)
      console.error(
        "[waitlist] Tip: use GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 (base64 of the whole .json file), or put raw JSON on ONE line in .env.local with single quotes around it: GOOGLE_SERVICE_ACCOUNT_JSON='{...}'",
      )
    }
    throw new Error("INVALID_CREDENTIALS")
  }
}

export async function appendWaitlistRow(params: {
  email: string
  role: WaitlistRole
  phone?: string
  services?: string
}): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim()
  const range = process.env.GOOGLE_SHEETS_RANGE?.trim()

  const hasCreds =
    Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim()) ||
    Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim())

  if (!hasCreds || !spreadsheetId || !range) {
    throw new Error("MISSING_CONFIG")
  }

  const credentials = parseServiceAccountCredentials()

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  const sheets = google.sheets({ version: "v4", auth })
  const row = [
    new Date().toISOString(),
    params.email,
    params.role,
    params.phone ?? "",
    params.services ?? "",
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  })
}
