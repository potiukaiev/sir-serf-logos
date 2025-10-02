import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-elevated p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('cookie.title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('cookie.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Button
                onClick={handleDecline}
                variant="outline"
                className="text-sm"
              >
                {t('cookie.decline')}
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
              >
                {t('cookie.accept')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
