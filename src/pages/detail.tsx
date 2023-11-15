import useTranslation from '@/hooks/use-translation';
import { getDictionaryItems } from '@/lib/api';
import { GetStaticProps } from 'next';

export default function DetailPage() {
  const t = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">{t('detailpage.title')}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const dictionaryItems = await getDictionaryItems(locale ?? 'en');
  return {
    props: {
      dictionaryItems,
    },
    revalidate: 300,
  };
};
