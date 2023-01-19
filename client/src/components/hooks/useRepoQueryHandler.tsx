import { useQuery } from '@tanstack/react-query';
import { IUsers } from '~/types';
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
    (): Promise<IUsers> => {
      return search.getUsers({ ownerName, repoName });
    },
    {
      enabled: !!ownerName && !!repoName,
    },
  );
}
