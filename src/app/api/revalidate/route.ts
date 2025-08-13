import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.SANITY_WEBHOOK_SECRET || "YOUR_SECRET_KEY";
    const token = new URL(request.url).searchParams.get("secret");

    console.log("Revalidation request received with token:", token);
    console.log("Using secret:", secret);

    if (!secret || secret !== token) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await request.json();
    const { _type } = body;

    let tag: string | null = null;

    switch (_type) {
      case "post":
        tag = "posts";
        break;
      default:
        return NextResponse.json(
          { message: `Unknown document type: ${_type}` },
          { status: 400 }
        );
    }

    revalidateTag(tag);

    console.log(`✅ Revalidated cache for: ${tag}`);

    return NextResponse.json({
      revalidated: true,
      tag,
      now: Date.now(),
    });
  } catch (error) {
    console.error("❌ Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
