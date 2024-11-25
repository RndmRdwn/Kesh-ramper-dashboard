import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../shadcn/ui/dialog";
import { TransactionType, CurrenciesType } from "@/constant/types/models";

type Props = {
  open: boolean;
  onClose: () => void;
  data: TransactionType | null;
};

const ViewTransaction = ({ open, data, onClose }: Props) => {
  if (!data) return null;

  // Safely extract currency details
  const currencyDetails =
    typeof data.currency === "object" && data.currency
      ? (data.currency as CurrenciesType)
      : null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-medium">Transaction Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Section: Transaction Information */}
          <Section title="Transaction Information">
            <TrxnItem name="UUID" value={data.uuid} />
            <TrxnItem name="Transaction Number" value={data.uuid} />
            <TrxnItem name="Date" value={data.date} />
            <TrxnItem name="Type" value={data.type} />
          </Section>

          {/* Section: Account Information */}
          <Section title="Account Information">
            <TrxnItem name="Account" value={data.account} />
            {data.user && typeof data.user === "object" && (
              <TrxnItem name="User" value={`${data.user.name} (${data.user.email})`} />
            )}
            {data.wallet && typeof data.wallet === "object" && (
              <TrxnItem
                name="Wallet"
                value={`${data.wallet.name} (Balance: ${data.wallet.balance})`}
              />
            )}
          </Section>

          {/* Section: Currency & Amount */}
          <Section title="Currency & Amount">
            {currencyDetails ? (
              <>
                <TrxnItem name="Currency Symbol" value={currencyDetails.symbol} />
                <TrxnItem name="Currency Name" value={currencyDetails.name} />
                <TrxnItem
                  name="Amount"
                  value={`${data.amount} (Decimals: ${currencyDetails.decimals})`}
                />
              </>
            ) : (
              <TrxnItem name="Currency" value={String(data.currency)} />
            )}
          </Section>

          {/* Section: Status Information */}
          <Section title="Status Information">
            <TrxnItem name="Status" value={data.status} />
            <TrxnItem name="Batch ID" value={data.batch_id} />
            <TrxnItem name="Created At" value={data.created_at} />
          </Section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Section Component for grouping fields
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="border-b pb-4 mb-4">
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

// Item Component for displaying a field
const TrxnItem = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <h2 className="text-sm text-muted-foreground">{name}</h2>
      <h2 className="text-sm font-medium">{value || "N/A"}</h2>
    </div>
  );
};

export default ViewTransaction;
