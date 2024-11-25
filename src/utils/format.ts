// Amount formatting remains unchanged
export const amountFormat = (
    amount: unknown,
    config: { symbol?: string; position?: string; digits?: number; locale?: string } = {}
) => {
    const { symbol = "$", position = "prefix", digits = 2, locale = "en-US" } = config;
    const num = Number(amount) || 0;

    const formattedAmount = num.toLocaleString(locale, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    });

    if (formattedAmount.includes("-") && position === "prefix") {
        return `-${symbol}${formattedAmount.slice(1)}`;
    }

    return position === "prefix" ? `${symbol}${formattedAmount}` : `${formattedAmount} ${symbol}`;
};

// Default config for amount formatting
export const config = {
    symbol: "$",
    position: "prefix",
    locale: "en-US",
    digits: 2,
};
