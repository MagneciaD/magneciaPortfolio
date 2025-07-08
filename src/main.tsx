import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HashRouter>
);

// Add this inline ErrorBoundary at the top of the file (or in a separate file if you want)
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Boundary>{children}</Boundary>
    </React.Suspense>
  );
}

class Boundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error?: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: "red" }}><h1>App Crashed</h1><pre>{this.state.error?.message}</pre></div>;
    }
    return this.props.children;
  }
}
