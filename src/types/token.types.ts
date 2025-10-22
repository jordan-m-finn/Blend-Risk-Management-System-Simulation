import { BigNumber } from 'ethers';

/** Ethereum address - using branded for type safety */
export type Address = string & { readonly __brand: 'Address' };

/** Helper to create address type (w/ optional validation) */
export function toAddress(address: string): Address {
    if (!address.match(/^0x[a-fA-F0-9]{40}$/)) {
        throw new Error(`Invalid address: ${address}`);
    }
    return address as Address;
}

/** Token metadata - immutable reference data */
export interface Token {
    readonly symbol: string;
    readonly name: string;
    readonly address: Address;
    readonly decimals: number;
}

/**
 * Token amount with its denomination
 * Always stored as BigNumber in base units (wei)
 */
export interface TokenAmount {
    readonly token: Token;
    readonly amount: BigNumber; // always in smallest unit (wei)
}

/**
 * USD-denominated value
 * Stored as BigNumber with 8 decimals (standard for price feeds)
 */
export interface UsdValue {
    readonly valueUsd: BigNumber; // 8 decimals, e.g., 3500.00000000
}
