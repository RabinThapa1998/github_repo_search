import { useQuery } from '@tanstack/react-query';
import { Item, IUsers } from '~/types';
import { search } from '~/services';

export function useRepoQueryHandler({
  ownerName,
  repoName,
}: {
  ownerName: string;
  repoName: string;
}) {
  return useQuery(
    ['SearchDetailRepoAPI', repoName, ownerName],
    (): Promise<[Item, IUsers]> => {
      return Promise.all([
        search.getRepos({ ownerName, repoName }),
        search.getUsers({ ownerName }),
      ]);
    },
    {
      enabled: !!ownerName && !!repoName,
    },
  );
}
