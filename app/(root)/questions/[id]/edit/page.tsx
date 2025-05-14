import { notFound, redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";
import QuestionForm from "@/components/forms/QuestionForm";
import ROUTES from "@/constants/routes";
import { getQuestion } from "@/lib/actions/question.action";

export default async function EditQuestionPage({ params }: RouteParams) {
  const { id } = await params;
  if (!id) return notFound();

  const session = await auth();
  if (!session) redirect("/sign-in");

  const { data: question, success } = await getQuestion({ questionId: id });
  if (!success) return notFound();

  //   console.log("question_author_id", question?.author);
  console.log("question", question);
  if (question?.author !== session?.user?.id) redirect(ROUTES.QUESTION(id));

  return (
    <main>
      <QuestionForm question={question} isEdit />
    </main>
  );
}
