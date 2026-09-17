import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="mb-2 text-4xl">{t('notFound.title')}</h1>
      <p className="mb-6 text-base text-black/60">{t('notFound.body')}</p>
      <Link
        to="/"
        className="inline-block rounded bg-primary px-4 py-2 text-sm uppercase text-white shadow transition-colors hover:bg-primary/90"
      >
        {t('notFound.back')}
      </Link>
    </div>
  );
};

export default NotFoundPage;
