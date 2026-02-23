const formatterCache = new Map<string, Intl.NumberFormat>();

function getCurrencyFormatter(locale: string, currencyCode: string) {
  const cacheKey = `${locale}:${currencyCode}`;

  if (!formatterCache.has(cacheKey)) {
    formatterCache.set(
      cacheKey,
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
        maximumFractionDigits: 0,
      }),
    );
  }

  return formatterCache.get(cacheKey)!;
}

export function formatCurrency(
  value: number,
  options: { locale?: string; currencyCode?: string } = {},
) {
  const locale = options.locale ?? "en-US";
  const currencyCode = options.currencyCode ?? "USD";

  return getCurrencyFormatter(locale, currencyCode).format(value);
}
