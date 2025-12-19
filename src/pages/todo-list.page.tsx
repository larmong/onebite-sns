import TodoEditor from "@/components/feature/todo-list/todo-editor.tsx";
import TodoItem from "@/components/feature/todo-list/todo-item.tsx";
import { useTodos } from "@/store/todos.ts";
import { cn } from "@/lib/utils.ts";

export default function TodoListPage() {
  const todos = useTodos();

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoListPage</h1>
      <TodoEditor />
      <div className={cn("pt-2", todos.length !== 0 && "border-t")}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
