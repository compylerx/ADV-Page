import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { scheduleSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = scheduleSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Dados inválidos.", issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const supabase = getSupabaseClient();
    const { error } = await supabase.from("agendamentos").insert({
      ...parsed.data,
      status: "novo",
    });

    if (error) {
      return NextResponse.json(
        { message: "Erro ao salvar agendamento.", details: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Agendamento salvo com sucesso." }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
