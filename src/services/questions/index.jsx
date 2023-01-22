import  {useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelect,
  loadingSelect,
  questionSelect,
} from "../../store/features/questions";
import { searchQuetion } from "../../store/features/questions/actions";

const useQuestions = () => {
  const questions = useSelector(questionSelect);
  const loading = useSelector(loadingSelect);
  const error = useSelector(errorSelect);
  const dispatch = useDispatch();

  useEffect(() => {
    searchQuestionHandler('')
  },[])
  const searchQuestionHandler = useCallback(
    (value) => {
      dispatch(searchQuetion(value));
    },
    [dispatch]
  );

  return { searchQuestionHandler, questions, loading, error };
};

export default useQuestions;
