import MainLayout from '../components/MainLayout';
import QuizDetails from '../components/PlayQuizScreen/QuizDetails';

const PlayQuizScreen = ({route}) => {
  const quizData = route.params;

  return (
    <MainLayout>
      <QuizDetails quizData={quizData} />
    </MainLayout>
  );
};

export default PlayQuizScreen;
