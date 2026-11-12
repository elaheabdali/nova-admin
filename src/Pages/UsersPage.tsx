import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Plus, Search, UserRound } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchUsers } from '../Redux/usersSlice';
import {
  Button,
  Card,
  Input,
  PageTitle,
  Table,
  TableWrap,
} from '../Shared/primitives';
import { EmptyView, ErrorView, LoadingView } from '../Shared/StatusView';
import { useTranslation } from '../Shared/useTranslation';
import { ROUTES } from '../Routes/routePaths';

const SearchBox = styled.div`
  position: relative;
  max-width: 400px;
  margin-bottom: 20px;
  svg {
    position: absolute;
    right: 13px;
    top: 13px;
    color: ${({ theme }) => theme.colors.muted};
  }
  input {
    padding-right: 40px;
  }
`;
const UserMark = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  strong {
    font-size: 12px;
  }
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.accent};
    display: grid;
    place-items: center;
  }
`;

export function UsersPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const t = useTranslation();
  const { items, loading, error, loaded } = useAppSelector((s) => s.users);
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () =>
      items.filter((u) =>
        `${u.name.firstname} ${u.name.lastname} ${u.username} ${u.email} ${u.phone}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [items, query],
  );
  useEffect(() => {
    if (!loaded) void dispatch(fetchUsers());
  }, [dispatch, loaded]);
  return (
    <>
      <PageTitle>
        <div>
          <h1>{t('users')}</h1>
          <p>{t('usersSubtitle')}</p>
        </div>
        <Button onClick={() => navigate(ROUTES.createUser)}>
          <Plus size={17} />
          {t('createUser')}
        </Button>
      </PageTitle>
      <SearchBox>
        <Search size={17} />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchUsers')}
        />
      </SearchBox>
      <Card>
        {loading ? (
          <LoadingView />
        ) : error ? (
          <ErrorView
            message={error}
            onRetry={() => void dispatch(fetchUsers())}
          />
        ) : filtered.length === 0 ? (
          <EmptyView />
        ) : (
          <TableWrap>
            <Table>
              <thead>
                <tr>
                  <th>{t('userName')}</th>
                  <th>{t('username')}</th>
                  <th>{t('email')}</th>
                  <th>{t('phone')}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <UserMark>
                        <span className="avatar">
                          <UserRound size={17} />
                        </span>
                        <strong>
                          {u.name.firstname} {u.name.lastname}
                        </strong>
                      </UserMark>
                    </td>
                    <td>{u.username}</td>
                    <td dir="ltr" style={{ textAlign: 'end' }}>
                      {u.email}
                    </td>
                    <td dir="ltr" style={{ textAlign: 'end' }}>
                      {u.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrap>
        )}
      </Card>
    </>
  );
}
