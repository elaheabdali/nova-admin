import { AlertCircle, Inbox, LoaderCircle } from 'lucide-react';
import { Button, EmptyState } from './primitives';
import { useTranslation } from './useTranslation';

export function LoadingView() {
  const t = useTranslation();
  return (
    <EmptyState>
      <LoaderCircle size={27} />
      <div>{t('loading')}</div>
    </EmptyState>
  );
}
export function ErrorView({
  message,
  onRetry,
}: {
  message?: string | null;
  onRetry: () => void;
}) {
  const t = useTranslation();
  return (
    <EmptyState>
      <AlertCircle size={28} />
      <div>{message || t('loadError')}</div>
      <div style={{ marginTop: 16 }}>
        <Button onClick={onRetry} $variant="secondary">
          {t('retry')}
        </Button>
      </div>
    </EmptyState>
  );
}
export function EmptyView() {
  const t = useTranslation();
  return (
    <EmptyState>
      <Inbox size={28} />
      <div>{t('empty')}</div>
    </EmptyState>
  );
}
