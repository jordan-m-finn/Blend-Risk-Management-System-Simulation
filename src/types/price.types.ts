import { BigNumber } from 'ethers';
import { Address } from './token.types';

/**
 * Price data for a single asset
 * Prices are stored with 8 decimals (Chainlink Standard)
 */
export interface AssetPrice {
    readonly asset: Address;
    readonly priceUsd: BigNumber;
    readonly timestamp: Date;
}

/** Map of asset addresses to their current Prices */
export type PriceMap = Record<string, BigNumber>;

/** Price update event */
export interface PriceUpdate {
    readonly asset: Address;
    readonly oldPrice: BigNumber;
    readonly newPrice: BigNumber;
    readonly percentageChange: number; // -42.69 ~ 42.69% decrease
    readonly timestamp: Date;
}
