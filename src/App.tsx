import { ThemeProvider } from '@mui/material/styles';
import Main from './pages/main';
import theme from './context/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
