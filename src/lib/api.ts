export const getDictionaryItems = async (locale: string) => {
  const urlencoded = new URLSearchParams();
  urlencoded.append('id', process.env.POEDITOR_PROJECT_ID!);
  urlencoded.append('api_token', process.env.POEDITOR_API_TOKEN!);
  urlencoded.append('language', locale);
  const dictionaryItems = await fetch(
    'https://api.poeditor.com/v2/terms/list',
    {
      method: 'POST',
      body: urlencoded,
    }
  ).then(res => res.json());
  const terms = dictionaryItems.result.terms as {
    term: string;
    translation: {
      content: string;
    };
  }[];
  return Object.fromEntries(terms.map(el => [el.term, el.translation.content]));
};
