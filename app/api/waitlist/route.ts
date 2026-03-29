import { NextResponse } from "next/server"
import { z } from "zod"
import { appendWaitlistRow } from "@/lib/append-waitlist-row"

const waitlistSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  role: z.enum(["driver", "mechanic"]),
  phone: z
    .string()
    .max(40, "Phone is too long.")
    .optional()
    .transform((s) => (s?.trim() ? s.trim() : undefined)),
  services: z
    .string()
    .max(2000, "Description is too long.")
    .optional()
    .transform((s) => (s?.trim() ? s.trim() : undefined)),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const parsed = waitlistSchema.safeParse(body)
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Invalid data."
    return NextResponse.json({ error: msg }, { status: 400 })
  }

  const { email, role, phone, services } = parsed.data
  const servicesForSheet = role === "mechanic" ? services ?? "" : ""

  try {
    await appendWaitlistRow({
      email,
      role,
      phone,
      services: servicesForSheet || undefined,
    })
  } catch (err) {
    const code = err instanceof Error ? err.message : ""
    if (code === "MISSING_CONFIG") {
      return NextResponse.json(
        { error: "Waitlist is not configured yet." },
        { status: 503 },
      )
    }
    if (code === "INVALID_CREDENTIALS") {
      console.error("[waitlist] Invalid GOOGLE_SERVICE_ACCOUNT_JSON")
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
    }
    console.error("[waitlist] Google Sheets error:", err)
    return NextResponse.json(
      { error: "Could not save your signup. Try again in a moment." },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
