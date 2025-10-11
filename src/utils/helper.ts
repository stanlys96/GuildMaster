import {
  Connection,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";

export async function getEstimatedFee(
  connection: Connection,
  transaction: VersionedTransaction
): Promise<number> {
  const message = TransactionMessage.decompile(
    transaction.message
  ).compileToV0Message();
  const { value } = await connection.getFeeForMessage(message, "confirmed");

  if (value === null) {
    throw new Error("Could not estimate fee");
  }
  return value;
}

export function lamportsToSol(lamports: number): number {
  return lamports / 1e9;
}

export function formatLabel(input: string): string {
  const withSpaces = input.replace(/_/g, " ");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

export function formatCurrencyFromString(value: string): string {
  if (!value) return "";

  // Remove any existing non-digit characters (just in case)
  const numericString = value.replace(/\D+/g, "");

  // Add commas using regex
  return numericString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
