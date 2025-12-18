import Viewr from "@/components/feature/counter/viewr.tsx";
import CounterController from "@/components/feature/counter/controller.tsx";

export default function CounterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <Viewr />
      <CounterController />
    </div>
  );
}
