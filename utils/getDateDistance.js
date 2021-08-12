import { formatDistance } from "date-fns";

export default function getDateDistance(date_string) {
  return (formatDistance(new Date(date_string), new Date(), { addSuffix: true }));
}
