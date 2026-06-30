import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Dados inválidos.", issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const supabase = getSupabaseClient();
    const { error } = await supabase.from("leads").insert(parsed.data);

    if (error) {
      return NextResponse.json(
        { message: "Erro ao salvar lead.", details: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Lead salvo com sucesso." }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
