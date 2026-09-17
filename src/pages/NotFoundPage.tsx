import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="mx-auto max-w-2xl px-4 py-16 text-center">
    <h1 className="mb-2 text-4xl">Page not found</h1>
    <p className="mb-6 text-base text-black/60">
      That page does not exist. It may have moved, or the link may be wrong.
    </p>
    <Link
      to="/"
      className="inline-block rounded bg-primary px-4 py-2 text-sm uppercase text-white shadow transition-colors hover:bg-primary/90"
    >
      Back to verbs
    </Link>
  </div>
);

export default NotFoundPage;
