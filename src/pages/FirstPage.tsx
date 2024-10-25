import { SuccessSnackbar } from "../components/snackBars.tsx/SuccessSnackbar";
import TodoList from "../components/toDoList/TodoList"
import { TodoAppBar } from "../components/toolBar/Toolbar";

const FirstPage: React.FC = () => {
    return (
        <>
        <TodoAppBar/>
        <TodoList/>
        <SuccessSnackbar />
        </>
    );
};

export default FirstPage;