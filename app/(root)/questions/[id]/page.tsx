import React from "react";

import { RouteParams } from "@/types/global";

export default async function QuestionDetailPage({ params }: RouteParams) {
  const { id } = await params;

  return (
    <div>
      <h2>Question {id}</h2>
    </div>
  );
}
