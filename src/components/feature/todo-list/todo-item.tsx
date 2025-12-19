import { useDeleteTodo } from "@/store/todos.ts";
import { Button } from "@/components/ui/button.tsx";

export default function TodoItem({
  id,
  content,
}: {
  id: number;
  content: string;
}) {
  const deleteTodo = useDeleteTodo();

  const handleDeletClick = () => {
    deleteTodo(id);
  };

  return (
    <div
      id={String(id)}
      className="flex items-center justify-between border-b pb-2 mb-2"
    >
      {content}
      <Button onClick={handleDeletClick} variant="destructive">
        삭제
      </Button>
    </div>
  );
}
