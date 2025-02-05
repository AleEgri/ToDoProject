import { SuccessSnackbar } from "../components/snackBars/SuccessSnackbar";
import TodoList from "../components/toDoList/TodoList"

const FirstPage: React.FC = () => {
    return (
        <>
            <TodoList />
            <SuccessSnackbar />
        </>
    );
};

export default FirstPage;