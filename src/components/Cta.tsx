import useTranslation from '@/hooks/use-translation';

const Cta = () => {
  const t = useTranslation();
  return (
    <div className="p-6 border text-center mt-4">
      <h2>{t('cta.title')}</h2>
      <p>{t('cta.description', { count_variable: 20 })}</p>
    </div>
  );
};
export default Cta;
