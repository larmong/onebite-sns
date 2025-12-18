import { useCount } from "@/store/count.ts";

export default function Viewr() {
  const count = useCount();

  return <div>{count}</div>;
}
