import React from "react";
import { format } from "date-fns";

type Props = { params: { date: string } };

function page({ params }: Props) {
    
  function formatDateString(date: string) {
    const decodedString = decodeURIComponent(date);
    const dateObject = new Date(decodedString);
    return dateObject;
  }

  const date = format(formatDateString(params.date), "PPP");

  return <div>Page: {date}</div>;
}
export default page;
