import { useDecrease, useIncrease } from "@/store/count.ts";
import { Button } from "@/components/ui/button.tsx";

export default function CounterController() {
  const increase = useIncrease();
  const decrease = useDecrease();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
