import { SuccessSnackbar } from "../components/snackBars/SuccessSnackbar";
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