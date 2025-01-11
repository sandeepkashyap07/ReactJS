import { Card, CardActions, CardContent, Typography } from "@mui/material";

function TodoItem({ fetchDetailsOfCurrentTodo, todo }) {
  console.log(todo);
  return (
    <Card className="w-90 flex flex-col justify-between">
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <button
          onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
          className="bg-black text-white opacity-50 p-2 rounded-xl hover:opacity-85"
        >
          Show Details
        </button>
      </CardActions>
    </Card>
  );
}
export default TodoItem;
