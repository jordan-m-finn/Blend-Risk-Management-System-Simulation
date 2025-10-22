import { BigNumber } from 'ethers';
import { Address, Token, TokenAmount } from './token.types';

/** Unique identifier for a vault */
export type VaultId = string & { readonly __brand: 'VaultId' };

/** Core vault state */
export interface VaultState {
    readonly id: VaultId;
    readonly collateral: TokenAmount;
    readonly debt: TokenAmount;
    readonly liquidationThreshold: BigNumber; // e.g., 0.05 with 18 decimals
}

/** Vault with current health metrics */
export interface VaultWithHealth extends VaultState {
    readonly healthFactor: BigNumber;
    readonly collateralValueUsd: BigNumber;
    readonly debtValueUsd: BigNumber;
    readonly isLiquidatable: boolean;
    readonly needsRebalancing: boolean;
}

/** Snapshot of vault state at a point in time */
export interface VaultSnapshot {
    readonly vaultId: VaultId;
    readonly timestamp: Date;
    readonly state: VaultState;
    readonly healthFactor: BigNumber;
}
