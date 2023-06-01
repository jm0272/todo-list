import { useImmer } from "use-immer";

export default function TodoListImmer() {
  const [List, updateList] = useImmer(initialList);
}

const initialList = [
  {
    isCompleted: false,
    job: "",
  },
];
