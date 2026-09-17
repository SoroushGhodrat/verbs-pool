import { Component, ErrorInfo, ReactNode } from 'react';
import i18n from '../../i18n';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Catches render errors so a single failing subtree does not blank the page.
 * Must be a class component - React has no hook equivalent.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled render error', error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ error: null });
  };

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div role="alert" className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="mb-2 text-3xl">{i18n.t('error.title')}</h1>
        <p className="mb-6 text-base text-black/60">
          {this.state.error.message}
        </p>
        <button
          type="button"
          onClick={this.handleReset}
          className="rounded bg-primary px-4 py-2 text-sm uppercase text-white shadow transition-colors hover:bg-primary/90"
        >
          {i18n.t('error.retry')}
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
